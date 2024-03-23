import { ConnectWallet } from "@thirdweb-dev/react";

const ConnectBtn = () => {
  return (
    <ConnectWallet switchToActiveChain={true} />
  )
}

export default ConnectBtn