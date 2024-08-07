import React, { useState, useEffect } from 'react';

function NftDisplay() {
    const [nfts, setNfts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNfts = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'x-api-key': '118c9d2f3e35451db2ae43f8590cc266'
                }
            };

            try {
                const response = await fetch('https://api.opensea.io/api/v2/chain/matic/account/0xb9c627A94EDF9f55e5F6917B6b0696e55660C7Ed/nfts', options);
                const data = await response.json();
                setNfts(data);
                console.log(data);  // This will log the data to the console
            } catch (err) {
                setError(err.message);
                console.error(err);
            }
        };

        fetchNfts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!nfts) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>NFTs</h1>
            <pre>{JSON.stringify(nfts, null, 2)}</pre>
        </div>
    );
}

export default NftDisplay;