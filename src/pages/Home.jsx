import HomePageStyles from "../assets/styles/HomePageStyles";
import NavbarHome from "../components/Navbar/NavbarHome";
import Cone from '../assets/images/cone.png'
import { Link } from "react-router-dom";


const Home = () => {
	return (
		<HomePageStyles>
			<NavbarHome />
			<section className='showcase'>
				<div className='showcase-center'>
					<div className='header-one'>
						<h2>
							Discover, Collect and Sell Awesome <span>NFTs</span>
						</h2>
						<p>The best marketplace to manage all your NFT assets.</p>
						<img src={Cone} alt='cone-img' />
					</div>

					<div className='header-two'>
						<h6>introducing</h6>
						<h2>gaia finance</h2>
						<Link to='/nfts'>
							<button>explore now</button>
						</Link>
						<Link to='https://gaia-eco.netlify.app/'>
							<button>Royalties</button>
						</Link>
					</div>
				</div>
			</section>
		</HomePageStyles>
	);
};

export default Home;
