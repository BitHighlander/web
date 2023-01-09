import * as keepkeyRest from '@keepkey/hdwallet-keepkey-rest'
import { KeepKeyIcon } from 'components/Icons/KeepKeyIcon'
import type { SupportedWalletInfo } from 'context/WalletProvider/config'

export const KeepKeyConfig: Omit<SupportedWalletInfo, 'routes'> = {
  adapter: keepkeyRest,
  icon: KeepKeyIcon,
  name: 'KeepKey',
}
