import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';

const AdminReward = () => {
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

				<div id = {href}className='admin-container-form'>
					<form>
						<h2>reward</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>set reward duration</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='duration'>Duration</label>
									<input type='text' placeholder='Enter time' id='duration' />
									<p>Example: 2 of 2 weeks</p>
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-2'>
							<div className='row-2-title'>
								<h4>set reward amount</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='amount'>Amount</label>
									<input type='text' placeholder='Enter Reward' id='amount' />
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-3'>
							<div className='row-3-title'>
								<h4>set reward amount if pool is missed</h4>
							</div>
							<div className='row-3-input'>
								<div className='row-3-input-1'>
									<label htmlFor='pool'>Amount</label>
									<input type='text' placeholder='0' id='pool' />
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

export default AdminReward;
