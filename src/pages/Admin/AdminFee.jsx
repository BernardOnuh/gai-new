import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';

const AdminFee = () => {
	const [href, setHref] = useState('');
	// Scroll page
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
						<h2>fee</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>set charge fee</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='stake-fee'>Stake fee</label>
									<input
										type='text'
										placeholder='Enter Stake Fee'
										id='stake-fee'
									/>
								</div>
								<div className='row-1-input-2'>
									<label htmlFor='claim-fee'>Claim fee</label>
									<input
										type='text'
										placeholder='Enter Claim Fee'
										id='claim-fee'
									/>
								</div>

								<button>submit</button>
							</div>
						</div>

						<div className='row-2'>
							<div className='row-2-title'>
								<h4>set charge payee</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='address'>Address</label>
									<input
										type='text'
										placeholder='Enter Payee Address'
										id='address'
									/>
								</div>
								<button>submit</button>

								<div className='row-2-input-2'>
									<label htmlFor='charge-fee'>Claim Charge Fee</label>
									<input type='text' placeholder='Total Fund' id='charge-fee' />
								</div>
								<button>claim</button>

								<div className='row-2-input-3'>
									<label htmlFor='total-fee'>Total Staking Fee</label>
									<input
										type='text'
										placeholder='Staking and claim fee is off'
										id='total-fee'
									/>
								</div>
								<button>toggle</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</AdminFeeStyles>
	);
};

export default AdminFee;
