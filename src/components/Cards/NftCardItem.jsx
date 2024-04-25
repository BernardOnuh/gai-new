import { Link } from 'react-router-dom';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({ dataItem }) => {
	const { id, image, headerTextOne, headerTextTwo, name } = dataItem;
	return (
		<NftCardItemStyles>
			<img src={image} alt={headerTextOne} />
			<h2>{headerTextOne}</h2>
			<h2>{headerTextTwo}</h2>
			<Link to={`/nfts/card/${name}/${id}`}>see details</Link>
		</NftCardItemStyles>
	);
};

export default NftCardItem;
