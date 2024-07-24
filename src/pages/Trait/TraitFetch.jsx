// pages/traits.js
import { useState } from 'react';
// import fetchTraits from '../trait';
import fetchTraits from '../../../trait';

const TraitsPage = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [traits, setTraits] = useState(null);

  const handleInputChange = (e) => {
    setContractAddress(e.target.value);
  };

  const handleFetchTraits = async () => {
    setLoading(true);
    setTraits(null);
    const data = await fetchTraits(contractAddress);
    setTraits(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>NFT Traits Fetcher</h1>
      <input
        type="text"
        value={contractAddress}
        onChange={handleInputChange}
        placeholder="Enter NFT Contract Address"
      />
      <button onClick={handleFetchTraits}>Fetch Traits</button>

      {loading && <div>Loading...</div>}

      {traits && (
        <div>
          <h2>Basic Details</h2>
          <p>Name: {traits.basicDetails.name}</p>
          <p>Description: {traits.basicDetails.description}</p>
          <p>Token ID: {traits.basicDetails.tokenId}</p>
          <p>Collection Name: {traits.basicDetails.collectionName}</p>
          <p>Contract Address: {traits.basicDetails.contractAddress}</p>
          <img src={traits.basicDetails.image} alt={traits.basicDetails.name} />

          <h2>Traits</h2>
          <ul>
            {traits.traits.map((trait, index) => (
              <li key={index}>
                {trait.trait_type}: {trait.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TraitsPage;
