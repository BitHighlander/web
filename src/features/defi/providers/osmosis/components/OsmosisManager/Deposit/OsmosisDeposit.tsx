import { Center, useToast } from '@chakra-ui/react'
import type { AccountId } from '@shapeshiftoss/caip'
import { toAssetId } from '@shapeshiftoss/caip'
import { DefiModalContent } from 'features/defi/components/DefiModal/DefiModalContent'
import { DefiModalHeader } from 'features/defi/components/DefiModal/DefiModalHeader'
import type {
  DefiParams,
  DefiQueryParams,
} from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { DefiAction, DefiStep } from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { useOsmosis } from 'features/defi/contexts/OsmosisProvider/OsmosisProvider'
import qs from 'qs'
import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { useTranslate } from 'react-polyglot'
import { useSelector } from 'react-redux'
import type { AccountDropdownProps } from 'components/AccountDropdown/AccountDropdown'
import { CircularProgress } from 'components/CircularProgress/CircularProgress'
import type { DefiStepProps } from 'components/DeFi/components/Steps'
import { Steps } from 'components/DeFi/components/Steps'
import { getChainAdapterManager } from 'context/PluginProvider/chainAdapterSingleton'
import { useBrowserRouter } from 'hooks/useBrowserRouter/useBrowserRouter'
import { useWallet } from 'hooks/useWallet/useWallet'
import { logger } from 'lib/logger'
import {
  selectAssetById,
  selectBIP44ParamsByAccountId,
  selectMarketDataById,
  selectPortfolioLoading,
} from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { Confirm } from './components/Confirm'
import { Deposit } from './components/Deposit'
import { Status } from './components/Status'
import { OsmosisDepositActionType } from './DepositCommon'
import { DepositContext } from './DepositContext'
import { initialState, reducer } from './DepositReducer'

const moduleLogger = logger.child({
  namespace: ['DeFi', 'Providers', 'Osmosis', 'OsmosisDeposit'],
})

export const OsmosisDeposit: React.FC<{
  onAccountIdChange: AccountDropdownProps['onChange']
  accountId: AccountId | undefined
}> = ({ onAccountIdChange: handleAccountIdChange, accountId }) => {
  const { osmosis: api } = useOsmosis()
  const [state, dispatch] = useReducer(reducer, initialState)
  const translate = useTranslate()
  const toast = useToast()
  const { query, history, location } = useBrowserRouter<DefiQueryParams, DefiParams>()
  const chainAdapterManager = getChainAdapterManager()
  const { chainId, contractAddress: vaultAddress, assetReference } = query

  const assetNamespace = 'slip44'
  const assetId = toAssetId({ chainId, assetNamespace, assetReference })
  const asset = useAppSelector(state => selectAssetById(state, assetId))
  const marketData = useAppSelector(state => selectMarketDataById(state, assetId))

  const accountFilter = useMemo(() => ({ accountId: accountId ?? '' }), [accountId])
  const bip44Params = useAppSelector(state => selectBIP44ParamsByAccountId(state, accountFilter))

  // user info
  const chainAdapter = chainAdapterManager.get(chainId)
  const { state: walletState } = useWallet()
  const loading = useSelector(selectPortfolioLoading)

  useEffect(() => {
    ;(async () => {
      try {
        if (!(walletState.wallet && vaultAddress && chainAdapter && api && bip44Params)) return
        const [address, opportunity] = await Promise.all([
          chainAdapter.getAddress({ wallet: walletState.wallet, bip44Params }),
          api.findByOpportunityId(
            toAssetId({ chainId, assetNamespace, assetReference: vaultAddress }),
          ),
        ])
        if (!opportunity) {
          return toast({
            position: 'top-right',
            description: translate('common.somethingWentWrongBody'),
            title: translate('common.somethingWentWrong'),
            status: 'error',
          })
        }

        dispatch({ type: OsmosisDepositActionType.SET_USER_ADDRESS, payload: address })
        dispatch({ type: OsmosisDepositActionType.SET_OPPORTUNITY, payload: opportunity })
      } catch (error) {
        // TODO: handle client side errors
        moduleLogger.error(error, 'OsmosisDeposit error')
      }
    })()
  }, [api, chainAdapter, vaultAddress, walletState.wallet, translate, toast, chainId, bip44Params])

  const handleBack = useCallback(() => {
    history.push({
      pathname: location.pathname,
      search: qs.stringify({
        ...query,
        modal: DefiAction.Overview,
      }),
    })
  }, [history, location, query])

  const StepConfig: DefiStepProps = useMemo(() => {
    return {
      [DefiStep.Info]: {
        label: translate('defi.steps.deposit.info.title'),
        description: translate('defi.steps.deposit.info.description', { asset: asset.symbol }),
        component: ownProps => (
          <Deposit {...ownProps} accountId={accountId} onAccountIdChange={handleAccountIdChange} />
        ),
      },
      [DefiStep.Confirm]: {
        label: translate('defi.steps.confirm.title'),
        component: ownProps => <Confirm {...ownProps} accountId={accountId} />,
      },
      [DefiStep.Status]: {
        label: 'Status',
        component: ownProps => <Status {...ownProps} accountId={accountId} />,
      },
    }
  }, [accountId, handleAccountIdChange, asset.symbol, translate])

  if (loading || !asset || !marketData || !api) {
    return (
      <Center minW='350px' minH='350px'>
        <CircularProgress />
      </Center>
    )
  }

  return (
    <DepositContext.Provider value={{ state, dispatch }}>
      <DefiModalContent>
        <DefiModalHeader
          title={translate('modals.deposit.depositInto', { opportunity: `${asset.symbol} Vault` })}
          onBack={handleBack}
        />
        <Steps steps={StepConfig} />
      </DefiModalContent>
    </DepositContext.Provider>
  )
}
