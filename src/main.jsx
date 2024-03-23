import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";




ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ThirdwebProvider activeChain={Mumbai} clientId=""> 
		<Router>
			<App />
		</Router>
    </ThirdwebProvider>
  </React.StrictMode>,
);


