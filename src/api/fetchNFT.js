/* eslint-disable no-undef */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const opensea_key = process.env.OPENSEA_API_KEY
const alchemy_key = process.env.ALCHEMY_API_KEY

const fetchTraits = async (contractAddress, tokenID) => {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' },
    };

    try {
        const response = await axios.get(
            `https://polygon-mainnet.g.alchemy.com/nft/v3/${alchemy_key}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenID}&refreshCache=false`,
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

const fetchNfts = async (userAddress) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-api-key': opensea_key
        }
    };

    try {
        const response = await fetch(`https://api.opensea.io/api/v2/chain/matic/account/${userAddress}/nfts?polyfactions`, options);
        const data = await response.json();

        // Assuming the data contains a list of NFTs in `data.nfts`
        const nfts = data.nfts || [];  // Adjust this line based on the actual structure of the response

        // Extracting relevant fields
        const extractedData = nfts.map(nft => ({
            tokenid: nft.identifier,
            name: nft.name,
            contract: nft.contract,
            display_image_url: nft.display_image_url
        }));

        console.log(extractedData);  // This will log the filtered data to the console

        // calling the alchemy API
        fetchTraits(extractedData.contract, extractedData.tokenid)
        
    } catch (err) {
        console.error(err);
    }
};



export default fetchNfts;

// const chain = 'matic'
// const address = '0xb9c627A94EDF9f55e5F6917B6b0696e55660C7Ed'
// const apiKey = '118c9d2f3e35451db2ae43f8590cc266'

// const params = new URLSearchParams({
//     collection: 'polyfactions'
// })

// const url = `https://api.opensea.io/api/v2/chain/${chain}/account/${address}/nfts?${params.toString()}`;

// fetch(url, {
//     headers: {
//         'Authorization' : `Bearer ${apiKey}`
//     }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch( error => {
//     console.error('Error fetching data:', error)
// })


// // Function to fetch NFTs using the OpenSea API
// export const   nftFetch = async (userAddress) => {
//     try {
//         // OpenSea API endpoint
//         await opensea.auth(opensea_key);
//         await opensea.server('https://api.opensea.io');

//         // Extract and log the NFT data
//         const response = await opensea.list_nfts_by_account({
//             collection: 'polyfactions',
//             chain: 'matic',
//             address: userAddress
//         });

//         const data = response.data;

//         console.log(response)

//         if (!data || !data.nfts) {
//             console.error('No NFTs data found in the response.');
//             return;
//         }

//         const nftData = data.nfts.map(nft => ({
//             name: nft.name,
//             tokenID: nft.identifier,
//             image: nft.display_image_url
//         }));
//         console.log('NFT Data:', nftData);

//         // Example: Let the user select an NFT
//         const selectedTokenID = promptUserForNFTSelection(nftData);

//         if (selectedTokenID) {
//             // Call the second API with the selected token ID
//             await fetchTraits('0xD96E1816569a881459E8354A380415908C6A7F78', selectedTokenID);
//         } else {
//             console.log('No NFT selected.');
//         }
//     } catch (err) {
//         console.error('Error fetching NFTs:', err.response?.data || err.message);
//     }
// };

// function promptUserForNFTSelection(nftData) {
//     console.log('Select an NFT by its index:');

//     nftData.forEach((nft, index) => {
//         console.log(`${index + 1}. Name: ${nft.name}, Token ID: ${nft.tokenID}`);
//     });

//     // Simulate user input (in real scenario, capture user input via UI)
//     const selectedIndex = 0; // Change this index to simulate different selections
//     const selectedNFT = nftData[selectedIndex];

//     if (selectedNFT) {
//         console.log(`Selected NFT: Name: ${selectedNFT.name}, Token ID: ${selectedNFT.tokenID}`);
//         return selectedNFT.tokenID;
//     }

//     return null;
// }




// // Execute the NFT fetch  
// nftFetch('0xb9c627A94EDF9f55e5F6917B6b0696e55660C7Ed');



