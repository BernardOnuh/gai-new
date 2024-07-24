// pages/traits.js
import { useState } from 'react';
// Import the fetchTraits function from the correct path
import fetchTraits from '../../../trait';

const TraitsPage = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [nftData, setNftData] = useState(null);

  // Function to fetch NFT traits
  const handleFetchTraits = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true); // Start loading state
    const data = await fetchTraits(contractAddress); // Fetch data
    setNftData(data); // Set NFT data
    setLoading(false); // End loading state
    console.log(data); // Log data for debugging
  };

  // Destructure nftData for basic details and traits
  const basicDetails = nftData ? nftData.basicDetails : null;
  const traits = nftData ? nftData.traits : [];

  return (
    <div>
      <h1>NFT Traits Fetcher</h1>
      {/* Form to prevent default submission behavior */}
      <form onSubmit={handleFetchTraits}>
        <input
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="Enter NFT Contract Address"
        />
        <button type="submit">Fetch Traits</button>
      </form>

      {/* Loading indicator */}
      {loading && <div>Loading...</div>}

      {/* Display NFT details and traits if available */}
      {nftData && (
        <div>
          <h2>Basic Details</h2>
          <p><strong>Name:</strong> {basicDetails.name}</p>
          <p><strong>Description:</strong> {basicDetails.description || 'N/A'}</p>
          <p><strong>Token ID:</strong> {basicDetails.tokenId}</p>
          <p><strong>Collection Name:</strong> {basicDetails.collectionName}</p>
          <p><strong>Contract Address:</strong> {basicDetails.contractAddress}</p>
          <img src={basicDetails.image} alt={basicDetails.name} style={{ maxWidth: '300px', height: 'auto' }} />

          <h2>Traits</h2>
          <ul>
            {traits.map((trait, index) => (
              <li key={index}>
                <strong>{trait.trait_type}:</strong> {trait.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TraitsPage;
