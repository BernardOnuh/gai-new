/* eslint-disable no-undef */
import axios from "axios";
// import NftCardDetails from "../pages/NftCardDetails";
// import dotenv from "dotenv";

// dotenv.config();

const opensea_key = "118c9d2f3e35451db2ae43f8590cc266";
const alchemy_key = "aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb";

const fetchTraits = async (contractAddress, tokenID) => {
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
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

    console.log("Traits:", traits);

    return { traits };
  } catch (err) {
    console.error("Error fetching traits:", err.response?.data || err.message);
    return null;
  }
};

export const fetchNfts = async (userAddress) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": opensea_key,
    },
  };

  try {
    const response = await fetch(
      `https://api.opensea.io/api/v2/chain/matic/account/${userAddress}/nfts?polyfactions`,
      options
    );
    const data = await response.json();

    // Assuming the data contains a list of NFTs in `data.nfts`
    const nfts = data.nfts || []; // Adjust this line based on the actual structure of the response

    // Select the first NFT (or any other logic to select an NFT)
    if (nfts.length > 0) {
      const selectedNft = nfts[0]; // Change this logic as needed to select a different NFT
      console.log("Selected NFT:", selectedNft);

      // Call fetchTraits for the selected NFT
      await fetchTraits(selectedNft.contract, selectedNft.identifier);
    } else {
      console.log("No NFTs found.");
    }

    // Extracting relevant fields
    const extractedData = nfts.map((nft) => ({
      tokenid: nft.identifier,
      name: nft.name,
      contract: nft.contract,
      display_image_url: nft.display_image_url,
    }));

    console.log("Extracted NFTs:", extractedData); // This will log the filtered data to the console

    return { extractedData };
  } catch (err) {
    console.error("Error fetching NFTs:", err);
  }
};

fetchNfts("0x5b92247bbF1D73Fb727C488dA9fD2e41DF11d4a3");
