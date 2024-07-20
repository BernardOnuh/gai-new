import { ethers } from "ethers";
import { NFTAbi, RaffleAddress, RaffleFactoryAbi } from "./contract";

export async function connecttoContract(RaffleAddress) {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_request_Accounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            return new ethers.Contract( RaffleAddress, RaffleFactoryAbi, signer);
        } else {
            throw new Error("Ethereum Provider not found");
        }
    }  catch (error) {
        console.error('Error Connecting to contract', error);
        throw error;
    }
}
export async function connecttoERC721(nftAddress) {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_request_Accounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            return new ethers.Contract(nftAddress, NFTAbi, signer);
        } else {
            throw new Error("Ethereum Provider not found");
        }
    } catch (error) {
        console.error('Error Connecting to contract', error);
        throw error;
    }
}
export async function toWei(amount) {
    return ethers.utils.parseEther(amount.toString());
}

export async function createRaffle(nftCA, tokenID, ticketP, maxticketsAmounts) {
    try {
        const contract = await connecttoContract(RaffleAddress);
        const approval = await connecttoERC721(nftCA)
        const price = toWei(ticketP);
        await approval.approve(RaffleAddress, tokenID)
        await contract.createRaffle(nftCA, tokenID, price, maxticketsAmounts)
        console.log("Raffle Created")
    } catch (error) {
        console.error("failed to create raffle")
    }
}