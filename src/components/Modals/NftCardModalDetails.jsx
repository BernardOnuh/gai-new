import React, { useState, useEffect } from "react";
import "./details.css";
import axios from "axios";
import { useWriteContract } from "wagmi";
import { NFTAbi, StakingAbi } from "../../../contract/contract";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchNfts } from "../../api/fetchNFT";
import { useAccount } from 'wagmi';

function NftCardModalDetails({ extractedTrait }) {
  const [extractedData, setExtractedData] = useState([]);
  const { address } = useAccount();
  const fetchData = async () => {
    if (address) {
      const result = await fetchNfts(address);
      if (result) {
        setExtractedData(result.extractedData);
        console.log("Extracted Data:", result.extractedData);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [address]);
  const targetContract = "0xd96e1816569a881459e8354a380415908c6a7f78";
  const alchemy_key = "aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb";

  const filteredData =
    extractedData?.filter((el) => el.contract === targetContract) || [];

  const [selectedNft, setSelectedNft] = useState(null);
  const [traits, setTraits] = useState([]);
  const { data: hash, writeContract } = useWriteContract();
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingStake, setLoadingStake] = useState(false);
  const [approved, setApproved] = useState(false);
  const { name, stakingAddress, chain } = useParams();
  const handleNftClick = async (nft) => {
    setSelectedNft(nft);
    const traitsData = await fetchTraits(nft.contract, nft.tokenid);
    setTraits(traitsData?.traits || []);
  };

 
  
  const closeModal = () => {
    setSelectedNft(null);
    setTraits([]);
    setApproved(false); // Reset approved state on modal close
  };

  const fetchTraits = async (contractAddress, tokenID) => {
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };
    console.log("Address", contractAddress);
    console.log("TokenId", tokenID);
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

  const approveNFT = async () => {
    try {
      console.log("Starting approve process");
      setLoadingApprove(true);
      await writeContract({
        address: targetContract,
        abi: NFTAbi,
        functionName: "approve",
        args: [stakingAddress, selectedNft.tokenid],
      });
      console.log("NFT Approved!");
      // Set a timer to simulate a 10-second delay before showing the "Stake" button
      setTimeout(() => {
        setApproved(true);
        setLoadingApprove(false);
      }, 20000);
    } catch (error) {
      console.error("Error approving NFT:", error);
      setLoadingApprove(false);
    }
  };

  const stakeNFT = async () => {
    try {
      console.log("Starting stake process");
      setLoadingStake(true); // This should trigger the loader display
      console.log("Loading state set to true");
  
      await writeContract({
        address: stakingAddress,
        abi: StakingAbi,
        functionName: "stake",
        args: [[selectedNft.tokenid]],
      });
  
      console.log("NFT staked successfully!");
  
      // Keep the loader running for 10 seconds
      setTimeout(() => {
        fetchData();
        setLoadingStake(false); // This should stop the loader
        closeModal(); // Close all modals after the loader stops
      }, 30000);
    } catch (error) {
      console.error("Error staking NFT:", error);
      setLoadingStake(false); // Stop the loader in case of error
    }
  };
  
  

  return (
    <div className="details">
      {extractedData?.length === 0 ? (
        <div className="no-nft-message">
          <p>
            No data available. You don't currently have this NFT. You can buy
            the NFT here.
          </p>
          {/* Add a link or button to the NFT marketplace if needed */}
        </div>
      ) : filteredData.length > 0 ? (
        <div className="nft-grid">
          {filteredData.map((el) => (
            <div
              className="nft-card"
              key={el.tokenid}
              onClick={() => handleNftClick(el)}
            >
              <h1>{el.tokenid}</h1>
              <img
                className="display-img"
                src={el.display_image_url}
                alt={`NFT ${el.tokenid}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-nft-message">
          <p>You don't currently have this NFT. You can buy the NFT here.</p>
          {/* Add a link or button to the NFT marketplace if needed */}
        </div>
      )}

      {/* Modal for displaying selected NFT details */}
      {selectedNft && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h1>{selectedNft.tokenid}</h1>
            <img
              className="display-img"
              src={selectedNft.display_image_url}
              alt={`NFT ${selectedNft.tokenid}`}
            />
            {/* Display fetched traits */}
            <div className="traits">
              <h3>Traits:</h3>
              {traits.length > 0 ? (
                <ul>
                  {traits
                    .filter((trait) => trait.trait_type === "Element")
                    .map((trait, index) => (
                      <li key={index}>
                        {trait.trait_type}: {trait.value}
                      </li>
                    ))}
                </ul>
              ) : (
                <p>No traits available.</p>
              )}

              {/* Check if the NFT has the specific trait matching extractedTrait */}
              {traits.some(
                (trait) =>
                  trait.trait_type === "Element" &&
                  trait.value === extractedTrait
              ) ? (
                <>
                  {!approved ? (
                    <button
                      className="approve-button"
                      onClick={approveNFT}
                      disabled={loadingApprove}
                    >
                      {loadingApprove ? (
                        <div className="loader"></div>
                      ) : (
                        "Approve this NFT"
                      )}
                    </button>
                  ) : (
                    <button
                      className="stake-button"
                      onClick={stakeNFT}
                      disabled={loadingStake}
                    >
                      {loadingStake ? (
                        <div className="loader"></div>
                      ) : (
                        "Stake this NFT"
                      )}
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You can't stake this NFT here.{" "}
                  <a href="/nft">
                    Check{" "}
                    {traits.find(
                      (trait) => trait.trait_type === "Element"
                    )?.value || "trait type"}{" "}
                    Here on the Explore Page
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

NftCardModalDetails.propTypes = {
  extractedData: PropTypes.arrayOf(
    PropTypes.shape({
      contract: PropTypes.string.isRequired,
      tokenid: PropTypes.string.isRequired,
      display_image_url: PropTypes.string.isRequired,
    })
  ),
  extractedTrait: PropTypes.string.isRequired,
};

export default NftCardModalDetails;
