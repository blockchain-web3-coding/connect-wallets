# My Wallet Connector

My Wallet Connector is a flexible and easy-to-use library for connecting Ethereum wallets in React applications. It supports multiple wallet types including MetaMask, WalletConnect, Coinbase Wallet, and injected wallets.

## Features

- Support for MetaMask, WalletConnect, Coinbase Wallet, and injected wallets
- Easy-to-use React hooks for wallet interactions
- TypeScript support
- Customizable chain support

## Installation

Install the package using npm or yarn:

```bash
npm install my-wallet-connector ethers react-query
# or
yarn add my-wallet-connector ethers react-query
```

## Creating a wallet provider

```js
import React from "react";
import { Web3ProviderWrapper } from "my-wallet-connector";

const connectorConfig = {
  walletconnect: {
    projectId: "YOUR_PROJECT_ID",
    chains: [{ chainId: 1, name: "Ethereum Mainnet" }],
    showQrModal: true,
  },
  coinbase: {
    appName: "My App",
    appLogoUrl: "https://example.com/logo.png",
    jsonRpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
    chainId: 1,
    darkMode: false,
  },
};

const supportedChains = [
  { chainId: 1, name: "Ethereum Mainnet" },
  { chainId: 137, name: "Polygon" },
];

const App = () => (
  <Web3ProviderWrapper
    connectorConfig={connectorConfig}
    supportedChains={supportedChains}>
    {/* Your app components go here */}
  </Web3ProviderWrapper>
);

export default App;
```

## Connecting a wallet

```js
import React from "react";
import { useAccount } from "my-wallet-connector";

const WalletInfo = () => {
  const { account, chainId, signer, connect, disconnect } = useAccount();

  return (
    <div>
      {account ? (
        <>
          <p>Connected account: {account}</p>
          <p>Chain ID: {chainId}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={() => connect("metamask")}>Connect MetaMask</button>
      )}
    </div>
  );
};

export default WalletInfo;
```

## Return type for useAccount

```js
interface Web3ContextType {
  account: string | null;
  chainId: string | null;
  supportedChain: boolean;
  chain: Chain | null;
  connector: Connector | null;
  signer: ethers.Signer | null;
  connect: (
    connectorId: ConnectorId,
    walletConnectOptions?: WalletConnectOptions
  ) => Promise<void>;
  disconnect: () => Promise<void>;
}
```
