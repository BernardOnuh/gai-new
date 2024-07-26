import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({ dataItem, traits }) => {
  const [selectedTraits, setSelectedTraits] = useState([]);

  const handleTraitChange = (trait) => {
    setSelectedTraits(prevSelected => {
      if (prevSelected.includes(trait)) {
        return prevSelected.filter(t => t !== trait);
      } else {
        return [...prevSelected, trait];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://your-database-endpoint', { traits: selectedTraits });
      alert('Traits submitted successfully!');
    } catch (error) {
      console.error('Error submitting traits:', error);
      alert('Failed to submit traits.');
    }
  };

  const { id, image, headerTextOne, headerTextTwo, name, stakingAddress, chain } = dataItem || {};

  return (
    <>
      <NftCardItemStyles>
        {dataItem ? (
          <>
            <img src={image} alt={headerTextOne} />
            <h2>{name}</h2>
            <Link to={`/nfts/card/${name}/${stakingAddress}/${chain}`}>see details</Link>
          </>
        ) : (
          <>
            <h2>Traits Details</h2>
            <div className='traits-box'>
              {/* <h2>Traits</h2> */}
              <div className="traits-container">
                {traits.map((trait, index) => (
                  <div key={index} className="trait-item" onClick={() => handleTraitChange(trait)}>
                    <span className='trait-word'>{trait}</span>
                    <input
                      type="checkbox"
                      checked={selectedTraits.includes(trait)}
                      onChange={() => handleTraitChange(trait)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleSubmit}>Submit Traits</button>
          </>
        )}
      </NftCardItemStyles>
    </>
  );
};

export default NftCardItem;
