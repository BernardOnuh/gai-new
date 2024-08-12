/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../assets/inAppData/Explore.js";
import NftCardDetailsStyles from "../assets/styles/NftCardDetailsStyles.js";
import NavbarNftCardDetails from "../components/Navbar/NavbarNftCardDetails.jsx";
import {
  StakingFactory,
  StakingFactoryAbi,
  StakingFactoryNew,
  StakingFactoryNewAbi,
  StakingAbi,
} from "../../contract/contract";
import { useAccount, useWriteContract, useChainId } from "wagmi";
import { useReadContract, useReadContracts } from "wagmi";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modals/Modal.jsx";
import NftCardModalDetails from "../components/Modals/NftCardModalDetails.jsx";
import nftData from '../components/NewCards/nftData.json';

const NftCardDetails = ({ extractedData }) => {
  const account = useAccount();
  const chainId = useChainId();
  const [nftItemData, setNftItemData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const { name, stakingAddress, chain } = useParams(); // Extracting _id and walletId from URL
  const [data, setData] = useState([]);
  console.log("name:", name);
  console.log("walletId:", stakingAddress);
  console.log("chainId:", chain);
  const apiKey = "demo";
  const nft = nftData.find((item) => item.name === name);

  useEffect(() => {
    if (nft) {
      // If a matching NFT is found, set it to the state
      setNftItemData(nft);
    }
  }, [name, nft]);


  let baseURL;
  if (chainId === 11155111) {
    baseURL = `https://eth-sepolia.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner/`;
  } else if (chainId === 137) {
    baseURL = `https://polygon-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner/`;
  } else {
    // Handle unsupported chainId or provide a default URL
    console.error("Unsupported chainId:", chainId);
    // Provide a default URL or handle the error accordingly
    return null; // or provide a default URL
  }

  const ownerAddr = [account.address];
  const pageSize = 2;

  // Construct the axios request:
  const config = {
    method: "get",
    url: `${baseURL}?owner=${ownerAddr}&pageSize=${pageSize}`,
  };

  // Make the request and print the formatted response:
  axios(config)
    .then((response) => console.log(JSON.stringify(response.data, null, 2)))
    .catch((error) => console.log(error));

  // Rest of your component code...

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const chainIdMatch = parseInt(chain) === chainId;
  const result = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "collectionName",
  });
  const CollectionAddress = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "collectionAddress",
  });
  const description = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "description",
  });

  const stakednum = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "totalStaked",
  });

  const mystaked = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "stakers",
    args: [account.address],
  });

  const endDate = useReadContract({
    abi: StakingAbi,
    address: stakingAddress,
    functionName: "endDate",
  });
  console.log(account.address);
  console.log("endDate", CollectionAddress.data);

  {
    /*const { contract, isLoading, error } = useContract(
		StakingFactoryNew,
		StakingFactoryNewAbi,
	  );
	  const { contract: newContract } = useContract(stakingAddress, StakingAbi);
	  const { data: collectionName, isLoading: nameLoading, error: nameError } = useContractRead(newContract, "collectionName");
	  const { data: description, isLoading: descriptionLoading, error: descriptionError } = useContractRead(newContract, "description");
	  const { data: stakednum, isLoading: stakednumLoading, error: stakednumError } = useContractRead(newContract, "totalStaked");
	  const { data: mystaked, isLoading: mystakedLoading, error: mystakedError } = useContractRead(newContract, "stakers", [address]);
	  console.log(collectionName)
	  console.log("mystaked:", mystaked);
	  const { mutateAsync:stake, isLoading:StakingContractLoad, error:StakingContractError } = useContractWrite(
		newContract,
		"stakeTokens",
		[inputValue]
	  );
	  const { mutateAsync:unstake, isLoading:unStakingContractLoad, error:unStakingContractError } = useContractWrite(
		newContract,
		"unStake",
		[inputValue]
	  );
	  */
  }
  // Get the url parameters
  useEffect(() => {
    // Find the data item with the corresponding _id
    const filteredNft = data.find(
      (item) => item.stakingAddress === stakingAddress
    );
    if (filteredNft) {
      setNftItemData(filteredNft);
    }
  }, [stakingAddress]); // Update when _id changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gaia-database.onrender.com/api/gaia/profile/${stakingAddress}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  console.log(data);
  const shortStakingAddress = stakingAddress
    ? `${stakingAddress.slice(0, 6)}...`
    : "";
  const chainMismatch = chainId !== chain;
  // Link to the image in public folder
  console.log("result", result.data);

  //   console.log(fetchNfts());

  return (
    <Modal>
      <NftCardDetailsStyles>
        <NavbarNftCardDetails setShowModal={setShowModal} />

        <div className="card-container">
          <div className="card-container-image">
            <img src={nftItemData.image} alt={name} />
            <h2>{name}</h2>
          </div>
          <div className="card-container-texts">
            <div className="row-1">
              <p className="para-one">Address</p>
              <p className="para-two">{shortStakingAddress}</p>
            </div>

            <div className="row-2">
              <h5>Earn {name} from the Gaia Ecosystem</h5>
              <h2>Description</h2>
              <h5>{nftItemData.description}</h5>
              <div className="input-box">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>

            <div className="row-3">
              <p className="para-one">My Staked {result.data}</p>
              {mystaked && mystaked.data && mystaked.data.length > 0 ? (
                <p className="para-two">{Number(mystaked.data[0])} NFT</p>
              ) : (
                <p className="para-two">Loading...</p>
              )}
            </div>

            <div className="row-4">
              <p className="para-one">Total Staked</p>
              {result ? (
                <p className="para-two">{Number(stakednum.data)} NFT</p>
              ) : (
                <p className="para-two">Loading...</p> // Or any other appropriate placeholder
              )}
            </div>

            <div className="row-5">
              <p className="para-one">37d 14h 36m 3s {endDate.data}</p>
            </div>

            <div className="centered-buttons">
              {!chainIdMatch ? (
                <p>Please switch to the correct blockchain.</p>
              ) : (
                <input
                  type="text"
                  placeholder="Enter value"
                  value={inputValue}
                  className="rounded-button"
                  onChange={handleInputChange}
                />
              )}
              <Modal.Window name="stake">
                <div>
                  <NftCardModalDetails extractedData={extractedData} extractedTrait={nftItemData.traits} />
                </div>
              </Modal.Window>
              <Modal.Open opens="stake">
                <button
                  className="rounded-button"
                  //onClick={() => stake(inputValue)}
                  // disabled={StakingContractLoad} // Disable the button while loading
                >
                  Stake
                  {/*{StakingContractLoad ? 'Staking...' : 'Stake'}*/}
                </button>
              </Modal.Open>
              <button
                className="rounded-button"
                //onClick={() => unstake(inputValue)}
                // disabled={unStakingContractLoad} // Disable the button while loading
              >
                Unstake
                {/*{unStakingContractLoad ? 'Unstaking...' : 'Unstake'}*/}
              </button>
            </div>
          </div>
        </div>
      </NftCardDetailsStyles>
    </Modal>
  );
};

export default NftCardDetails;
