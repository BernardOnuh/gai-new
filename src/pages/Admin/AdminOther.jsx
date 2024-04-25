import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import { StakingFactory,StakingFactoryAbi,StakingFactoryNew,StakingFactoryNewAbi,StakingAbi } from '../../../contract/contract';
import { useAccount,useWriteContract,useChainId } from 'wagmi'
import { useReadContract } from 'wagmi'

const AdminOther = () => {
	const [href, setHref] = useState('');
	// Scroll page
	const account = useAccount()
	useEffect(() => {
		const href = window.location.href.substring(
			window.location.href.lastIndexOf('#') + 1,
		);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}, [href]);
	

	 
	return (
		<AdminFeeStyles>
			<NavbarNftConnected />
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>

				<div id={href} className='admin-container-form'>
					<form>
						<h2>other</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>owner claim reward</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='balance'>Reward balance</label>
									<input type='text' placeholder='40 CRO' id='balance' />
								</div>
								<button>claim</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</AdminFeeStyles>
	);
};

export default AdminOther;
