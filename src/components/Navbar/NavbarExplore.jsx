import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import ConnectBtn from './ConnectBtn';
import NavbarStyles from '../../assets/styles/NavbarStyles';
import { useState } from 'react';

const NavBarExplore = () => {
	const [isBarOpen, setIsBarOpen] = useState(false);

	return (
		<NavbarStyles>
			<div className='nav-center'>
				<Link className='logo-link' to='/'>
					<img src={Logo} alt='logo' />
				</Link>
				<ConnectBtn />
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
						<Link to='/admin'>Admin</Link>
					</li>
					<li>
						<Link to="/raffle">Raffles</Link>
					</li>
					<li>
						<Link to="/nfts">Projects</Link>
					</li>	
				</ul>
			)}
		</NavbarStyles>
	);
};

export default NavBarExplore;
