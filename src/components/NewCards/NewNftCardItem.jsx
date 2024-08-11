import { Link } from 'react-router-dom';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';
// import { useWriteContract } from 'wagmi';
// import { NFTAbi, StakingAbi } from '../../../contract/contract';
// import { writeContract } from 'viem/actions';


const NewNftCardItem = ({ dataItem}) => {
	// const {data: hash, useWriteContract} = useWriteContract()
	const { image, headerTextOne, name, stakingAddress, chain,traits } = dataItem;

	// const approveNFT = writeContract({
	// 	address: '0xD96E1816569a881459E8354A380415908C6A7F78',
	// 	NFTAbi,
	// 	functionName: 'approve',
	// 	args: [ stakingCA, tokenID ]
	// })

	// const stakeNFT = writeContract({

	// })
	
	return (
		<NftCardItemStyles>
			<div className='nft_card'>
			<img src={image} alt={headerTextOne} />
			<h2>{name}</h2>
			<p>Trait: {traits}</p>
			<div className='stake_btn'>
			{/* <button>Stake</button>
			<button>Unstake</button> */}
			</div>
			<Link to={`/nfts/card/${name}/${stakingAddress}/${chain}`}>See details</Link>
			</div>
		</NftCardItemStyles>
	);
};

export default NewNftCardItem;
