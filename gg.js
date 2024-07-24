// src/nftService.js

import axios from 'axios';

/**
 * Fetches NFT metadata for a given contract address and token ID.
 * @param {string} contractAddress - The contract address of the NFT.
 * @param {number|string} tokenId - The token ID of the NFT.
 * @returns {Promise<object|null>} - Returns an object containing NFT details and traits, or null if an error occurs.
 */
export async function fetchTraits(contractAddress) {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' },
    };

    try {
        const response = await axios.get(
            `https://polygon-mainnet.g.alchemy.com/nft/v3/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb/getNFTMetadata?contractAddress=${contractAddress}&tokenId=44&refreshCache=false`,
            options
        );
        const data = response.data;

        console.log("API Response Data: ", data); // Log the response data for debugging

        const basicDetails = {
            name: data.name,
            description: data.description,
            tokenId: data.tokenId,
            image: data.image.cachedUrl,
            collectionName: data.collection.name,
            contractAddress: data.contract.address,
        };

        const traits = data.rawMetadata.attributes.map((attribute) => ({
            trait_type: attribute.trait_type,
            value: attribute.value,
        }));

        return { basicDetails, traits };
    } catch (err) {
        console.error('Error fetching NFT metadata:', err);
        return null;
    }
}

fetchTraits("")

export default fetchTraits;
