/* eslint-disable no-undef */
import opensea from '@api/opensea';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const userAddress = '0x70B0Ab8B3426D596C3231b33b9C3Cca80F9886F8';

export const nftFetch = async (userAddress) => {
    try {
        // Authenticate using the OpenSea API key from environment variables
        await opensea.auth(process.env.OPENSEA_API_KEY);

        // Set the OpenSea API server
        await opensea.server('https://api.opensea.io');

        // Fetch NFTs for the user address
        const response = await opensea.list_nfts_by_account({
            collection: 'polyfactions',
            chain: 'matic',
            address: userAddress
        });

        const data = response.data; // Extract the data from the response

        // Iterate over NFTs and log relevant information
        const nftData = data.nfts.map(nft => ({
            name: nft.name,
            tokenID: nft.identifier,
            image: nft.display_image_url
        }));

        console.log('NFT Data:', nftData);

        // Example: Let the user select an NFT (this should be done through some UI interaction)
        const selectedTokenID = promptUserForNFTSelection(nftData);

        if (selectedTokenID) {
            // Call the second API with the selected token ID
            await fetchTraits('0xD96E1816569a881459E8354A380415908C6A7F78', selectedTokenID);
        } else {
            console.log('No NFT selected.');
        }
    } catch (err) {
        console.error('Error fetching NFTs:', err);
    }
};

function promptUserForNFTSelection(nftData) {
    // For demonstration purposes, let's log the available NFTs and return one
    console.log('Select an NFT by its index:');

    nftData.forEach((nft, index) => {
        console.log(`${index + 1}. Name: ${nft.name}, Token ID: ${nft.tokenID}`);
    });

    // Simulate user input (in real scenario, capture user input via UI)
    const selectedIndex = 0; // Change this index to simulate different selections
    const selectedNFT = nftData[selectedIndex];

    if (selectedNFT) {
        console.log(`Selected NFT: Name: ${selectedNFT.name}, Token ID: ${selectedNFT.tokenID}`);
        return selectedNFT.tokenID;
    }

    return null;
}

async function fetchTraits(contractAddress, tokenID) {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };

    try {
        const response = await axios.get(
            `https://polygon-mainnet.g.alchemy.com/nft/v3/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenID}&refreshCache=false`,
            options
        );
        const data = response.data;

        const traits = data.raw.metadata.attributes.map(attribute => ({
            trait_type: attribute.trait_type,
            value: attribute.value
        }));

        console.log('Traits:', traits);

        return { traits };
    } catch (err) {
        console.error('Error fetching traits:', err);
        return null;
    }
}

// Execute the NFT fetch
nftFetch(userAddress);
