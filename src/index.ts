// Connectors
export { BaseConnector } from "./connectors/BaseConnector";
export { InjectedConnector } from "./connectors/InjectedConnector";
export { MetaMaskConnector } from "./connectors/MetaMaskConnector";
export { CoinbaseConnector } from "./connectors/CoinbaseConnector";
export { WalletConnectConnector } from "./connectors/WalletConnectConnector";

// Hooks
export { useSwitchChain } from "./hooks/useSwitchChain";

// Types
export * from "./utils/types";

// Provider
export {
  Web3Provider,
  Web3ProviderWrapper,
  useAccount,
} from "./provider/Provider";
