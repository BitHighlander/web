import type { CosmosDepositActions, CosmosDepositState } from './DepositCommon'
import { CosmosDepositActionType } from './DepositCommon'

export const initialState: CosmosDepositState = {
  txid: null,
  apy: '',
  userAddress: null,
  loading: false,
  pricePerShare: '',
  deposit: {
    fiatAmount: '',
    cryptoAmount: '',
    txStatus: 'pending',
    usedGasFee: '',
  },
}

export const reducer = (
  state: CosmosDepositState,
  action: CosmosDepositActions,
): CosmosDepositState => {
  switch (action.type) {
    case CosmosDepositActionType.SET_OPPORTUNITY:
      return {
        ...state,
        apy: action.payload ?? '',
      }
    case CosmosDepositActionType.SET_DEPOSIT:
      return { ...state, deposit: { ...state.deposit, ...action.payload } }
    case CosmosDepositActionType.SET_USER_ADDRESS:
      return { ...state, userAddress: action.payload }
    case CosmosDepositActionType.SET_LOADING:
      return { ...state, loading: action.payload }
    case CosmosDepositActionType.SET_TXID:
      return { ...state, txid: action.payload }
    default:
      return state
  }
}
