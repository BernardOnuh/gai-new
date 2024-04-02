import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import NavbarStyles from '../../assets/styles/NavbarStyles';
import ConnectBtn from './ConnectBtn';
import { useState } from 'react';

const NavbarNftCardDetails = ({setShowModal}) => {
	
  const [isBarOpen, setIsBarOpen] = useState(false);
	const [isLinkOpen, setIsLinkOpen] = useState(false);

	return (
		<NavbarStyles>
			<div className='nav-center'>
				<Link className='logo-link' to='/'>
					<img src={Logo} alt='logo' />
				</Link>
				<ConnectBtn/>
				<div className='navbar' onClick={() => setIsBarOpen(!isBarOpen)}>
					<i className='fa fa-bars'></i>
				</div>
			</div>

			{isBarOpen && (
				<ul className={isBarOpen ? 'navlist navlist-show' : 'navlist'}>
					<i
						className='fa fa-times'
						onClick={() => setIsBarOpen(!isBarOpen)}
					></i>

					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/nft-stake'>NFT Staking</Link>
						<i
							className='fa fa-chevron-down'
							onClick={() => setIsLinkOpen(!isLinkOpen)}
						></i>
					</li>
					{isLinkOpen && <p>Non Custodial NFT Staking (v2)</p>}
					<li className='soon'>
						<Link to='/coin-stake'>coin staking</Link>
						<button className='soon-btn'>soon</button>
					</li>
					<li className='soon'>
						<Link to='/raffles'>raffles</Link>
						<button className='soon-btn'>soon</button>
					</li>
				</ul>
			)}
		</NavbarStyles>
	);
};

export default NavbarNftCardDetails;