import axios from 'axios';
import opensea from '@api/opensea';
import dotenv from 'dotenv';

dotenv.config();

// Function to fetch NFTs using the OpenSea API
const nftFetch = async (userAddress) => {
    try {
        // OpenSea API endpoint
        await opensea.auth('118c9d2f3e35451db2ae43f8590cc266');
        await opensea.server('https://api.opensea.io');

        // Extract and log the NFT data
        const response = await opensea.list_nfts_by_account({
            collection: 'polyfactions',
            chain: 'matic',
            address: userAddress
        });

        const data = response.data;

        console.log(response)

        if (!data || !data.nfts) {
            console.error('No NFTs data found in the response.');
            return;
        }

        const nftData = data.nfts.map(nft => ({
            name: nft.name,
            tokenID: nft.identifier,
            image: nft.display_image_url
        }));
        console.log('NFT Data:', nftData);

        // Example: Let the user select an NFT
        const selectedTokenID = promptUserForNFTSelection(nftData);

        if (selectedTokenID) {
            // Call the second API with the selected token ID
            await fetchTraits('0xD96E1816569a881459E8354A380415908C6A7F78', selectedTokenID);
        } else {
            console.log('No NFT selected.');
        }
    } catch (err) {
        console.error('Error fetching NFTs:', err.response?.data || err.message);
    }
};

function promptUserForNFTSelection(nftData) {
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
        headers: { accept: 'application/json' },
    };

    try {
        const response = await axios.get(
            `https://polygon-mainnet.g.alchemy.com/nft/v3/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenID}&refreshCache=false`,
            options
        );
        const data = response.data;

        const traits = data.raw.metadata.attributes.map((attribute) => ({
            trait_type: attribute.trait_type,
            value: attribute.value,
        }));

        console.log('Traits:', traits);

        return { traits };
    } catch (err) {
        console.error('Error fetching traits:', err.response?.data || err.message);
        return null;
    }
}

// Execute the NFT fetch
export default nftFetch;

// nftFetch('0xb9c627A94EDF9f55e5F6917B6b0696e55660C7Ed');
