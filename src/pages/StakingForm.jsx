// components/MultiStepForm.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import fetchTraits from '../../trait';

const importTrait = () => {
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
}
// export default importTrait;

const StakingForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    contractAddress: '',
    description: '',
    name: '',
    image: '',
    website: '',
    twitter: '',
    walletAddress: '',
    stakingAddress: '',
    chain: '',
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const formSteps = [
    { name: "contractAddress", label: "NFT Contract Address" },
    { name: "description", label: "Description" },
    { name: "name", label: "Name" },
    { name: "image", label: "Image URL" },
    { name: "website", label: "Website" },
    { name: "twitter", label: "Twitter Handle" },
    { name: "walletAddress", label: "Wallet Address" },
    { name: "stakingAddress", label: "Staking Address" },
    { name: "chain", label: "Blockchain" },
  ];

  const stepIndex = Math.floor(step / 2);

  return (
    <div className="form-container">
      <AnimatePresence mode="wait">
        {/* <motion.div
          key={stepIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
        {step < formSteps.length / 2 ? (
              <div className="form-step">
                {formSteps.slice(stepIndex * 2, stepIndex * 2 + 2).map((field, index) => (
                  <div key={index} className="form-group">
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="form-step">
                <h3>Review your information</h3>
                {formSteps.map((field, index) => (
                  <div key={index} className="form-group">
                    <label>{field.label}</label>
                    <p>{formData[field.name]}</p>
                  </div>
                ))}
                <button type="submit">Submit</button>
              </div>
            )}
        </motion.div> */}
        <importTrait />
      </AnimatePresence>

      <div className="form-navigation">
        {step > 0 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < formSteps.length / 2 && <button type="button" onClick={nextStep}>Next</button>}
      </div>
    </div>
  );
};

export default StakingForm;
