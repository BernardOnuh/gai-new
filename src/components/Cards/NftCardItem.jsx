import { Link } from 'react-router-dom';
import NftCardItemStyles from '../../assets/styles/NftCardItemStyles';

const NftCardItem = ({ dataItem, traits }) => {
  // Destructuring dataItem only if it exists
  const { id, image, headerTextOne, headerTextTwo, name, stakingAddress, chain } = dataItem || {};

  return (
    <>
      <NftCardItemStyles>
        {/* Conditional rendering based on whether dataItem exists */}
        {dataItem ? (
          <>
            <img src={image} alt={headerTextOne} />
            <h2>{name}</h2>
            <Link to={`/nfts/card/${name}/${stakingAddress}/${chain}`}>see details</Link>
          </>
        ) : (
          <div className='traits-box'>
            <h2>nft traits</h2>
            <div className="traits-buttons">
              {traits.map((trait, index) => (
                <button key={index}>{trait}</button>
              ))}
            </div>
          </div>
        )}
      </NftCardItemStyles>
    </>
  );
};

export default NftCardItem;
