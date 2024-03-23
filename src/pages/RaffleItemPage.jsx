import { useEffect, useState } from "react"
import raffleData from "../assets/inAppData/Raffle";
import RaffleItemPageStyles from '../assets/styles/RaffleItemPageStyles';
import NavbarNftConnected from "../components/Navbar/NavbarNftConnected";
import Anchor from "../assets/images/Vector.png"

const RaffleItemPage = () => {
	const [nftRaffleImg, setNftRaffleImg] = useState("");
	// Get the url parameters
	useEffect(() => {
		const url = window.location.pathname;
		const urlIndexArray = url.split('/');
		const urlIndex = Number(urlIndexArray[urlIndexArray.length - 1]);
		const filteredNft = raffleData.filter((item) => item.id === urlIndex);

		filteredNft && setNftRaffleImg(filteredNft[0]);
	}, []);
	const { name, id } = nftRaffleImg;
	let { image } = nftRaffleImg;

	// Link to the image in public folder
	image = '../../../' + image;
	return (
		<RaffleItemPageStyles>
			<NavbarNftConnected />
			<div className='raffle-item'>
				<div className='row-1'>
					<div className='row-1-content-1'>
						<div className='row-1-content-1-image'>
							<img src={Anchor} alt="anchor-pix" />
						</div>
						<h2>RAFFLE #{id}</h2>
					</div>

					<div className='row-1-content-2'>
						<img src={image} alt={name} />
					</div>
				</div>

				<div className='row-2'>
					<div className='row-2-content-1'>
						<h4>OG Dark Sneakerhead</h4>
						<p>0xe48902A911a4a319Adee7E4769eC2D784952565C</p>
            <button>Not verified</button>
					</div>
				</div>

        <div className="row-3">
          <div className="row-3-content">
            <p className="para-one">Status</p>
            <p className="para-two">Active</p>
          </div>
          <div className="row-3-content">
            <p className="para-one">Creator</p>
            <p className="para-two">Oxe489....65C</p>
          </div>
          <div className="row-3-content">
            <p className="para-one">Ticket Price</p>
            <p className="para-two">15 CRO</p>
          </div>
          <div className="row-3-content">
            <p className="para-one">Tickets</p>
            <p className="para-two">7/10</p>
          </div>
          <div className="row-3-content">
            <p className="para-one">Your Tickets</p>
            <p className="para-two">0</p>
          </div>
          <div className="row-3-content">
            <p className="para-one">WIin Chance</p>
            <p className="para-two">0%</p>
          </div>
        </div>
			</div>
		</RaffleItemPageStyles>
	);
}

export default RaffleItemPage