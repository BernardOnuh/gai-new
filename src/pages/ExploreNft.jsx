import ExploreNftStyles from '../assets/styles/ExploreNftStyles.js';
import NavBarExplore from '../components/Navbar/NavbarExplore.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NftCardItem from '../components/Cards/NftCardItem.jsx';

const ExploreNft = () => {
	const [data, setData] = useState([]);
	const traits = ["earth", "aethir", "1/1"]; // Define your traits

	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await axios.get('https://gaia-database.onrender.com/api/gaia');
		  setData(response.data);
		  console.log(response.data);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };

	  fetchData();
	}, []);

	return (
		<ExploreNftStyles>
			<NavBarExplore />
			<div className='explore-container'>
				<div className='explore-header'>
					<button>
						<p>live</p>
					</button>
					<button>
						<p>live</p>
					</button>
					<div className='input-actions'>
						<div className='search'>
							<input type='search' placeholder='search nft' />
							<i className='fa fa-search'></i>
						</div>
						<div className='sort'>
							<p>sort by</p>
							<i className='fas fa-signal'></i>
						</div>
					</div>
				</div>

				<div className='explore-cardlist'>
					{data.map((item, index) => (
						traits.map((trait, traitIndex) => (
							<NftCardItem key={`${index}-${traitIndex}`} dataItem={item} trait={trait} />
						))
					))}
				</div>
			</div>
		</ExploreNftStyles>
	);
};

export default ExploreNft;
