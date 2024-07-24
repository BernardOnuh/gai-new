// pages/traits.js
import { useState } from 'react';
// import fetchTraits from '../trait';
import fetchTraits from '../../../trait';

const TraitsPage = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [nftData, setNftData] = useState(null);

  

  const handleFetchTraits = async (e) => {
    e.preventDefault()
    setLoading(true);
    const data = await fetchTraits(contractAddress);
    setNftData(data);
    setLoading(false);
    console.log(data)
  };

  // Add null checks
  const basicDetails = nftData ? nftData.basicDetails : null;
  const traits = nftData ? nftData.traits : [];

  return (
    <div>
      <h1>NFT Traits Fetcher</h1>
      <div className='form'>
      <input
        type="text"
        value={contractAddress}
        onChange={
          (e) => setContractAddress(e.target.value)
        }
        placeholder="Enter NFT Contract Address"
      />
      <button onClick={handleFetchTraits}>Fetch Traits</button>

      </div>

      {loading && <div>Loading...</div>}

      {nftData && (
        <div className='nft-details'>
          <h2>Basic Details</h2>
          <p>Name: {basicDetails.name}</p>
          <p>Description: {basicDetails.description}</p>
          <p>Token ID: {basicDetails.tokenId}</p>
          <p>Collection Name: {basicDetails.collectionName}</p>
          <p>Contract Address: {basicDetails.contractAddress}</p>
          <div className='nft-img'>
          <img src={basicDetails.image} alt={basicDetails.name} />
          </div>

          <h2>Traits</h2>
          <ul>
            {traits.map((trait, index) => (
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
