import ConeImg from '../../assets/images/cone.png';
import AdminLinkStyles from '../../assets/styles/AdminLinkStyles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdminLink = () => {
	return (
		<AdminLinkStyles>
			<img src={ConeImg} alt='img' />
			<Link to='/admin'><li>Home</li></Link>
			<Link to='/admin/fee'><li>Fee</li></Link>
			<Link to='/admin/reward'><li>Reward</li></Link>
			<Link to='/admin/contract'><li>Contract</li></Link>
			<Link to='/admin/other'><li>Other</li></Link>
			<Link to='/admin/boost-nft'><li>Boost NFT</li></Link>
			<Link to='/admin/platform-admin'><li>Platform Admin</li></Link>
		</AdminLinkStyles>
	);
};

export default AdminLink;