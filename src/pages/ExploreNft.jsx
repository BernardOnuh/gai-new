/* eslint-disable no-mixed-spaces-and-tabs */
import ExploreNftStyles from '../assets/styles/ExploreNftStyles.js';
import NavBarExplore from '../components/Navbar/NavbarExplore.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NftCardItem from '../components/Cards/NftCardItem.jsx';
import NewNftCardItem from '../components/NewCards/NewNftCardItem.jsx';
import nftData from '../components/NewCards/nftData.json';

const ExploreNft = () => {
	const [data, setData] = useState([]);
	const [newdata, setNewData] = useState([]);

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

	useEffect(() => {
		// Set the data directly from the JSON file
		setNewData(nftData);
		console.log(nftData);
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
					{newdata.map((item, index) => (
						<NewNftCardItem key={index} dataItem={item} />
					))}
				</div>
				<div className='explore-cardlist'>
					{data.map((item, index) => (
						<NftCardItem key={index} dataItem={item} />
					))}
				</div>
			</div>
		</ExploreNftStyles>
	);
};

export default ExploreNft;
