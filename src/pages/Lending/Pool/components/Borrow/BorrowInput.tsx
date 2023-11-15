import { ArrowDownIcon } from '@chakra-ui/icons'
import {
  Button,
  CardFooter,
  Collapse,
  Divider,
  Flex,
  IconButton,
  Skeleton,
  Stack,
} from '@chakra-ui/react'
import type { AccountId, AssetId } from '@shapeshiftoss/caip'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslate } from 'react-polyglot'
import { useHistory } from 'react-router'
import { Amount } from 'components/Amount/Amount'
import { TradeAssetSelect } from 'components/MultiHopTrade/components/AssetSelection'
import { TradeAssetInput } from 'components/MultiHopTrade/components/TradeAssetInput'
import { Row } from 'components/Row/Row'
import { SlideTransition } from 'components/SlideTransition'
import { useModal } from 'hooks/useModal/useModal'
import type { Asset } from 'lib/asset-service'
import { bn, bnOrZero } from 'lib/bignumber/bignumber'
import { useLendingQuoteOpenQuery } from 'pages/Lending/hooks/useLendingQuoteQuery'
import { useLendingSupportedAssets } from 'pages/Lending/hooks/useLendingSupportedAssets'
import {
  selectAssetById,
  selectPortfolioCryptoBalanceBaseUnitByFilter,
} from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { LoanSummary } from '../LoanSummary'
import { BorrowRoutePaths } from './types'
const formControlProps = {
  borderRadius: 0,
  background: 'transparent',
  borderWidth: 0,
  paddingBottom: 0,
}

type BorrowInputProps = {
  collateralAssetId: AssetId
  cryptoDepositAmount: string | null
  fiatDepositAmount: string | null
  onDepositAmountChange: (value: string, isFiat?: boolean) => void
  collateralAccountId: AccountId
  onCollateralAccountIdChange: (accountId: AccountId) => void
  onBorrowAccountIdChange: (accountId: AccountId) => void
  borrowAsset: Asset | null
  setBorrowAsset: (asset: Asset) => void
}

export const BorrowInput = ({
  collateralAssetId,
  cryptoDepositAmount,
  fiatDepositAmount,
  onDepositAmountChange,
  collateralAccountId,
  onCollateralAccountIdChange: handleCollateralAccountIdChange,
  onBorrowAccountIdChange: handleBorrowAccountIdChange,
  borrowAsset,
  setBorrowAsset,
}: BorrowInputProps) => {
  const translate = useTranslate()
  const history = useHistory()

  const { data: lendingSupportedAssets } = useLendingSupportedAssets()

  useEffect(() => {
    if (!lendingSupportedAssets) return

    setBorrowAsset(lendingSupportedAssets[0])
  }, [lendingSupportedAssets, setBorrowAsset])

  const collateralAsset = useAppSelector(state => selectAssetById(state, collateralAssetId))

  const swapIcon = useMemo(() => <ArrowDownIcon />, [])

  const percentOptions = useMemo(() => [0], [])

  const onSubmit = useCallback(() => {
    history.push(BorrowRoutePaths.Confirm)
  }, [history])

  const buyAssetSearch = useModal('buyAssetSearch')
  const handleBorrowAssetClick = useCallback(() => {
    buyAssetSearch.open({
      onClick: setBorrowAsset,
      title: 'lending.borrow',
      assets: lendingSupportedAssets,
    })
  }, [buyAssetSearch, lendingSupportedAssets, setBorrowAsset])

  const handleAssetChange = useCallback((asset: Asset) => {
    return console.info(asset)
  }, [])

  const handleDepositInputChange = useCallback(
    (value: string, isFiat?: boolean) => {
      onDepositAmountChange(value, isFiat)
    },
    [onDepositAmountChange],
  )

  const balanceFilter = useMemo(
    () => ({ assetId: collateralAssetId, accountId: collateralAccountId }),
    [collateralAssetId, collateralAccountId],
  )
  const balance = useAppSelector(state =>
    selectPortfolioCryptoBalanceBaseUnitByFilter(state, balanceFilter),
  )
  const amountAvailableCryptoPrecision = useMemo(
    () => bnOrZero(balance).div(bn(10).pow(collateralAsset?.precision ?? '0')),
    [balance, collateralAsset?.precision],
  )

  // TODO(gomes): include gas checks
  const hasEnoughBalance = useMemo(
    () => bnOrZero(cryptoDepositAmount).lte(amountAvailableCryptoPrecision),
    [amountAvailableCryptoPrecision, cryptoDepositAmount],
  )

  const quoteErrorTranslation = useMemo(() => {
    if (!hasEnoughBalance) return 'common.insufficientFunds'
    return null
  }, [hasEnoughBalance])

  const depositAssetSelectComponent = useMemo(() => {
    return (
      <TradeAssetSelect
        assetId={collateralAssetId}
        onAssetClick={handleBorrowAssetClick}
        onAssetChange={handleAssetChange}
        isReadOnly
      />
    )
  }, [collateralAssetId, handleAssetChange, handleBorrowAssetClick])

  const borrowAssetSelectComponent = useMemo(() => {
    return (
      <TradeAssetSelect
        assetId={borrowAsset?.assetId ?? ''}
        onAssetClick={handleBorrowAssetClick}
        onAssetChange={handleAssetChange}
      />
    )
  }, [borrowAsset?.assetId, handleAssetChange, handleBorrowAssetClick])

  const useLendingQuoteQueryArgs = useMemo(
    () => ({
      collateralAssetId,
      borrowAssetId: borrowAsset?.assetId ?? '',
      depositAmountCryptoPrecision: cryptoDepositAmount ?? '0',
    }),
    [borrowAsset?.assetId, collateralAssetId, cryptoDepositAmount],
  )
  const {
    data,
    isLoading: isLendingQuoteLoading,
    isError: isLendingQuoteError,
  } = useLendingQuoteOpenQuery(useLendingQuoteQueryArgs)

  const lendingQuoteData = isLendingQuoteError ? null : data

  if (!(collateralAsset && borrowAsset)) return null

  return (
    <SlideTransition>
      <Stack spacing={0}>
        <TradeAssetInput
          accountId={collateralAccountId}
          assetId={collateralAssetId}
          assetSymbol={collateralAsset.symbol}
          assetIcon={collateralAsset.icon}
          onChange={handleDepositInputChange}
          cryptoAmount={cryptoDepositAmount ?? '0'}
          fiatAmount={fiatDepositAmount ?? '0'}
          isSendMaxDisabled={false}
          percentOptions={percentOptions}
          showInputSkeleton={false}
          showFiatSkeleton={false}
          label={`Deposit ${collateralAsset.symbol}`}
          onAccountIdChange={handleCollateralAccountIdChange}
          formControlProps={formControlProps}
          layout='inline'
          labelPostFix={depositAssetSelectComponent}
        />
        <Flex alignItems='center' justifyContent='center' my={-2}>
          <Divider />
          <IconButton
            isRound
            size='sm'
            position='relative'
            variant='outline'
            borderColor='border.base'
            zIndex={1}
            aria-label='Switch Assets'
            icon={swapIcon}
          />
          <Divider />
        </Flex>
        <TradeAssetInput
          assetId={borrowAsset?.assetId ?? ''}
          assetSymbol={borrowAsset.symbol}
          assetIcon={borrowAsset.icon}
          cryptoAmount={lendingQuoteData?.quoteBorrowedAmountCryptoPrecision ?? '0'}
          fiatAmount={lendingQuoteData?.quoteBorrowedAmountUserCurrency ?? '0'}
          isReadOnly
          isSendMaxDisabled={false}
          percentOptions={percentOptions}
          showInputSkeleton={false}
          showFiatSkeleton={false}
          label={'Borrow'}
          onAccountIdChange={handleBorrowAccountIdChange}
          formControlProps={formControlProps}
          layout='inline'
          labelPostFix={borrowAssetSelectComponent}
        />
        <Collapse in={true}>
          <LoanSummary
            collateralAssetId={collateralAssetId}
            depositAmountCryptoPrecision={cryptoDepositAmount ?? '0'}
            borrowAssetId={borrowAsset?.assetId ?? ''}
          />
        </Collapse>
        {!isLendingQuoteError && (
          <CardFooter
            borderTopWidth={1}
            borderColor='border.subtle'
            flexDir='column'
            gap={4}
            px={6}
            py={4}
            bg='background.surface.raised.accent'
            borderBottomRadius='xl'
          >
            <Row fontSize='sm' fontWeight='medium'>
              <Row.Label>{translate('common.slippage')}</Row.Label>
              <Row.Value>
                <Skeleton isLoaded={!isLendingQuoteLoading}>
                  <Amount.Crypto
                    value={lendingQuoteData?.quoteSlippageBorrowedAssetCryptoPrecision ?? '0'}
                    symbol='BTC'
                  />
                </Skeleton>
              </Row.Value>
            </Row>
            <Row fontSize='sm' fontWeight='medium'>
              <Row.Label>{translate('common.gasFee')}</Row.Label>
              <Row.Value>
                <Skeleton isLoaded={!isLendingQuoteLoading}>
                  <Amount.Fiat value='TODO' />
                </Skeleton>
              </Row.Value>
            </Row>
            <Row fontSize='sm' fontWeight='medium'>
              <Row.Label>{translate('common.fees')}</Row.Label>
              <Row.Value>
                <Skeleton isLoaded={!isLendingQuoteLoading}>
                  <Amount.Fiat value={data?.quoteTotalFeesFiatUserCurrency ?? '0'} />
                </Skeleton>
              </Row.Value>
            </Row>
            <Button
              size='lg'
              colorScheme={quoteErrorTranslation ? 'red' : 'blue'}
              mx={-2}
              onClick={onSubmit}
              isDisabled={Boolean(quoteErrorTranslation)}
            >
              {quoteErrorTranslation ? translate(quoteErrorTranslation) : 'Borrow'}
            </Button>
          </CardFooter>
        )}
      </Stack>
    </SlideTransition>
  )
}