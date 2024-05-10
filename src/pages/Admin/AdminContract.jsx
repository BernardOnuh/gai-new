import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import { StakingFactory,StakingFactoryAbi,StakingFactoryNew,StakingFactoryNewAbi,StakingAbi } from '../../../contract/contract';
import { useAccount,useWriteContract,useChainId } from 'wagmi'
import { useReadContract,useReadContracts } from 'wagmi'
import axios from 'axios';


const AdminContract = () => {
	const account = useAccount()
	const chainId = useChainId()
	const walletAddress = account.address
	console.log('walletAddress', walletAddress)
	console.log(account.address)
	const [tokenContract, setTokenContract] = useState('');
	const [href, setHref] = useState('');
	const [loading, setLoading] = useState(false);
	const [collectionName, setCollectionName] = useState('');
	const [description, setDescription] = useState('');
	const [collectionAddress, setCollectionAddress] = useState('0x6eAca006c22DD330Dd5c14C90cD05D31556d67cD');
	const [image, setImage] = useState(null);
	const [response, setResponse] = useState('');
	const [responseMessage, setResponseMessage] = useState('');
	const [imageChosen, setImageChosen] = useState(false);
	const [website, setWebsite] = useState('www.');
	const [twitter, setTwitter] = useState('');
	// Scroll page
	const wagmigotchiContract = {
		address: tokenContract,
		abi: StakingFactoryNewAbi,
		};
		const mlootContract = {
		address: collectionAddress,
		abi: StakingAbi,
		};

	useEffect(() => {
		const href = window.location.href.substring(
			window.location.href.lastIndexOf('#') + 1,
		);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}, [href]);

	
	useEffect(() => {
		if (chainId === 137) {
		  setTokenContract('0xC077560020d53F4BEf6C87190a988B037A991eb6')
		} else if (chainId === 25) {
		  setTokenContract('0xC90F6b13c0747590FA47d8e19860C13818DaB86B')
		} else {
		  setTokenContract("0x017dD5390A20fd402A061a323847F1e4c46715Ac")
		}
	  }, [chainId]);




	{/*const result = useReadContract({
		abi:StakingFactoryNewAbi,
		address: tokenContract,
		functionName: 'getNumberOfDeployedContractsByAddress',
		args: [account.address], 
	  })
	  const { data: addresses, isLoading, isError, error } = useReadContract({
		abi: StakingFactoryNewAbi,
		address: tokenContract,
		functionName: 'getDeployedStakingContractsByAddress',
		args: [account.address],
	  });
	  if (isLoading) {
		return <div>Loading deployed staking addresses...</div>;
	  }
	
	  // Handle error state
	  if (isError) {
		return <div>Error loading addresses: {error.message}</div>;
	  }
	  if (isLoading) {
		return <div>Loading deployed staking addresses...</div>;
	  }
	
	  // Handle error state
	  if (isError) {
		return <div>Error loading addresses: {error.message}</div>;
	  }/*}
	  
	  {/*
	  const RealcollectionName = useReadContract({
		abi: StakingAbi,
		address: collectionAddress,
		functionName: "collectionName",
	  });
	
	  const descriptionData = useReadContract({
		abi: StakingAbi,
		address: collectionAddress,
		functionName: "description",
	  });
	  */}

	  const resultNew = useReadContracts({
		contracts: [
		  {
			...wagmigotchiContract,
			functionName: 'getNumberOfDeployedContractsByAddress',
			args: [account.address], 
		  },
		  {
			...wagmigotchiContract,
			functionName: 'getDeployedStakingContractsByAddress',
			args: [account.address],
		  },
		  {
			...mlootContract,
			functionName: "collectionName",
		  },
		  {
			...mlootContract,
			functionName: "description",
		  },
		],
	  });
	  console.log()
	  const  NoD = resultNew?.data?.[0]?.result;
	  const addresses = resultNew?.data?.[1]?.result;
	  const collectionN = resultNew?.data?.[2] ? resultNew.data[2].result : undefined;
	  const collectionD = resultNew?.data?.[3] ? resultNew.data[3].result : undefined;
	  

	  useEffect(() => {
        if (collectionN) {
            setCollectionName(collectionN);
        }
    }, [collectionN]);

    // Update state when descriptionData.data changes
    useEffect(() => {
        if (collectionD) {
            setDescription(collectionD);
        }
    }, [collectionD])

	  //console.log(resultNew.data.result[0])
	
	  // Function to update the state with fetched data
	
	  //console.log(result.data.toString())
	  //const { data:balanceOf, isLoading:balanceOfLoading, error:balanceOfError } = useContractRead(contract, "getNumberOfDeployedContractsByAddress",[address]);
	  //const { data: addresses, isLoading: addressLoading, error: addressError } = useContractRead(contract, "getDeployedStakingContractsByAddress", [address]);
	  //const { contract: newContract } = useContract(collectionAddress, StakingAbi);
	  //const { data: collectionName, isLoading: nameLoading, error: nameError } = useContractRead(newContract, "collectionName");
	  //const { data: description, isLoading: descriptionLoading, error: descriptionError } = useContractRead(newContract, "description");
      const postData = async () => {
		setLoading(true); 
		try {
			//console.log(collectionName);
			//console.log(description);
			console.log(responseMessage)
			console.log(website)
			console.log(twitter)
			console.log(walletAddress)
			console.log(collectionAddress)
		  const data = {
			name:collectionName,
			description,
			image:responseMessage,
			website,
			twitter,
			walletAddress,
			stakingAddress:collectionAddress,
			chain:chainId
		  };
		  const response = await axios.post('https://gaia-database.onrender.com/api/gaia', data);
		  setResponse(response.data);
		  alert('Contract Info Updated');
		  setLoading(false); 
		} catch (error) {
		  console.error('Error:', error);
		  setLoading(false); 
		}
	  };

	  const handleFileChange = (event) => {
		setImage(event.target.files[0]);
		setImageChosen(true);
	  };
	
	  const handleUpload = () => {
		event.preventDefault();
		if (!image) {
		  console.log("Please select an image.");
		  alert("Please select an image.")
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

	  const deployAndPostData = async () => {
		try {
		  setLoading(true); // Set loading state to true
		  await postData();
		  // Alert successful after both deploy and postData are successful
		  alert('Contract Info Updated');
		} catch (error) {
		  // Handle errors appropriately
		  console.error("Error:", error);
		  // You might want to display an error message to the user here
		  alert('Error occurred');
		} finally {
		  setLoading(false); // Set loading state to false after execution
		}
	  };

	//console.log(balanceOf)
	//console.log(addresses)
	return (
		<AdminFeeStyles>
			<NavbarNftConnected />
			
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>
				
			
				<div id={href} className='admin-container-form'>
				
				<form>
				
						<h2>Deployed Contracts </h2>
						<div>Number of Deployed Contracts</div>
						<div>{NoD ? NoD.toString() : "Loading..."}</div>
						<div>
			<h2>Your Deployed Staking Addresses:</h2>
			{Array.isArray(addresses) && addresses.length > 0 ? (
				<ul>
				{addresses.map((address, index) => (
					<li key={index}>{address}</li>
				))}
				</ul>
			) : (
				<p>No wallet addresses found</p>
			)}
			</div>
		</form>
					<form>
					<h2>Update NFT Staking Contracts </h2>
						<div className='row-1'>
							<div className='row-1-title'>
								<h4>NFT Staking Address</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
					 				<label htmlFor='image'>Staking Address</label>
									<input type='text' 
										id='collection' 
										placeholder='NFT ADDRESS' 
										value={collectionAddress} 
										onChange={(e) => setCollectionAddress(e.target.value)}  />
								</div>
								</div>
							</div>
							<div className='row-2'>
							<div className='row-2-title'>
								<h4>Staking Contract Name</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='mint'>Staking Contract Name</label>
									<input type='text' placeholder={collectionName} value={collectionName} id='mint' />
								</div>
							</div>
						</div>
						<div className='row-2'>
							<div className='row-2-title'>
								<h4>Staking Contract Description</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='mint'>Staking Contract Description</label>
									<input type='text' placeholder={description}  value={description} id='mint' />
								</div>
							</div>
						</div>
						<div className='row-1'>
							<div className='row-1-title'>
								<h4>NFT PFP URL</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
					 				<label htmlFor='image'>NFT PFP URL</label>
									<input type='text' 
										id='collection' 
										placeholder='NFT PFP URL' 
										value={responseMessage} 
										onChange={(e) => setResponseMessage(e.target.value)}  />
								</div>
								</div>
							</div>
						<div className='row-5'>
							<div className='row-5-title'>
								<h4>set social url</h4>
							</div>
							<div className='row-5-input'>
								<div className='row-5-input-1'>
									<label htmlFor='social'>Website URL</label>
									<input
										type='text' 
										id='endDate' 
										placeholder='Link to NFT Website' 
										value={website} 
										onChange={(e) => setWebsite(e.target.value)} 
									/>
								</div>
							</div>
							<div className='row-3'>
							<div className='row-3-title'>
								<h4>set X(Twitter) url</h4>
							</div>
							<div className='row-3-input'>
								<div className='row-3-input-1'>
									<label htmlFor='url'>Twitter URL</label>
									<input 
									 type='text' 
									 id='twitter' 
									 placeholder='Link to X/Twitter' 
									 value={twitter} 
									 onChange={(e) => setTwitter(e.target.value)}  />
								</div>
							</div>
						</div>

						</div>
						
					</form>
					<button onClick={postData} disabled={loading}>
						{loading ? 'Loading...' : 'SUBMIT'}
					</button>
				</div>
			</div>
		</AdminFeeStyles>
	);
};

export default AdminContract;
