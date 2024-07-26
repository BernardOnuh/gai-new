import ExploreNftStyles from '../assets/styles/ExploreNftStyles.js';
import NavBarExplore from '../components/Navbar/NavbarExplore.jsx';
import { data as initialData } from '../assets/inAppData/Explore.js'; // renamed to initialData to avoid conflict
import NftCardItem from '../components/Cards/NftCardItem.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

  console.log(data);

  // Example traits data for the new card
  const traits = ["Earth", "Wind", "Water", "Fire", "Aethir", "1/1"]; // Updated trait names

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
            <NftCardItem key={index} dataItem={item} />
          ))}

          {/* New card with traits and buttons */}
          <NftCardItem traits={traits} /> {/* Passing traits as props */}
        </div>
      </div>
    </ExploreNftStyles>
  );
};

export default ExploreNft;
