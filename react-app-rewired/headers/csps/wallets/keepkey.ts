import type { Csp } from '../../types'

export const csp: Csp = {
  'connect-src': [
    process.env.REACT_APP_KEEPKEY_VERSIONS_URL!,
    process.env.REACT_APP_KEEPKEY_DESKTOP_URL!,
    'https://api.github.com/repos/keepkey/keepkey-desktop/releases/latest',
    'https://api.github.com/repos/keepkey/keepkey-desktop/releases/*',
    'https://github.com/keepkey/keepkey-desktop/releases/download/*',
    'https://github.com/keepkey/keepkey-desktop/releases/latest',
  ],
  'navigate-to': [
    'https://github.com/keepkey/keepkey-desktop/releases/download/*',
    'https://github.com/keepkey/keepkey-desktop/releases/latest',
  ]
}
