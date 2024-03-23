import { useEffect, useState } from 'react';
import { data } from '../assets/inAppData/Explore.js';
import NftCardDetailsStyles from '../assets/styles/NftCardDetailsStyles.js';
import NavbarNftCardDetails from '../components/Navbar/NavbarNftCardDetails.jsx';
import { Link } from 'react-router-dom';
import ConnectWalletType1 from '../components/Modals/ConnectWalletType1.jsx';
import ConnectWalletType2 from '../components/Modals/ConnectWalletType1.jsx';

const NftCardDetails = () => {
	const [nftItemData, setNftItemData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);

	// Get the url parameters
	useEffect(() => {
		const url = window.location.pathname;
		const urlIndexArray = url.split('/');
		const urlIndex = Number(urlIndexArray[urlIndexArray.length - 1]);
		const filteredNft = data.filter((item) => item.id === urlIndex);

		filteredNft && setNftItemData(filteredNft[0])
	}, []);
	const { name } = nftItemData;
	let { image } = nftItemData;

	// Link to the image in public folder
	image = '../../../' + image;

	return (
		<NftCardDetailsStyles>  
			<NavbarNftCardDetails setShowModal={setShowModal}/>
			
			{showModal && <ConnectWalletType1 setShowModal={setShowModal} setShowModal2={setShowModal2}/>}
			{showModal2 && <ConnectWalletType2 setShowModal2={setShowModal2}/>}

			<div className='card-container'>
				<div className='card-container-image'>
					<img src={image} alt={name} />
					<h2>
						rebel kanga <span>(wgaia)</span>
					</h2>
				</div>
				<div className='card-container-texts'>
					<div className='row-1'>
						<p className='para-one'>Address</p>
						<p className='para-two'>0x546...624Ad</p>
					</div>

					<div className='row-2'>
						<h5>Earn WGAIA from the Gaia Ecosystem</h5>
						<div className='input-box'>
							<input type='text' />
							<input type='text' />
							<input type='text' />
						</div>
					</div>

					<div className='row-3'>
						<p className='para-one'>My Staked</p>
						<p className='para-two'>0 NFTs</p>
					</div>

					<div className='row-4'>
						<p className='para-one'>Total Staked</p>
						<p className='para-two'>0 NFTs</p>
					</div>

					<div className='row-5'>
						<p className='para-one'>37d 14h 36m 3s</p>
					</div>

					<div className='row-6'>
						<p className='para-one'>Please connect Your Wallet</p>
						<button>
							<Link to='#'>Stake Rules & Info</Link>
						</button>
					</div>
				</div>
			</div>
		</NftCardDetailsStyles>
	);
};

export default NftCardDetails;
