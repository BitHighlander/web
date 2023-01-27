import { Center } from '@chakra-ui/react'
import type { Asset } from '@shapeshiftoss/asset-service'
import type { AccountId } from '@shapeshiftoss/caip'
import { fromAccountId, fromAssetId, toAssetId } from '@shapeshiftoss/caip'
import { DefiModalContent } from 'features/defi/components/DefiModal/DefiModalContent'
import { DefiModalHeader } from 'features/defi/components/DefiModal/DefiModalHeader'
import type {
  DefiParams,
  DefiQueryParams,
} from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { DefiAction, DefiStep } from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import qs from 'qs'
import { useEffect, useMemo, useReducer } from 'react'
import { useTranslate } from 'react-polyglot'
import { useSelector } from 'react-redux'
import type { AccountDropdownProps } from 'components/AccountDropdown/AccountDropdown'
import { CircularProgress } from 'components/CircularProgress/CircularProgress'
import type { DefiStepProps } from 'components/DeFi/components/Steps'
import { Steps } from 'components/DeFi/components/Steps'
import { useBrowserRouter } from 'hooks/useBrowserRouter/useBrowserRouter'
import { marketData } from 'state/slices/marketDataSlice/marketDataSlice'
import type { OsmosisPool } from 'state/slices/opportunitiesSlice/resolvers/osmosis/utils'
import {
  getPool,
  getPoolIdFromAssetReference,
} from 'state/slices/opportunitiesSlice/resolvers/osmosis/utils'
import type { LpId } from 'state/slices/opportunitiesSlice/types'
import { toOpportunityId } from 'state/slices/opportunitiesSlice/utils'
import {
  selectAssetById,
  selectEarnUserLpOpportunity,
  selectPortfolioLoading,
} from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { Confirm } from './components/Confirm'
import { Status } from './components/Status'
import { Withdraw } from './components/Withdraw'
import { OsmosisWithdrawActionType } from './WithdrawCommon'
import { WithdrawContext } from './WithdrawContext'
import { initialState, reducer } from './WithdrawReducer'

type OsmosisWithdrawProps = {
  onAccountIdChange: AccountDropdownProps['onChange']
  accountId: AccountId | undefined
}

export const OsmosisWithdraw: React.FC<OsmosisWithdrawProps> = ({
  accountId,
  onAccountIdChange: handleAccountIdChange,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const translate = useTranslate()
  const { query, history, location } = useBrowserRouter<DefiQueryParams, DefiParams>()
  const { chainId, assetNamespace, assetReference } = query
  const userAddress = useMemo(() => accountId && fromAccountId(accountId).account, [accountId])

  // Asset info
  const assetId = toAssetId({
    chainId,
    assetNamespace,
    assetReference,
  })

  const asset = useAppSelector(state => selectAssetById(state, assetId))
  const loading = useSelector(selectPortfolioLoading)
  if (!asset) throw new Error(`Asset not found for AssetId ${assetId}`)

  const opportunityId: LpId | undefined = useMemo(
    () => (assetId ? toOpportunityId({ chainId, assetNamespace, assetReference }) : undefined),
    [assetId, assetNamespace, assetReference, chainId],
  )

  const OsmosisLpOpportunityFilter = useMemo(
    () => ({
      lpId: opportunityId,
      assetId,
      accountId,
    }),
    [accountId, assetId, opportunityId],
  )
  const opportunity = useAppSelector(state =>
    selectEarnUserLpOpportunity(state, OsmosisLpOpportunityFilter),
  )

  const underlyingAsset0Id = useMemo(
    () => opportunity?.underlyingAssetIds[0] ?? '',
    [opportunity?.underlyingAssetIds],
  )
  const underlyingAsset1Id = useMemo(
    () => opportunity?.underlyingAssetIds[1] ?? '',
    [opportunity?.underlyingAssetIds],
  )

  const underlyingAsset0: Asset | undefined = useAppSelector(state =>
    selectAssetById(state, underlyingAsset0Id),
  )
  const underlyingAsset1: Asset | undefined = useAppSelector(state =>
    selectAssetById(state, underlyingAsset1Id),
  )

  const handleBack = () => {
    history.push({
      pathname: location.pathname,
      search: qs.stringify({
        ...query,
        modal: DefiAction.Overview,
      }),
    })
  }

  const StepConfig: DefiStepProps | undefined = useMemo(() => {
    if (!underlyingAsset0 || !underlyingAsset1) return

    return {
      [DefiStep.Info]: {
        label: translate('defi.steps.withdraw.info.title'),
        description: translate('defi.steps.withdraw.info.description', {
          asset: `${underlyingAsset0.symbol} and ${underlyingAsset1.symbol}`,
        }),
        component: ownProps => (
          <Withdraw {...ownProps} accountId={accountId} onAccountIdChange={handleAccountIdChange} />
        ),
      },
      [DefiStep.Confirm]: {
        label: translate('defi.steps.confirm.title'),
        component: ownProps => <Confirm {...ownProps} accountId={accountId} />,
      },
      [DefiStep.Status]: {
        label: translate('defi.steps.status.title'),
        component: Status,
      },
    }
  }, [underlyingAsset0, underlyingAsset1, translate, accountId, handleAccountIdChange])

  useEffect(() => {
    dispatch({
      type: OsmosisWithdrawActionType.SET_USER_ADDRESS,
      payload: userAddress ?? '',
    })

    if (!opportunity) return
    dispatch({ type: OsmosisWithdrawActionType.SET_OPPORTUNITY, payload: opportunity })

    const getPoolData = async (): Promise<OsmosisPool | undefined> => {
      const opportunityAssetId = opportunity.assetId
      if (!opportunityAssetId) return
      const { assetReference: poolAssetReference } = fromAssetId(opportunityAssetId)
      if (!poolAssetReference) return
      const id = getPoolIdFromAssetReference(poolAssetReference)
      if (!id) return
      return await getPool(id)
    }
    getPoolData().then(data => {
      if (!data) return
      dispatch({ type: OsmosisWithdrawActionType.SET_POOL_DATA, payload: data })
    })
  }, [opportunity, userAddress])

  if (loading || !asset || !marketData || !opportunity || !StepConfig) {
    return (
      <Center minW='350px' minH='350px'>
        <CircularProgress />
      </Center>
    )
  }

  return (
    <WithdrawContext.Provider value={{ state, dispatch }}>
      <DefiModalContent>
        <DefiModalHeader
          title={translate('modals.withdraw.withdrawFrom', {
            opportunity: opportunity.opportunityName!,
          })}
          onBack={handleBack}
        />
        <Steps steps={StepConfig} />
      </DefiModalContent>
    </WithdrawContext.Provider>
  )
}
