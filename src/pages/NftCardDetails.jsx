/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { Button, TextField, Box } from "@mui/material";
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
  const chainName = chainId === 11155111 ? "Sepolia" : chainId === 137 ? "Polygon" : "Unknown Chain";

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
              
              <h5>Description</h5>
              <h2>Earn {name} from the Gaia Ecosystem</h2>
              <h2>{nftItemData.description}</h2>
              
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

            {/*<div className="row-5">
              <p className="para-one">37d 14h 36m 3s {endDate.data}</p>
            </div>*/}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
              {!chainIdMatch ? (
                <h2 style={{ color: 'red' }}>
                Please connect to {chain === 137 ? "Polygon" : chain === 11155111 ? "Sepolia" : "the correct blockchain"}.
                </h2>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Modal.Window name="stake">
                      <div>
                        <NftCardModalDetails extractedData={extractedData} extractedTrait={nftItemData.traits} />
                      </div>
                    </Modal.Window>
                    <Modal.Open opens="stake">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                          borderRadius: 2,
                          backgroundColor: 'purple', // Use your theme colors
                          '&:hover': { backgroundColor: 'darkviolet' },
                          minWidth: 150,
                        }}
                        // onClick={() => stake(inputValue)}
                        // disabled={StakingContractLoad}
                      >
                        Stake
                      </Button>
                    </Modal.Open>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{
                        borderRadius: 2,
                        backgroundColor: 'green', // Use your theme colors
                        '&:hover': { backgroundColor: 'hotpink' },
                        minWidth: 150,
                      }}
                      // onClick={() => unstake(inputValue)}
                      // disabled={unStakingContractLoad}
                    >
                      Unstake
                    </Button>
                  </Box>
                </Box>
              )}
            </div>
          </div>
        </div>
      </NftCardDetailsStyles>
    </Modal>
  );
};

export default NftCardDetails;
