import axios from 'axios';

function fetchTraits(ContractAddy) {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };

    axios.get(`https://polygon-mainnet.g.alchemy.com/nft/v3/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb/getNFTMetadata?contractAddress=${ContractAddy}&tokenId=44&refreshCache=false`, options)
        .then(response => {
            const data = response.data;

            // Extracting basic details
            const basicDetails = {
                name: data.name,
                description: data.description,
                tokenId: data.tokenId,
                image: data.image.cachedUrl,
                collectionName: data.collection.name,
                contractAddress: data.contract.address
            };

            // Extracting traits
            const traits = data.raw.metadata.attributes.map(attribute => ({
                trait_type: attribute.trait_type,
                value: attribute.value
            }));

            // Logging the results
            console.log("Basic Details:", basicDetails);
            console.log("Traits:", traits);
        })
        .catch(err => console.error(err));
}

export default fetchTraits;





//0x524cab2ec69124574082676e6f654a18df49a048