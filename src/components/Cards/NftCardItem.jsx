import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles'; // Import styles

const NftCardItem = ({ dataItem }) => {
  const { id, image, name, description, } = dataItem;
  return (
    <NftCardItemStyles>
      <img src="http://gaia-images.onrender.com/image-1711224759274.png" alt={name} />
      <h2>{name}</h2>
      <h2>{description}</h2>
      {/* Use Link instead of a regular anchor tag */}
      <Link to={`/nfts/card/${name}/${id}`}>see details</Link>
    </NftCardItemStyles>
  );
};

export default NftCardItem;
