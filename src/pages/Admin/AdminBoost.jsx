import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';

const AdminBoost = () => {
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

				<div id={href}className='admin-container-form'>
					<form>
						<h2>boost nft</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>set boost nft</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='boost'>ENTER NFT ADDRESS</label>
									<input type='text' placeholder='Enter address' id='boost' />
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

export default AdminBoost;
