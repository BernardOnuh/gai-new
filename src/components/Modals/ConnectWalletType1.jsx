import { useEffect, useState } from 'react';
import ProgressBar from '../../assets/images/progress-bar-1.png'
import ProgressBar2 from '../../assets/images/progress-bar-2.png'
import ConnectWalletStyles from '../../assets/styles/ConnectWalletStyles';
import { ConnectWallet } from '@thirdweb-dev/react';
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
			<ConnectWallet/>
		</ConnectWalletStyles> 
	);
}

export default ConnectWalletType1