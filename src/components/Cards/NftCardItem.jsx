import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({dataItem }) => {
  const { _id, image, name, description,stakingAddress } = dataItem;
  return (
    <NftCardItemStyles>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>{description}</h2>
      <h2>{stakingAddress}</h2>
      {/* Use Link instead of a regular anchor tag*/}
      <Link to={`/nfts/card/${name}/${stakingAddress}`}>see details</Link>
    </NftCardItemStyles>
  );
};
 
export default NftCardItem; 
