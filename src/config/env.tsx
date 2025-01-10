//Moralis Access
const devMode: string = import.meta.env.VITE_DEVELOPMENT_MODE

const appId: string = import.meta.env.VITE_MORALIS_APP_ID
const masterKey: string = import.meta.env.VITE_MORALIS_MASTER_KEY_PROD
const owner = import.meta.env.VITE_OWNER

const moralisApiKey: string =
  devMode === 'prod' ? import.meta.env.VITE_MORALIS_API_KEY_PROD : import.meta.env.VITE_MORALIS_API_KEY_DEV
const serverUrl: string =
  devMode === 'prod' ? import.meta.env.VITE_MORALIS_SERVER_URL_PROD : import.meta.env.VITE_MORALIS_SERVER_URL_DEV
const apiAlchemy: string =
  devMode === 'prod' ? import.meta.env.VITE_ALCHEMY_PRIVATE_API_KEY_PROD : import.meta.env.VITE_ALCHEMY_PRIVATE_API_KEY_DEV
const urlProvider: string =
  devMode === 'prod' ? import.meta.env.VITE_ALCHEMY_URL_PROVIDER_PROD : import.meta.env.VITE_ALCHEMY_URL_PROVIDER_DEV

const stripePubKey: string =
  devMode === 'prod' ? import.meta.env.VITE_STRIPE_PUBLIC_KEY_PROD : import.meta.env.VITE_STRIPE_PUBLIC_KEY_DEV
const stripePrivKey: string =
  devMode === 'prod' ? import.meta.env.VITE_STRIPE_PRIVATE_KEY_PROD : import.meta.env.VITE_STRIPE_PRIVATE_KEY_DEV
const stripeProducKNRT: string =
  devMode === 'prod' ? import.meta.env.VITE_STRIPE_PRODUCT_KNRT_PROD : import.meta.env.VITE_STRIPE_PRODUCT_KNRT_DEV
const stripeProducMatic: string =
  devMode === 'prod' ? import.meta.env.VITE_STRIPE_PRODUCT_MATIC_PROD : import.meta.env.VITE_STRIPE_PRODUCT_MATIC_DEV
const stripeProducTestToken: string =
  devMode === 'prod'
    ? import.meta.env.VITE_STRIPE_PRODUCT_KNRT_TEST_CNRT_PROD
    : import.meta.env.VITE_STRIPE_PRODUCT_KNRT_TEST_CNRT_DEV

const token = devMode === 'prod' ? import.meta.env.VITE_TOKEN_ERC20_PROD : import.meta.env.VITE_TOKEN_ERC20_DEV
const auction =
  devMode === 'prod' ? import.meta.env.VITE_TOKEN_ERC721_AUCTION_PROD : import.meta.env.VITE_TOKEN_ERC721_AUCTION_DEV
const collection =
  devMode === 'prod' ? import.meta.env.VITE_TOKEN_ERC721_COLLECTION_PROD : import.meta.env.VITE_TOKEN_ERC721_COLLECTION_DEV

const red = devMode === 'prod' ? import.meta.env.VITE_CHAIN_ID_MAINNET_PROD : import.meta.env.VITE_CHAIN_ID_TESTNET_DEV

const currencyPriceContract =
  devMode === 'prod' ? import.meta.env.VITE_CURRENCY_PRICE_CONTRACT_PROD : import.meta.env.VITE_CURRENCY_PRICE_CONTRACT_DEV
const blockExplorerUrl =
  devMode === 'prod' ? import.meta.env.VITE_BLOCK_EXPLORER_URL_PROD : import.meta.env.VITE_BLOCK_EXPLORER_URL_DEV
const nameToken = devMode === 'prod' ? import.meta.env.VITE_NAME_TOKEN_PROD : import.meta.env.VITE_NAME_TOKEN_DEV

//Contracts Access
const contracts: {
  token: string
  auction: string
  collection: string
} = {
  token: token,
  auction: auction,
  collection: collection,
}

const chainID: {
  red: string
} = {
  red: red,
}

//creator access
const creator: {
  owner: string
} = {
  owner: owner,
}

//Auth Access
const auth: {
  currencyContract: string
  blockExplorerUrl: string
  token: string
} = {
  currencyContract: currencyPriceContract, // direccion de smart-contract de MATIC EN BSC
  blockExplorerUrl: blockExplorerUrl,
  token: nameToken,
}

export {
  serverUrl,
  appId,
  masterKey,
  moralisApiKey,
  contracts,
  chainID,
  creator,
  auth,
  apiAlchemy,
  urlProvider,
  stripePubKey,
  stripePrivKey,
  stripeProducKNRT,
  stripeProducMatic,
  stripeProducTestToken,
}
