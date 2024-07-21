import AdminHomeStyles from '../../assets/styles/AdminHomeStyles';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import AdminLink from '../../components/AdminLink/AdminLink';
import { useEffect, useState } from 'react';
import { StakingFactory,StakingFactoryAbi,StakingFactoryNew,StakingFactoryNewAbi,tokenAbi } from '../../../contract/contract';
import { useAccount,useWriteContract,useChainId } from 'wagmi'
import { useReadContract } from 'wagmi'
import axios from 'axios';
import StakingForm from '../StakingForm';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TraitHome = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [rewardTokenAddress, setRewardTokenAddress] = useState('');
  const [stakingFee, setStakingFee] = useState('');
  const [timeUnit, setTimeUnit] = useState('');
  const [rewardsPerUnitTime, setRewardsPerUnitTime] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleClick = () => {
    // Add your handleClick logic here
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className='row-1'>
              <label htmlFor='name'>COLLECTION NAME</label>
              <input 
                type='text' 
                id='name' 
                placeholder='INPUT YOUR COLLECTION NAME e.g Toonz NFT' 
                value={collectionName} 
                onChange={(e) => setCollectionName(e.target.value)} 
              />
            </div>
            <div className='row-2'>
              <label htmlFor='desc'>DESCRIPTION</label>
              <textarea
                name='desc'
                id='desc'
                placeholder='DESCRIPTION'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <p>Briefly describe what you need</p>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className='row-3'>
              <label htmlFor='collection'>NFT COLLECTION ADDRESS</label>
              <input 
                type='text' 
                id='collection' 
                placeholder='NFT ADDRESS' 
                value={collectionAddress} 
                onChange={(e) => setCollectionAddress(e.target.value)} 
              />
            </div>
            <div className='row-4'>
              <label htmlFor='token'>REWARD TOKEN ADDRESS</label>
              <input 
                type='text' 
                id='token' 
                placeholder='REWARD TOKEN ADDRESS' 
                value={rewardTokenAddress} 
                onChange={(e) => setRewardTokenAddress(e.target.value)} 
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className='row-5'>
              <label htmlFor='stakingFee'>STAKING FEE</label>
              <input 
                type='text' 
                id='stakingFee' 
                placeholder='STAKING FEE' 
                value={stakingFee} 
                onChange={(e) => setStakingFee(e.target.value)} 
              />
            </div>
            <div className='row-5'>
              <label htmlFor='timeUnit'>TIME UNIT</label>
              <input 
                type='text' 
                id='timeUnit' 
                placeholder='TIME UNIT' 
                value={timeUnit} 
                onChange={(e) => setTimeUnit(e.target.value)} 
              />
            </div>
            <div className='row-5'>
              <label htmlFor='rewardsPerUnitTime'>Reward/Time Unit</label>
              <input 
                type='text' 
                id='rewardsPerUnitTime' 
                placeholder='Reward/Time Unit' 
                value={rewardsPerUnitTime} 
                onChange={(e) => setRewardsPerUnitTime(e.target.value)} 
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="App">
              <h1>End Date</h1>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <AdminHomeStyles>
      <NavbarNftConnected />
      <div className='admin-container'>
        <div className='admin-container-links'>
          <AdminLink />
        </div>
        <div className='admin-container-form'>
          <form>
            <h2>Deploy NFT Staking</h2>
            {/* {renderStep()} */}
            <StakingForm />

          </form>
          {/* <div className='button-container'>
            {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
            {currentStep < 4 && <button onClick={nextStep}>Next</button>}
            {currentStep === 4 && (
              <button onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Deploy'}
              </button>
            )}
          </div> */}
        </div>
      </div>
    </AdminHomeStyles>
  );
};

export default TraitHome;