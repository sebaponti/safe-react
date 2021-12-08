import avaxLogo from 'src/config/assets/token_avax.svg'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  SHORT_NAME,
  FEATURES,
  NetworkConfig,
  WALLETS,
} from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'http://localhost:8002/v1',
  txServiceUrl: 'http://localhost:8000/api/v1',
  gasPriceOracles: [
    {
      url: '',
      gasParameter: 'standard',
      gweiFactor: '25e9',
    },
  ],
  rpcServiceUrl: 'https://api.avax.network/ext/bc/C/rpc',
  safeAppsRpcServiceUrl: 'https://api.avax.network/ext/bc/C/rpc',
  networkExplorerName: 'Avalanche C-Chain Explorer',
  networkExplorerUrl: 'https://snowtrace.io/',
  networkExplorerApiUrl: 'https://snowtrace.io/',
}

const avalanche: NetworkConfig = {
  environment: {
    test: baseConfig,
    dev: baseConfig,
    staging: baseConfig,
    production: {
      ...baseConfig,
      clientGatewayUrl: 'http://localhost:8002/v1',
      txServiceUrl: 'http://localhost:8000/api/v1',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.AVALANCHE,
    shortName: SHORT_NAME.AVALANCHE,
    backgroundColor: '#E84142',
    textColor: '#ffffff',
    label: 'Avalanche C-Chain',
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
      logoUri: avaxLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
    WALLETS.KEYSTONE,
    WALLETS.PORTIS,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP, FEATURES.SPENDING_LIMIT],
}

export default avalanche
