import { Link } from 'react-router-dom';
import ConeImg from '../../assets/images/cone.png';
import AdminLinkStyles from '../../assets/styles/AdminLinkStyles';

const AdminLink = () => {
	return (
		<AdminLinkStyles>
			<img src={ConeImg} alt='img' />
			<li>
				<Link to='/admin'>Home</Link>
			</li>
			<li>
				<Link to='/admin/fee'>Fee</Link>
			</li>
			<li>
				<Link to='/admin/reward'>Reward</Link>
			</li>
			<li>
				<Link to='/admin/contract'>contract</Link>
			</li>
			<li>
				<Link to='/admin/other'>other</Link>
			</li>
			<li>
				<Link to='/admin/boost-nft'>boost nft</Link>
			</li>
			<li>
				<Link to='/admin/platform-admin'>platform admin</Link>
			</li>
		</AdminLinkStyles>
	);
};

export default AdminLink;
