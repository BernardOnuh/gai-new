import { useEffect, useState } from "react";
import NftCardConnectedStyles from "../assets/styles/NftCardConnectedStyles";
import NavbarNftConnected from "../components/Navbar/NavbarNftConnected";
import { data } from "../assets/inAppData/Explore";
// import { Link } from "react-router-dom";

const NftCardConnected = () => {
  const [connectedNft,setConnectedNft] = useState([]);

	// Get the url parameters
	useEffect(() => {
		const url = window.location.pathname;
		const urlIndexArray = url.split('/');
		const urlIndex = Number(urlIndexArray[urlIndexArray.length - 1]);
		const filteredNft = data.filter((item) => item.id === urlIndex);

		filteredNft && setConnectedNft(filteredNft[0]);
	}, []);

	const { name } = connectedNft;
	let { image } = connectedNft;

	// Link to the image in public folder
	image = '../../../../../' + image;

	return (
		<NftCardConnectedStyles>
			<NavbarNftConnected />
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
						<h5>Earn WCRC from the Gaia Ecosystem</h5>
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
						<input type='text' placeholder="Enter text here..."/>
						<button>set reward duration</button>
					</div>

					<div className='row-7'>
						<button>stake</button>
						<button>unstake</button>
						<button>claim button</button>
					</div>

					<div className="row-8">
						<p className="para-one">Estimated Rewards</p>
						<p className="para-two">
							0 GAIA
						</p>
					</div>

					<div className="row-9">
						<p className="para-one">Pool Rate</p>
						<p className="para-two">1,204.5 WGAIA/Week</p>
					</div>
				</div>
			</div>
		</NftCardConnectedStyles>
	);
}

export default NftCardConnected