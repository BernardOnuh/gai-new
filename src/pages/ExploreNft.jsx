import ExploreNftStyles from '../assets/styles/ExploreNftStyles.js';
import NavBarExplore from '../components/Navbar/NavbarExplore.jsx';
import { data } from '../assets/inAppData/Explore.js';
import NftCardItem from '../components/Cards/NftCardItem.jsx';
import axios from 'axios'
import { useState,useEffect } from 'react';
const ExploreNft = () => {

	const [data, setData] = useState([]);
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await axios.get('https://gaia-database.onrender.com/api/gaia');
		  setData(response.data);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  fetchData();
	}, []);
	console.log(data)
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
						<image src="https://gaia-images.onrender.com/image-1711224759274.png"/>
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
            <NftCardItem key={index} dataItem={item} />
          ))}
        </div>
			</div>
		</ExploreNftStyles>
	);
};

export default ExploreNft;
