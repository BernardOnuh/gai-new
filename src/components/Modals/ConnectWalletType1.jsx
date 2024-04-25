import { useEffect, useState } from 'react';
import ProgressBar from '../../assets/images/progress-bar-1.png'
import ProgressBar2 from '../../assets/images/progress-bar-2.png'
import ConnectWalletStyles from '../../assets/styles/ConnectWalletStyles';
import { Link } from 'react-router-dom';


const ConnectWalletType1 = ({ setShowModal }) => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [url, setUrl] = useState("");
	const [urlIndex, setUrlIndex] = useState("");

	// Get URL pathname
	useEffect(() => {
		const url = window.location.pathname;
		const urlIndex = Number(url.charAt(url.length - 1));
		setUrl(url);
		setUrlIndex(urlIndex)
	}, [])

  return (
		<ConnectWalletStyles>
			{!showSuccess ? (
				<>
					<div className='row-1'>
						<div className='col-1'>
							<div className='box'></div>
							<div className='col-1-texts'>
								<h4>Connect Your Wallet</h4>
								<p>1 available wallet</p>
							</div>
						</div>
						<div className='col-2'>
							<i
								className='fas fa-times'
								onClick={() => setShowModal(false)}
							></i>
						</div>
					</div>

					<div className='row-2'>
						<div className='col-1'>
							<div className='box' onClick={() => setShowSuccess(true)}></div>
							<p>Detected</p>
							<p>Wallet</p>
						</div>
					</div>

					<div className='row-3'>
						<div className='col-1'>
							<h4>Connect Your Wallet</h4>
							<p>
								Connecting your wallet is like&quot;logging in&quot; to Web3.
								Select your wallet from the options to get started.
							</p>
							<img src={ProgressBar} alt='progress-bar-1' />
						</div>
					</div>
				</>
			) : (
				<>
					<div className='row-1'>
						<div className='col-1'>
							<div className='box'></div>
							<div className='col-1-texts'>
								<h4>Connect Your Wallet</h4>
								<p>1 available wallet</p>
							</div>
						</div>
						<div className='col-2'>
							<i
								className='fas fa-times'
								onClick={() => setShowModal(false)}
							></i>
						</div>
					</div>

					<div className='row-2'>
						<div className='col-1'>
							<div className='box'></div>
							<p>Detected</p>
							<p>Wallet</p>
						</div>
					</div>

					<div className='row-3'>
						<div className='col-1'>
							<h4>Connect Your Wallet</h4>
							<p>
								Connecting your wallet is like&quot;logging in&quot; to Web3.
								Select your wallet from the options to get started.
							</p>
							<img src={ProgressBar2} alt='progress-bar-2' />
							<button>
								<Link to={`${url}/connected/${urlIndex}`}>click to next</Link>
							</button>
						</div>
					</div>
				</>
			)}
		</ConnectWalletStyles>
	);
}

export default ConnectWalletType1