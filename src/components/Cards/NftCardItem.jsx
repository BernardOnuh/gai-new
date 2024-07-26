import { Link } from 'react-router-dom';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({ dataItem, trait }) => {
	const { image, headerTextOne, name, stakingAddress, chain } = dataItem;
	return (
		<NftCardItemStyles>
			<div className='nft_card'>
			<img src={image} alt={headerTextOne} />
			<h2>{name}</h2>
			<p>Trait: {trait}</p>
			<div className='stake_btn'>
			<button>Stake</button>
			<button>Unstake</button>
			</div>
			<Link to={`/nfts/card/${name}/${stakingAddress}/${chain}`}>See details</Link>
			</div>
		</NftCardItemStyles>
	);
};

export default NftCardItem;
