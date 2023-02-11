import { KeplrAdapter } from '@shapeshiftoss/hdwallet-keplr'
import { KeplrIcon } from 'components/Icons/KeplrIcon'
import type { SupportedWalletInfo } from 'context/WalletProvider/config'

export const KeplrConfig: Omit<SupportedWalletInfo, 'routes'> = {
  adapter: [KeplrAdapter],
  icon: KeplrIcon,
  name: 'Keplr',
}
