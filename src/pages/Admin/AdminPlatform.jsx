import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';

const AdminPlatform = () => {
	const [href, setHref] = useState('');
	// Scroll page
	useEffect(() => {
		const href = window.location.href.substring(
			window.location.href.lastIndexOf('#') + 1,
		);
		setHref(href);
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

				<div id = {href} className='admin-container-form'>
					<form>
						<h2>platform admin</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>withdraw airdrop nft</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='contract'>NFT CONTRACT ADDRESS</label>
									<input
										type='text'
										placeholder='Enter contract address'
										id='contract'
									/>
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-2'>
							<div className='row-2-title'>
								<h4>NFT token id&apos;s</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='token'>ENTER TOKEN ADDRESS</label>
									<input type='text' placeholder="Enter Token id'" id='token' />
								</div>
							</div>
						</div>

						<div className='row-3'>
							<div className='row-3-title'>
								<h4>Recover ERC20 URL</h4>
							</div>
							<div className='row-3-input'>
								<div className='row-3-input-1'>
									<label htmlFor='recover'>TOKEN ADDRESS</label>
									<input
										type='text'
										placeholder='Enter Token Address'
										id='recover'
									/>
								</div>
								<div className='row-3-input-2'>
									<label htmlFor='amount'>AMOUNT</label>
									<input
										type='text'
										placeholder='Enter reward Amount'
										id='amount'
									/>
								</div>
							</div>
						</div>

						<div className='row-3'>
							<div className='row-3-title'>
								<h4>withdraw collection nft(issue)</h4>
							</div>
							<div className='row-3-input'>
								<div className='row-3-input-1'>
									<label htmlFor='issue'>ENTER TOKEN ID&apos;S</label>
									<input
										type='text'
										placeholder="Enter Token id's"
										id='issue'
									/>
								</div>
                <button>submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</AdminFeeStyles>
	);
};

export default AdminPlatform;
