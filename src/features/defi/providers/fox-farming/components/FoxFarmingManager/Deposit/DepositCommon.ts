type EstimatedGas = {
  estimatedGasCrypto?: string
}

type DepositValues = {
  fiatAmount: string
  cryptoAmount: string
}

type FoxFarmingDepositValues = DepositValues &
  EstimatedGas & {
    txStatus: string
    usedGasFee: string
  }

export type FoxFarmingDepositState = {
  userAddress: string | null
  approve: EstimatedGas
  deposit: FoxFarmingDepositValues
  loading: boolean
  txid: string | null
}

export enum FoxFarmingDepositActionType {
  SET_APPROVE = 'SET_APPROVE',
  SET_USER_ADDRESS = 'SET_USER_ADDRESS',
  SET_DEPOSIT = 'SET_DEPOSIT',
  SET_LOADING = 'SET_LOADING',
  SET_TXID = 'SET_TXID',
}

type SetApprove = {
  type: FoxFarmingDepositActionType.SET_APPROVE
  payload: EstimatedGas
}

type SetDeposit = {
  type: FoxFarmingDepositActionType.SET_DEPOSIT
  payload: any
}

type SetUserAddress = {
  type: FoxFarmingDepositActionType.SET_USER_ADDRESS
  payload: string
}

type SetLoading = {
  type: FoxFarmingDepositActionType.SET_LOADING
  payload: boolean
}

type SetTxid = {
  type: FoxFarmingDepositActionType.SET_TXID
  payload: string
}

export type FoxFarmingDepositActions =
  | SetApprove
  | SetDeposit
  | SetUserAddress
  | SetLoading
  | SetTxid
