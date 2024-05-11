import { Link } from 'react-router-dom';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({ dataItem }) => {
	const { id, image, headerTextOne, headerTextTwo, name,stakingAddress,chain } = dataItem;
	return (
		<NftCardItemStyles>
			<img src={image} alt={headerTextOne} />
			<h2>{name}</h2>
			<Link to={`/nfts/card/${name}/${stakingAddress}/${chain}`}>see details</Link>
		</NftCardItemStyles>
	);
};

export default NftCardItem;
