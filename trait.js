import axios from 'axios';

async function fetchTraits(contractAddress) {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };

    try {
        const response = await axios.get(`https://polygon-mainnet.g.alchemy.com/nft/v3/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb/getNFTMetadata?contractAddress=${contractAddress}&tokenId=44&refreshCache=false`, options);
        const data = response.data;

        const basicDetails = {
            name: data.name,
            description: data.description,
            tokenId: data.tokenId,
            image: data.image.cachedUrl,
            collectionName: data.collection.name,
            contractAddress: data.contract.address
        };

        const traits = data.raw.metadata.attributes.map(attribute => ({
            trait_type: attribute.trait_type,
            value: attribute.value
        }));

        return { basicDetails, traits };
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default fetchTraits;
