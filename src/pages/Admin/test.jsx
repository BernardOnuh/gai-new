import AdminHomeStyles from '../../assets/styles/AdminHomeStyles';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import AdminLink from '../../components/AdminLink/AdminLink';
import { useEffect, useState } from 'react';
import { StakingFactory,StakingFactoryAbi } from '../../../contract/contract';
import { useAddress, useContractRead, useContract,useContractWrite,useContractEvents  } from "@thirdweb-dev/react"
import axios from 'axios';

const AdminHome = () => {
  const [href, setHref] = useState('')
	const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [rewardTokenAddress, setRewardTokenAddress] = useState('');
  const [stakingFee, setStakingFee] = useState(0);
  const [timeUnit, setTimeUnit] = useState(10);
  const [rewardsPerUnitTime, setRewardsPerUnitTime] = useState(10);
  const [endDate, setEndDate] = useState(10);
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [imageChosen, setImageChosen] = useState(false);
  const [website, setWebsite] = useState('www.');
  const [twitter, setTwitter] = useState('');
  const [stakingAddress, setstakingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const address = useAddress()
console.log(address)
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    setImageChosen(true);
  };

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

  const postData = async () => {
    try {
      const data = {
        collectionName,
        description,
        responseMessage,
        website,
        twitter,
        address,
        stakingAddress
      };

      const response = await axios.post('https://gaia-database.onrender.com/api/gaia', data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const wei ='1'
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
  const { contract, isLoading, error } = useContract(
    StakingFactory,
    StakingFactoryAbi,
  );
  console.log(StakingFactory)

  const { mutateAsync:deployStakingContract, isLoading:deployStakingContractLoad, error:deployStakingContractError } = useContractWrite(
    contract,
    "deployStakingContract"
  );

  const { data:Event, isLoading:LoadEvent, error:ErrorEvent } = useContractEvents(contract, "ContractDeployed");
 console.log(Event)
 if (Event && Event.length > 0) {
  const latestEvent = Event[0]; // Get the last element of the array
  const newContract = latestEvent.data.newContract;
  setstakingAddress(newContract)
  console.log(newContract); // This will log the newContract of the latest event
} else {
  console.log("No events found");
}

  
  const deployAndPostData = async () => {
    try {
      setLoading(true); // Set loading state to true
      // Execute deploy function
      await deploy();
      // If deploy is successful, execute postData function
      await postData();
      // Alert successful after both deploy and postData are successful
      alert('Successful');
    } catch (error) {
      // Handle errors appropriately
      console.error("Error:", error);
      // You might want to display an error message to the user here
      alert('Error occurred');
    } finally {
      setLoading(false); // Set loading state to false after execution
    }
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

      <div className='row-5'>
        <label htmlFor='endDate'>End Date</label>
        <input 
          type='text' 
          id='endDate' 
          placeholder='End Date' 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </div>
      <div className='row-5'>
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
      {imageChosen && <p>An image has been chosen</p>} {/* Show message if image has been chosen */}
      <button onClick={handleUpload}>Upload</button>
      {responseMessage && <p>Image Uploaded Successfully: {responseMessage}</p>}
    </div>
					</form>
          <button onClick={deployAndPostData} disabled={loading}>
        {loading ? 'Loading...' : 'SUBMIT'}
      </button>
				</div>
        
			</div>
		</AdminHomeStyles>
	);
};

export default AdminHome;