import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../assets/inAppData/Explore.js';
import NftCardDetailsStyles from '../assets/styles/NftCardDetailsStyles.js';
import NavbarNftCardDetails from '../components/Navbar/NavbarNftCardDetails.jsx';
import { StakingFactory,StakingFactoryAbi,StakingFactoryNew,StakingFactoryNewAbi,StakingAbi } from '../../contract/contract';
import { useAccount,useWriteContract,useChainId } from 'wagmi'
import { useReadContract,useReadContracts } from 'wagmi'
import { Link } from 'react-router-dom';
import axios from 'axios'


const NftCardDetails = () => {
	const account = useAccount()
	const chainId = useChainId()
    const [nftItemData, setNftItemData] = useState([]);
	const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const { name, stakingAddress } = useParams(); // Extracting _id and walletId from URL
	const [data, setData] = useState([]);
	console.log("name:", name);
	console.log("walletId:", stakingAddress);
	const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

	{/*const { contract, isLoading, error } = useContract(
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
	  */}
    // Get the url parameters
    useEffect(() => {
        // Find the data item with the corresponding _id
        const filteredNft = data.find((item) => item.stakingAddress === stakingAddress);
        if (filteredNft) {
            setNftItemData(filteredNft);
        }
    }, [stakingAddress]); // Update when _id changes

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(`https://gaia-database.onrender.com/api/gaia/profile/${stakingAddress}`);
			setData(response.data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
		fetchData();
	  }, []);
	  console.log(data)
	  console.log(data)
	  const shortStakingAddress = stakingAddress ? `${stakingAddress.slice(0, 6)}...` : '';
	// Link to the image in public folder

	return (
		<NftCardDetailsStyles>  
			<NavbarNftCardDetails setShowModal={setShowModal}/>
			
		

			<div className='card-container'>
				<div className='card-container-image'>
					<img src={data.image} alt={name} />
					<h2>
						{name}
					</h2>
				</div>
				<div className='card-container-texts'>
					<div className='row-1'>
						<p className='para-one'>Address</p>
						<p className='para-two'>{shortStakingAddress}</p>
					</div>

					<div className='row-2'>
						<h5>Earn {name} from the Gaia Ecosystem</h5>
						<div className='input-box'>
							<input type='text' />
							<input type='text' />
							<input type='text' />
						</div>
					</div>

					<div className='row-3'>
						<p className='para-one'>My Staked </p>
						{mystaked ? (
							<p className='para-two'>0 NFT</p>
						) : (
							<p className='para-two'>Loading...</p> // Or any other appropriate placeholder
						)}
					</div>

					<div className='row-4'>
						<p className='para-one'>Total Staked</p>
						{stakednum ? (
							<p className='para-two'>0 NFT</p>
						) : (
							<p className='para-two'>Loading...</p> // Or any other appropriate placeholder
						)}
					</div>

					<div className='row-5'>
						<p className='para-one'>37d 14h 36m 3s</p>
					</div>

					<div className='centered-buttons'>
    <input 
        type="text" 
        placeholder="Enter value" 
        value={inputValue} 
		className='rounded-button' 
        onChange={handleInputChange} 
    />
    <button 
        className='rounded-button' 
        //onClick={() => stake(inputValue)}
       // disabled={StakingContractLoad} // Disable the button while loading
    >Stake
        {/*{StakingContractLoad ? 'Staking...' : 'Stake'}*/}
    </button>
    <button 
        className='rounded-button' 
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
	);
};

export default NftCardDetails;

