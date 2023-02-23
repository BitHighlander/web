// Snapshotted as this data is actually deterministic

import { DefiProvider, DefiType } from 'features/defi/contexts/DefiManagerProvider/DefiCommon'

import type { OpportunityMetadata, StakingId } from '../../types'

export enum IdleTag {
  BestYield = 'Best Yield',
  JuniorTranche = 'Junior Tranche',
  SeniorTranche = 'Senior Tranche',
}

// If we can get the base metadata from here, all we need to re-slap in is the APY and TVL really
export const BASE_OPPORTUNITIES_BY_ID: Record<
  StakingId,
  Omit<OpportunityMetadata, 'apy' | 'tvl'>
> = {
  'eip155:1/erc20:0x3fe7940616e5bc47b0775a0dccf6237893353bb4': {
    assetId: 'eip155:1/erc20:0x3fe7940616e5bc47b0775a0dccf6237893353bb4',
    id: 'eip155:1/erc20:0x3fe7940616e5bc47b0775a0dccf6237893353bb4',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x3fe7940616e5bc47b0775a0dccf6237893353bb4',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: [
      'eip155:1/erc20:0xc00e94cb662c3520282e6f5717214004a7f26888',
      'eip155:1/erc20:0x4da27a545c0c5b758a6ba100e3a049001de870f5',
      'eip155:1/erc20:0x875773784af8135ea0ef43b5a374aad105c5d39e',
    ],
    underlyingAssetRatiosBaseUnit: ['1089737340000000000'],
    name: 'DAI Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0x5274891bec421b39d23760c04a6755ecb444797c': {
    assetId: 'eip155:1/erc20:0x5274891bec421b39d23760c04a6755ecb444797c',
    id: 'eip155:1/erc20:0x5274891bec421b39d23760c04a6755ecb444797c',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x5274891bec421b39d23760c04a6755ecb444797c',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: [
      'eip155:1/erc20:0xc00e94cb662c3520282e6f5717214004a7f26888',
      'eip155:1/erc20:0x4da27a545c0c5b758a6ba100e3a049001de870f5',
      'eip155:1/erc20:0x875773784af8135ea0ef43b5a374aad105c5d39e',
    ],
    underlyingAssetRatiosBaseUnit: ['1094446'],
    name: 'USDC Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0xdc7777c771a6e4b3a82830781bdde4dbc78f320e': {
    assetId: 'eip155:1/erc20:0xdc7777c771a6e4b3a82830781bdde4dbc78f320e',
    id: 'eip155:1/erc20:0xdc7777c771a6e4b3a82830781bdde4dbc78f320e',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xdc7777c771a6e4b3a82830781bdde4dbc78f320e',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    underlyingAssetRatiosBaseUnit: ['1004028'],
    name: 'USDC Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0xfa3afc9a194babd56e743fa3b7aa2ccbed3eaaad': {
    assetId: 'eip155:1/erc20:0xfa3afc9a194babd56e743fa3b7aa2ccbed3eaaad',
    id: 'eip155:1/erc20:0xfa3afc9a194babd56e743fa3b7aa2ccbed3eaaad',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xfa3afc9a194babd56e743fa3b7aa2ccbed3eaaad',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    underlyingAssetRatiosBaseUnit: ['1007605'],
    name: 'USDT Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0xec9482040e6483b7459cc0db05d51dfa3d3068e1': {
    assetId: 'eip155:1/erc20:0xec9482040e6483b7459cc0db05d51dfa3d3068e1',
    id: 'eip155:1/erc20:0xec9482040e6483b7459cc0db05d51dfa3d3068e1',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xec9482040e6483b7459cc0db05d51dfa3d3068e1',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    underlyingAssetRatiosBaseUnit: ['1000699940000000000'],
    name: 'DAI Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0xf34842d05a1c888ca02769a633df37177415c2f8': {
    assetId: 'eip155:1/erc20:0xf34842d05a1c888ca02769a633df37177415c2f8',
    id: 'eip155:1/erc20:0xf34842d05a1c888ca02769a633df37177415c2f8',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xf34842d05a1c888ca02769a633df37177415c2f8',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: [
      'eip155:1/erc20:0xc00e94cb662c3520282e6f5717214004a7f26888',
      'eip155:1/erc20:0x4da27a545c0c5b758a6ba100e3a049001de870f5',
      'eip155:1/erc20:0x875773784af8135ea0ef43b5a374aad105c5d39e',
    ],
    underlyingAssetRatiosBaseUnit: ['1115170'],
    name: 'USDT Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0x8c81121b15197fa0eeaee1dc75533419dcfd3151': {
    assetId: 'eip155:1/erc20:0x8c81121b15197fa0eeaee1dc75533419dcfd3151',
    id: 'eip155:1/erc20:0x8c81121b15197fa0eeaee1dc75533419dcfd3151',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x8c81121b15197fa0eeaee1dc75533419dcfd3151',
    underlyingAssetIds: ['eip155:1/erc20:0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'],
    rewardAssetIds: [
      'eip155:1/erc20:0xc00e94cb662c3520282e6f5717214004a7f26888',
      'eip155:1/erc20:0x4da27a545c0c5b758a6ba100e3a049001de870f5',
      'eip155:1/erc20:0x875773784af8135ea0ef43b5a374aad105c5d39e',
    ],
    underlyingAssetRatiosBaseUnit: ['100430909'],
    name: 'WBTC Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0xc8e6ca6e96a326dc448307a5fde90a0b21fd7f80': {
    assetId: 'eip155:1/erc20:0xc8e6ca6e96a326dc448307a5fde90a0b21fd7f80',
    id: 'eip155:1/erc20:0xc8e6ca6e96a326dc448307a5fde90a0b21fd7f80',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xc8e6ca6e96a326dc448307a5fde90a0b21fd7f80',
    underlyingAssetIds: ['eip155:1/erc20:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'],
    rewardAssetIds: [
      'eip155:1/erc20:0xc00e94cb662c3520282e6f5717214004a7f26888',
      'eip155:1/erc20:0x4da27a545c0c5b758a6ba100e3a049001de870f5',
      'eip155:1/erc20:0x875773784af8135ea0ef43b5a374aad105c5d39e',
    ],
    underlyingAssetRatiosBaseUnit: ['1015325040000000000'],
    name: 'WETH Vault',
    version: 'Best Yield',
  },
  'eip155:1/erc20:0x1e095cbf663491f15cc1bdb5919e701b27dde90c': {
    assetId: 'eip155:1/erc20:0x1e095cbf663491f15cc1bdb5919e701b27dde90c',
    id: 'eip155:1/erc20:0x1e095cbf663491f15cc1bdb5919e701b27dde90c',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x1e095cbf663491f15cc1bdb5919e701b27dde90c',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1010487'],
    name: 'USDC Vault',
    version: 'Euler Senior Tranche',
  },
  'eip155:1/erc20:0xe0f126236d2a5b13f26e72cbb1d1ff5f297dda07': {
    assetId: 'eip155:1/erc20:0xe0f126236d2a5b13f26e72cbb1d1ff5f297dda07',
    id: 'eip155:1/erc20:0xe0f126236d2a5b13f26e72cbb1d1ff5f297dda07',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xe0f126236d2a5b13f26e72cbb1d1ff5f297dda07',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1009192'],
    name: 'USDT Vault',
    version: 'Euler Senior Tranche',
  },
  'eip155:1/erc20:0x852c4d2823e98930388b5ce1ed106310b942bd5a': {
    assetId: 'eip155:1/erc20:0x852c4d2823e98930388b5ce1ed106310b942bd5a',
    id: 'eip155:1/erc20:0x852c4d2823e98930388b5ce1ed106310b942bd5a',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x852c4d2823e98930388b5ce1ed106310b942bd5a',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1005738780000000000'],
    name: 'DAI Vault',
    version: 'Euler Senior Tranche',
  },
  'eip155:1/erc20:0x624dfe05202b66d871b8b7c0e14ab29fc3a5120c': {
    assetId: 'eip155:1/erc20:0x624dfe05202b66d871b8b7c0e14ab29fc3a5120c',
    id: 'eip155:1/erc20:0x624dfe05202b66d871b8b7c0e14ab29fc3a5120c',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x624dfe05202b66d871b8b7c0e14ab29fc3a5120c',
    underlyingAssetIds: ['eip155:1/erc20:0x1a7e4e63778b4f12a199c062f3efdd288afcbce8'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1001196280000000000'],
    name: 'AGEUR Vault',
    version: 'Euler Senior Tranche',
  },
  'eip155:1/erc20:0x1af0294524093bfdf5da5135853dc2fc678c12f7': {
    assetId: 'eip155:1/erc20:0x1af0294524093bfdf5da5135853dc2fc678c12f7',
    id: 'eip155:1/erc20:0x1af0294524093bfdf5da5135853dc2fc678c12f7',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x1af0294524093bfdf5da5135853dc2fc678c12f7',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1002631'],
    name: 'USDC Vault',
    version: 'EulerStaking Senior Tranche',
  },
  'eip155:1/erc20:0x62eb6a8c7a555eae3e0b17d42ca9a3299af2787e': {
    assetId: 'eip155:1/erc20:0x62eb6a8c7a555eae3e0b17d42ca9a3299af2787e',
    id: 'eip155:1/erc20:0x62eb6a8c7a555eae3e0b17d42ca9a3299af2787e',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x62eb6a8c7a555eae3e0b17d42ca9a3299af2787e',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1000405440000000000'],
    name: 'DAI Vault',
    version: 'EulerStaking Senior Tranche',
  },
  'eip155:1/erc20:0x6796fcd41e4fb26855bb9bdd7cad41128da1fd59': {
    assetId: 'eip155:1/erc20:0x6796fcd41e4fb26855bb9bdd7cad41128da1fd59',
    id: 'eip155:1/erc20:0x6796fcd41e4fb26855bb9bdd7cad41128da1fd59',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x6796fcd41e4fb26855bb9bdd7cad41128da1fd59',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1194790'],
    name: 'USDT Vault',
    version: 'EulerStaking Senior Tranche',
  },
  'eip155:1/erc20:0x2b7da260f101fb259710c0a4f2efef59f41c0810': {
    assetId: 'eip155:1/erc20:0x2b7da260f101fb259710c0a4f2efef59f41c0810',
    id: 'eip155:1/erc20:0x2b7da260f101fb259710c0a4f2efef59f41c0810',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x2b7da260f101fb259710c0a4f2efef59f41c0810',
    underlyingAssetIds: ['eip155:1/erc20:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1001487090000000000'],
    name: 'WETH Vault',
    version: 'EulerStaking Senior Tranche',
  },
  'eip155:1/erc20:0x376b2dcf9ebd3067bb89eb6d1020fbe604092212': {
    assetId: 'eip155:1/erc20:0x376b2dcf9ebd3067bb89eb6d1020fbe604092212',
    id: 'eip155:1/erc20:0x376b2dcf9ebd3067bb89eb6d1020fbe604092212',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x376b2dcf9ebd3067bb89eb6d1020fbe604092212',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1000184'],
    name: 'USDC Vault',
    version: 'MorphoAave Senior Tranche',
  },
  'eip155:1/erc20:0x69d87d0056256e3df7be9b4c8d6429b4b8207c5e': {
    assetId: 'eip155:1/erc20:0x69d87d0056256e3df7be9b4c8d6429b4b8207c5e',
    id: 'eip155:1/erc20:0x69d87d0056256e3df7be9b4c8d6429b4b8207c5e',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x69d87d0056256e3df7be9b4c8d6429b4b8207c5e',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1000374160000000000'],
    name: 'DAI Vault',
    version: 'MorphoAave Senior Tranche',
  },
  'eip155:1/erc20:0x745e005a5df03bde0e55be811350acd6316894e1': {
    assetId: 'eip155:1/erc20:0x745e005a5df03bde0e55be811350acd6316894e1',
    id: 'eip155:1/erc20:0x745e005a5df03bde0e55be811350acd6316894e1',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x745e005a5df03bde0e55be811350acd6316894e1',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1000822'],
    name: 'USDT Vault',
    version: 'MorphoAave Senior Tranche',
  },
  'eip155:1/erc20:0xe11679cdb4587fee907d69e9ec4a7d3f0c2bcf3b': {
    assetId: 'eip155:1/erc20:0xe11679cdb4587fee907d69e9ec4a7d3f0c2bcf3b',
    id: 'eip155:1/erc20:0xe11679cdb4587fee907d69e9ec4a7d3f0c2bcf3b',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xe11679cdb4587fee907d69e9ec4a7d3f0c2bcf3b',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1059685'],
    name: 'USDC Vault',
    version: 'Euler Junior Tranche',
  },
  'eip155:1/erc20:0xb1ec065abf6783bcce003b8d6b9f947129504854': {
    assetId: 'eip155:1/erc20:0xb1ec065abf6783bcce003b8d6b9f947129504854',
    id: 'eip155:1/erc20:0xb1ec065abf6783bcce003b8d6b9f947129504854',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xb1ec065abf6783bcce003b8d6b9f947129504854',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1084113'],
    name: 'USDT Vault',
    version: 'Euler Junior Tranche',
  },
  'eip155:1/erc20:0x6629baa8c7c6a84290bf9a885825e3540875219d': {
    assetId: 'eip155:1/erc20:0x6629baa8c7c6a84290bf9a885825e3540875219d',
    id: 'eip155:1/erc20:0x6629baa8c7c6a84290bf9a885825e3540875219d',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x6629baa8c7c6a84290bf9a885825e3540875219d',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1041821800000000000'],
    name: 'DAI Vault',
    version: 'Euler Junior Tranche',
  },
  'eip155:1/erc20:0xcf5fd05f72ca777d71fb3e38f296aad7ce735cb7': {
    assetId: 'eip155:1/erc20:0xcf5fd05f72ca777d71fb3e38f296aad7ce735cb7',
    id: 'eip155:1/erc20:0xcf5fd05f72ca777d71fb3e38f296aad7ce735cb7',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xcf5fd05f72ca777d71fb3e38f296aad7ce735cb7',
    underlyingAssetIds: ['eip155:1/erc20:0x1a7e4e63778b4f12a199c062f3efdd288afcbce8'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1119557380000000000'],
    name: 'AGEUR Vault',
    version: 'Euler Junior Tranche',
  },
  'eip155:1/erc20:0x271db794317b44827efe81dec6193ffc277050f6': {
    assetId: 'eip155:1/erc20:0x271db794317b44827efe81dec6193ffc277050f6',
    id: 'eip155:1/erc20:0x271db794317b44827efe81dec6193ffc277050f6',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x271db794317b44827efe81dec6193ffc277050f6',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1006632'],
    name: 'USDC Vault',
    version: 'EulerStaking Junior Tranche',
  },
  'eip155:1/erc20:0x56263bde26b72b3e3d26d8e03399a275aa8bbfb2': {
    assetId: 'eip155:1/erc20:0x56263bde26b72b3e3d26d8e03399a275aa8bbfb2',
    id: 'eip155:1/erc20:0x56263bde26b72b3e3d26d8e03399a275aa8bbfb2',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x56263bde26b72b3e3d26d8e03399a275aa8bbfb2',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1001040600000000000'],
    name: 'DAI Vault',
    version: 'EulerStaking Junior Tranche',
  },
  'eip155:1/erc20:0x00b80fcca0fe4fdc3940295aa213738435b0f94e': {
    assetId: 'eip155:1/erc20:0x00b80fcca0fe4fdc3940295aa213738435b0f94e',
    id: 'eip155:1/erc20:0x00b80fcca0fe4fdc3940295aa213738435b0f94e',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x00b80fcca0fe4fdc3940295aa213738435b0f94e',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1015305'],
    name: 'USDT Vault',
    version: 'EulerStaking Junior Tranche',
  },
  'eip155:1/erc20:0x2e80225f383f858e8737199d3496c5cf827670a5': {
    assetId: 'eip155:1/erc20:0x2e80225f383f858e8737199d3496c5cf827670a5',
    id: 'eip155:1/erc20:0x2e80225f383f858e8737199d3496c5cf827670a5',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x2e80225f383f858e8737199d3496c5cf827670a5',
    underlyingAssetIds: ['eip155:1/erc20:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'],
    rewardAssetIds: ['eip155:1/erc20:0xd9fcd98c322942075a5c3860693e9f4f03aae07b'],
    underlyingAssetRatiosBaseUnit: ['1003487390000000000'],
    name: 'WETH Vault',
    version: 'EulerStaking Junior Tranche',
  },
  'eip155:1/erc20:0x86a40de6d77331788ba24a85221fb8dbfcbc9bf0': {
    assetId: 'eip155:1/erc20:0x86a40de6d77331788ba24a85221fb8dbfcbc9bf0',
    id: 'eip155:1/erc20:0x86a40de6d77331788ba24a85221fb8dbfcbc9bf0',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x86a40de6d77331788ba24a85221fb8dbfcbc9bf0',
    underlyingAssetIds: ['eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1000551'],
    name: 'USDC Vault',
    version: 'MorphoAave Junior Tranche',
  },
  'eip155:1/erc20:0xb098af638af0c4fa3edb1a24f807e9c22da0fe73': {
    assetId: 'eip155:1/erc20:0xb098af638af0c4fa3edb1a24f807e9c22da0fe73',
    id: 'eip155:1/erc20:0xb098af638af0c4fa3edb1a24f807e9c22da0fe73',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xb098af638af0c4fa3edb1a24f807e9c22da0fe73',
    underlyingAssetIds: ['eip155:1/erc20:0x6b175474e89094c44da98b954eedeac495271d0f'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1001038060000000000'],
    name: 'DAI Vault',
    version: 'MorphoAave Junior Tranche',
  },
  'eip155:1/erc20:0xf0c177229ae1cd41bf48df6241fae3e6a14a6967': {
    assetId: 'eip155:1/erc20:0xf0c177229ae1cd41bf48df6241fae3e6a14a6967',
    id: 'eip155:1/erc20:0xf0c177229ae1cd41bf48df6241fae3e6a14a6967',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0xf0c177229ae1cd41bf48df6241fae3e6a14a6967',
    underlyingAssetIds: ['eip155:1/erc20:0xdac17f958d2ee523a2206206994597c13d831ec7'],
    rewardAssetIds: [],
    underlyingAssetRatiosBaseUnit: ['1002474'],
    name: 'USDT Vault',
    version: 'MorphoAave Junior Tranche',
  },
  'eip155:1/erc20:0x2688fc68c4eac90d9e5e1b94776cf14eade8d877': {
    assetId: 'eip155:1/erc20:0x2688fc68c4eac90d9e5e1b94776cf14eade8d877',
    id: 'eip155:1/erc20:0x2688fc68c4eac90d9e5e1b94776cf14eade8d877',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x2688fc68c4eac90d9e5e1b94776cf14eade8d877',
    underlyingAssetIds: ['eip155:1/erc20:0xae7ab96520de3a18e5e111b5eaab095312d7fe84'],
    rewardAssetIds: ['eip155:1/erc20:0x5a98fcbea516cf06857215779fd812ca3bef1b32'],
    underlyingAssetRatiosBaseUnit: ['1024641610000000000'],
    name: 'STETH Vault',
    version: 'Lido Senior Tranche',
  },
  'eip155:1/erc20:0x3a52fa30c33caf05faee0f9c5dfe5fd5fe8b3978': {
    assetId: 'eip155:1/erc20:0x3a52fa30c33caf05faee0f9c5dfe5fd5fe8b3978',
    id: 'eip155:1/erc20:0x3a52fa30c33caf05faee0f9c5dfe5fd5fe8b3978',
    provider: DefiProvider.Idle,
    type: DefiType.Staking,
    underlyingAssetId: 'eip155:1/erc20:0x3a52fa30c33caf05faee0f9c5dfe5fd5fe8b3978',
    underlyingAssetIds: ['eip155:1/erc20:0xae7ab96520de3a18e5e111b5eaab095312d7fe84'],
    rewardAssetIds: ['eip155:1/erc20:0x5a98fcbea516cf06857215779fd812ca3bef1b32'],
    underlyingAssetRatiosBaseUnit: ['1116013050000000000'],
    name: 'STETH Vault',
    version: 'Lido Junior Tranche',
  },
}
