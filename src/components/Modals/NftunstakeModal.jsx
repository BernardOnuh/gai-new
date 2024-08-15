import React, { useState, useEffect } from "react";
import { StakingAbi } from "../../../contract/contract";
import PropTypes from "prop-types";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./details.css";

function NftunstakeModal({ extractedData, extractedTrait, accountAddress }) {
  const account = useAccount();
  const { stakingAddress } = useParams();
  const contractAddress = "0xd96e1816569a881459e8354a380415908c6a7f78";
  const alchemy_key = "aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb";
  const [nftData, setNftData] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reward, setReward] = useState(0);
  const [tokenId, setTokenId] = useState('');
  const [loadingClaimReward, setLoadingClaimReward] = useState(false);
  const [loadingUnstake, setLoadingUnstake] = useState(false);
  const [unstakeStatus, setUnstakeStatus] = useState('');
  const { writeContract, data: unstakeTxData } = useWriteContract();

  const { data: stakeInfo, isLoading, isError } = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "getStakeInfo",
    args: [account.address],
  });

  const { data: stakers, isLoadingStakers, isErrorStakers } = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "stakers",
    args: [account.address],
  });

  console.log("stakeInfo", stakeInfo);

  useEffect(() => {
    const fetchNftData = async () => {
      // Fetch logic for NFT data
    };

    fetchNftData();
  }, [stakeInfo, contractAddress]);

  useEffect(() => {
    if (unstakeTxData) {
      setTimeout(() => {
        setUnstakeStatus('Successfully unstaked!');
      }, 10000); // Delay the success message by 10 seconds
    }
  }, [unstakeTxData]);

  const handleNftClick = (tokenId, index) => {
    console.log("Clicked tokenId:", tokenId);
    setSelectedNft({ tokenId, index });
    setTokenId(tokenId.toString());
    setReward(stakers[3].toString());
    setIsModalOpen(true);
  };

  const handleClaimReward = async () => {
    console.log("Claiming reward for NFT:", tokenId);
    setLoadingClaimReward(true);

    setTimeout(async () => {
      await writeContract({
        address: stakingAddress,
        abi: StakingAbi,
        functionName: "claimRewards",
      });
      setLoadingClaimReward(false);
      setUnstakeStatus('Reward claimed successfully!');
    }, 10000);
  };

  const handleUnstake = async () => {
    try {
      console.log("Starting unstake process for token ID:", tokenId);
      setUnstakeStatus('Initiating unstake...');
      setLoadingUnstake(true);

      setTimeout(async () => {
        await writeContract({
          address: stakingAddress,
          abi: StakingAbi,
          functionName: "withdraw",
          args: [[tokenId]],
        });
        setLoadingUnstake(false);
        setUnstakeStatus('Transaction submitted. Waiting for confirmation...');
      }, 10000);
    } catch (error) {
      console.error("Error unstaking NFT:", error);
      setUnstakeStatus('Error initiating unstake. Please try again.');
      setLoadingUnstake(false);
    }
  };

  if (isLoading) {
    return <div className="details">Loading...</div>;
  }

  if (isError) {
    return <div className="details">Error fetching stake info</div>;
  }

  return (
    <div className="details">
      <h1>These are your staked NFTs. Click to Unstake and get Rewards</h1>
      {!stakeInfo || !stakeInfo[0] || stakeInfo[0].length === 0 ? (
        <div className="no-nft-message">
          <p>
            No data available. You don't currently have this NFT. You can buy
            the NFT here.
          </p>
        </div>
      ) : (
        <div className="nft-grid">
          {stakeInfo[0].map((tokenId, index) => (
            <div
              className="nft-card"
              key={index}
              onClick={() => handleNftClick(tokenId, index)}
            >
              <h1>Token ID: {tokenId.toString()}</h1>
              {nftData[index] && (
                <img
                  src={nftData[index].image}
                  alt={`NFT ${tokenId}`}
                  className="nft-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h1>NFT Token ID: {tokenId}</h1>
            <p>Your reward is: {reward} Moon</p>
            <button className="stake-button" onClick={handleClaimReward} disabled={loadingClaimReward}>
              {loadingClaimReward ? (
                <>
                  <div className="loader"></div> Claiming Reward...
                </>
              ) : 'Claim Reward'}
            </button>
            <button className="stake-button" onClick={handleUnstake} disabled={loadingUnstake}>
              {loadingUnstake ? (
                <>
                  <div className="loader"></div> Processing...
                </>
              ) : 'Unstake'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

NftunstakeModal.propTypes = {
  extractedData: PropTypes.array.isRequired,
  extractedTrait: PropTypes.array,
  accountAddress: PropTypes.string.isRequired,
};

export default NftunstakeModal;
