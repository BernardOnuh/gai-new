import AdminHomeStyles from '../../assets/styles/AdminHomeStyles';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import AdminLink from '../../components/AdminLink/AdminLink';
import { useEffect, useState } from 'react';
import { StakingFactory,StakingFactoryAbi,StakingFactoryNew,StakingFactoryNewAbi,tokenAbi } from '../../../contract/contract';
import { useAccount,useWriteContract,useChainId } from 'wagmi'
import { useReadContract } from 'wagmi'
import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AdminHome = () => {
  const { writeContract } = useWriteContract()
  const [wei, setWei] = useState('');
  const [tokenContract, setTokenContract] = useState('');
  const [href, setHref] = useState('')
	const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [rewardTokenAddress, setRewardTokenAddress] = useState('');
  const [stakingFee, setStakingFee] = useState(0);
  const [timeUnit, setTimeUnit] = useState(10);
  const [rewardsPerUnitTime, setRewardsPerUnitTime] = useState(10);
  const [endDate, setEndDate] = useState(Math.floor(Date.now() / 1000));
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [imageChosen, setImageChosen] = useState(false);
  const [website, setWebsite] = useState('www.');
  const [twitter, setTwitter] = useState('');
  const [stakingAddress, setstakingAddress] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [deploymentSuccess, setDeploymentSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const account = useAccount()
  const chainId = useChainId()

console.log(account.address)
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    setImageChosen(true);
  };
const [startDate, setStartDate] = useState(new Date());
  const handleUpload = () => {
    event.preventDefault();
    if (!image) {
      console.log("Please select an image.");
      
      return
    }

    const formData = new FormData();
    formData.append('image', image);

    fetch('https://gaia-images.onrender.com/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setResponseMessage(data.imageUrl); // Assuming the server sends a JSON response with a 'message' field
    })
    .catch(error => {
      console.error('Error occurred:', error);
      // Handle error
    });
  };

  useEffect(() => {
    if (chainId === 137) {
      setWei('75000000000000000000');
      setTokenContract('0xC077560020d53F4BEf6C87190a988B037A991eb6')
    } else if (chainId === 25) {
      setWei('25000000000000000000');
      setTokenContract('0xC90F6b13c0747590FA47d8e19860C13818DaB86B')
    } else {
      setWei('200'); // Default case or handle as needed
      setTokenContract("0x017dD5390A20fd402A061a323847F1e4c46715Ac")
    }
  }, [chainId]);

console.log(wei)
console.log(tokenContract)
	// Scroll page
	useEffect(() => {
		const href = window.location.href.substring(window.location.href.lastIndexOf('#') + 1);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	}, [href])



 console.log(Event)
 useEffect(() => {
  const fetchData = async () => {
    if (Event && Event.length > 0) {
      const latestEvent = Event[0]; // Get the last element of the array
      const newContract = latestEvent.data.newContract;
      setstakingAddress(newContract);
      console.log(newContract); // This will log the newContract of the latest event
    } else {
      console.log("No events found");
    }
  };

  fetchData(); // Call fetchData on mount and whenever deploymentSuccess changes

}, [Event, deploymentSuccess]);  // Ensure that this useEffect hook runs only when Event changes

const handleClick = async () => {
  console.log('Button clicked, setting loading true');
  setLoading(true);
  try {
    await writeContract({
      abi: StakingFactoryNewAbi,
      address: tokenContract,
      functionName: 'deployStakingContract',
      args: [
        collectionName,
        description,
        collectionAddress,
        rewardTokenAddress,
        stakingFee,
        timeUnit,
        rewardsPerUnitTime,
        endDate,
      ],
      value: wei,
    });
    console.log('Write contract completed');
  } catch (error) {
    console.error('Error deploying staking contract:', error);
  } finally {
    console.log('Setting loading false');
    setLoading(false);
  }
};

const handleDateChange = (date) => {
  setStartDate(date);
  const timestampInSeconds = Math.floor(date.getTime() / 1000);
  setEndDate(timestampInSeconds)
  console.log("Time",timestampInSeconds); // Log the date in seconds to the console
};


	return (
		<AdminHomeStyles>
			<NavbarNftConnected />
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>
				<div id={href}className='admin-container-form'>
					<form>
						<h2>Deploy NFT Staking</h2>
						<div className='row-1'>
        <label htmlFor='name'>COLLECTION NAME</label>
        <input 
          type='text' 
          id='name' 
          placeholder='INPUT YOUR COLLECTION NAME e.g Toonz NFT' 
          value={collectionName} 
          onChange={(e) => setCollectionName(e.target.value)} 
        />
      </div>

      <div className='row-2'>
        <label htmlFor='desc'>DESCRIPTION</label>
        <textarea
          name='desc'
          id='desc'
          placeholder='DESCRIPTION'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <p>Briefly describe what you need</p>
      </div>

      <div className='row-3'>
        <label htmlFor='collection'>NFT COLLECTION ADDRESS</label>
        <input 
          type='text' 
          id='collection' 
          placeholder='NFT ADDRESS' 
          value={collectionAddress} 
          onChange={(e) => setCollectionAddress(e.target.value)} 
        />
      </div>

      <div className='row-4'>
        <label htmlFor='token'>REWARD TOKEN ADDRESS</label>
        <input 
          type='text' 
          id='token' 
          placeholder='REWARD TOKEN ADDRESS' 
          value={rewardTokenAddress} 
          onChange={(e) => setRewardTokenAddress(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='stakingFee'>STAKING FEE</label>
        <input 
          type='text' 
          id='stakingFee' 
          placeholder='STAKING FEE' 
          value={stakingFee} 
          onChange={(e) => setStakingFee(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='timeUnit'>TIME UNIT</label>
        <input 
          type='text' 
          id='timeUnit' 
          placeholder='TIME UNIT' 
          value={timeUnit} 
          onChange={(e) => setTimeUnit(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='rewardsPerUnitTime'>Reward/Time Unit</label>
        <input 
          type='text' 
          id='rewardsPerUnitTime' 
          placeholder='Reward/Time Unit' 
          value={rewardsPerUnitTime} 
          onChange={(e) => setRewardsPerUnitTime(e.target.value)} 
        />
      </div>
    <div>
     
    </div>
      {/*<div className='row-5'>
        <label htmlFor='website'>Website</label>
        <input 
          type='text' 
          id='endDate' 
          placeholder='Link to NFT Website' 
          value={website} 
          onChange={(e) => setWebsite(e.target.value)} 
        />
      </div>
      <div className='row-5'>
        <label htmlFor='Twitter'>X/Twitter</label>
        <input 
          type='text' 
          id='endDate' 
          placeholder='Link to X/Twitter' 
          value={twitter} 
          onChange={(e) => setTwitter(e.target.value)} 
        />
      </div>
      
      <div>
      <input type="file" id="imageInput" style={{ display: 'none' }} onChange={handleFileChange} />
      <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>Choose Image</label>
      {imageChosen && <p>Click Upload to Upload the Image</p>} 
      <button onClick={handleUpload}>Upload</button>
      {responseMessage && <p>Image Uploaded Successfully: {responseMessage}</p>}
    </div>
    */}
      <div className="App">
          <h1>End Date</h1>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
          />
        </div>
					</form>
          
          <button onClick={handleClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Deploy'}
          </button>


				</div>
        
			</div>
		</AdminHomeStyles>
	);
};

export default AdminHome;