/* eslint-disable no-mixed-spaces-and-tabs */
export const StakingFactory = "0xb90423dc6860fcc027514767d716a21affceccbc";

export const StakingFactoryAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Gaia_NoEtherToWithdraw",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotEnoughEtherToCoverFee",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newContract",
				"type": "address"
			}
		],
		"name": "ContractDeployed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_collectionAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_stakingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsPerUnitTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"name": "deployStakingContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedStakingContracts",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newFee",
				"type": "uint256"
			}
		],
		"name": "updateFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const RaffleAddress ="0xDbA63c28DB941bB4F1D5968Fc8bb60Bf1951aEdc";
export const RaffleFactoryAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "Gaia_MaxTicketExceeded",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotEnoughFund",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotNFTOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_RaffleNotActive",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			}
		],
		"name": "RaffleCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "contract IERC721",
				"name": "nft",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "RaffleCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tickets",
				"type": "uint256"
			}
		],
		"name": "TicketPurchased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			}
		],
		"name": "cancelRaffle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC721",
				"name": "_nft",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ticketPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxTickets",
				"type": "uint256"
			}
		],
		"name": "createRaffle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextRaffleId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tickets",
				"type": "uint256"
			}
		],
		"name": "purchaseTickets",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "raffleId",
				"type": "uint256"
			}
		],
		"name": "raffles",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "nft",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ticketPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxTickets",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ticketsSold",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const StakingFactoryNew ="0x727fB62E19eA752bFE20a540D89B2Fad867E1566";
export const StakingFactoryNewAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Gaia_NoEtherToWithdraw",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotEnoughEtherToCoverFee",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newContract",
				"type": "address"
			}
		],
		"name": "ContractDeployed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_collectionAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_stakingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsPerUnitTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"name": "deployStakingContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_deployer",
				"type": "address"
			}
		],
		"name": "getDeployedStakingContractsByAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_deployer",
				"type": "address"
			}
		],
		"name": "getNumberOfDeployedContractsByAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newFee",
				"type": "uint256"
			}
		],
		"name": "updateFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const StakingAbi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_collectionAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_stakingFee",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_timeUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsPerUnitTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "EnforcedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ExpectedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_AddressCantBeZero",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "GaiaStake_AmountTooLow",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_EmptyCollectionName",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_EmptyDescription",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_InvalidStakingFee",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_NoNFTToUnStake",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_StakingEnded",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "GaiaStake_UnstakeAmountTooHigh",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_InvalidTimeUnit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NoStakingCondition",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotStaker",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Gaiane_BalanceTooLow",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaiane_HasNoEndTime",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ERC20Recovered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NFTStaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountDeposited",
				"type": "uint256"
			}
		],
		"name": "RewardTokensDeposited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "staker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardAmount",
				"type": "uint256"
			}
		],
		"name": "RewardsClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "staker",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "TokensWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldEndTimestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newEndTimeStamp",
				"type": "uint256"
			}
		],
		"name": "UpdatedEndTimestamp",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldRewardsPerUnitTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRewardsPerUnitTime",
				"type": "uint256"
			}
		],
		"name": "UpdatedRewardsPerUnitTime",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldTimeUnit",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTimeUnit",
				"type": "uint256"
			}
		],
		"name": "UpdatedTimeUnit",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectionAddress",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectionName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "depositRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "description",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			}
		],
		"name": "getStakeInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokensStaked",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_rewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStakersCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "indexedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenIds",
				"type": "uint256"
			}
		],
		"name": "isIndexed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "recoverERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardTokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			}
		],
		"name": "setEndTimeStamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardsPerUnitTime",
				"type": "uint256"
			}
		],
		"name": "setRewardsPerUnitTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_timeUnit",
				"type": "uint256"
			}
		],
		"name": "setTimeUnit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stakeTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenIds",
				"type": "uint256"
			}
		],
		"name": "stakerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "stakers",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "staker",
				"type": "address"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "amountStaked",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "conditionIdOflastUpdate",
				"type": "uint64"
			},
			{
				"internalType": "uint128",
				"name": "timeOfLastUpdate",
				"type": "uint128"
			},
			{
				"internalType": "uint256",
				"name": "unclaimedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakersArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "unStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const tokenAbi = [
	{
	  "type": "constructor",
	  "name": "",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "event",
	  "name": "Approval",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "spender",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "value",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "DelegateChanged",
	  "inputs": [
		{
		  "type": "address",
		  "name": "delegator",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "fromDelegate",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "toDelegate",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "DelegateVotesChanged",
	  "inputs": [
		{
		  "type": "address",
		  "name": "delegate",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "previousBalance",
		  "indexed": false,
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "newBalance",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "EIP712DomainChanged",
	  "inputs": [],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "FlatPlatformFeeUpdated",
	  "inputs": [
		{
		  "type": "address",
		  "name": "platformFeeRecipient",
		  "indexed": false,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "flatFee",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "Initialized",
	  "inputs": [
		{
		  "type": "uint8",
		  "name": "version",
		  "indexed": false,
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "PlatformFeeInfoUpdated",
	  "inputs": [
		{
		  "type": "address",
		  "name": "platformFeeRecipient",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "platformFeeBps",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "PlatformFeeTypeUpdated",
	  "inputs": [
		{
		  "type": "uint8",
		  "name": "feeType",
		  "indexed": false,
		  "internalType": "enum IPlatformFee.PlatformFeeType"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "PrimarySaleRecipientUpdated",
	  "inputs": [
		{
		  "type": "address",
		  "name": "recipient",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "RoleAdminChanged",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "indexed": true,
		  "internalType": "bytes32"
		},
		{
		  "type": "bytes32",
		  "name": "previousAdminRole",
		  "indexed": true,
		  "internalType": "bytes32"
		},
		{
		  "type": "bytes32",
		  "name": "newAdminRole",
		  "indexed": true,
		  "internalType": "bytes32"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "RoleGranted",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "indexed": true,
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "sender",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "RoleRevoked",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "indexed": true,
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "sender",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TokensMinted",
	  "inputs": [
		{
		  "type": "address",
		  "name": "mintedTo",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "quantityMinted",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TokensMintedWithSignature",
	  "inputs": [
		{
		  "type": "address",
		  "name": "signer",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "mintedTo",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "tuple",
		  "name": "mintRequest",
		  "components": [
			{
			  "type": "address",
			  "name": "to",
			  "internalType": "address"
			},
			{
			  "type": "address",
			  "name": "primarySaleRecipient",
			  "internalType": "address"
			},
			{
			  "type": "uint256",
			  "name": "quantity",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "price",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			},
			{
			  "type": "uint128",
			  "name": "validityStartTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "uint128",
			  "name": "validityEndTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "bytes32",
			  "name": "uid",
			  "internalType": "bytes32"
			}
		  ],
		  "indexed": false,
		  "internalType": "struct ITokenERC20.MintRequest"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "Transfer",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "value",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "function",
	  "name": "CLOCK_MODE",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "DEFAULT_ADMIN_ROLE",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "bytes32",
		  "name": "",
		  "internalType": "bytes32"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "DOMAIN_SEPARATOR",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "bytes32",
		  "name": "",
		  "internalType": "bytes32"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "allowance",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "approve",
	  "inputs": [
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "balanceOf",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "burn",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "burnFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "checkpoints",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		},
		{
		  "type": "uint32",
		  "name": "pos",
		  "internalType": "uint32"
		}
	  ],
	  "outputs": [
		{
		  "type": "tuple",
		  "name": "",
		  "components": [
			{
			  "type": "uint32",
			  "name": "fromBlock",
			  "internalType": "uint32"
			},
			{
			  "type": "uint224",
			  "name": "votes",
			  "internalType": "uint224"
			}
		  ],
		  "internalType": "struct ERC20VotesUpgradeable.Checkpoint"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "clock",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint48",
		  "name": "",
		  "internalType": "uint48"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "contractType",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "bytes32",
		  "name": "",
		  "internalType": "bytes32"
		}
	  ],
	  "stateMutability": "pure"
	},
	{
	  "type": "function",
	  "name": "contractURI",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "contractVersion",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint8",
		  "name": "",
		  "internalType": "uint8"
		}
	  ],
	  "stateMutability": "pure"
	},
	{
	  "type": "function",
	  "name": "decimals",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint8",
		  "name": "",
		  "internalType": "uint8"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "decreaseAllowance",
	  "inputs": [
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "subtractedValue",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "delegate",
	  "inputs": [
		{
		  "type": "address",
		  "name": "delegatee",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "delegateBySig",
	  "inputs": [
		{
		  "type": "address",
		  "name": "delegatee",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "nonce",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "expiry",
		  "internalType": "uint256"
		},
		{
		  "type": "uint8",
		  "name": "v",
		  "internalType": "uint8"
		},
		{
		  "type": "bytes32",
		  "name": "r",
		  "internalType": "bytes32"
		},
		{
		  "type": "bytes32",
		  "name": "s",
		  "internalType": "bytes32"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "delegates",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "eip712Domain",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "bytes1",
		  "name": "fields",
		  "internalType": "bytes1"
		},
		{
		  "type": "string",
		  "name": "name",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "version",
		  "internalType": "string"
		},
		{
		  "type": "uint256",
		  "name": "chainId",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "verifyingContract",
		  "internalType": "address"
		},
		{
		  "type": "bytes32",
		  "name": "salt",
		  "internalType": "bytes32"
		},
		{
		  "type": "uint256[]",
		  "name": "extensions",
		  "internalType": "uint256[]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPastTotalSupply",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "timepoint",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPastVotes",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "timepoint",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPlatformFeeInfo",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		},
		{
		  "type": "uint16",
		  "name": "",
		  "internalType": "uint16"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRoleAdmin",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		}
	  ],
	  "outputs": [
		{
		  "type": "bytes32",
		  "name": "",
		  "internalType": "bytes32"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRoleMember",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		},
		{
		  "type": "uint256",
		  "name": "index",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRoleMemberCount",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getVotes",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "grantRole",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "hasRole",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "increaseAllowance",
	  "inputs": [
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "addedValue",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "initialize",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_defaultAdmin",
		  "internalType": "address"
		},
		{
		  "type": "string",
		  "name": "_name",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "_symbol",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "_contractURI",
		  "internalType": "string"
		},
		{
		  "type": "address[]",
		  "name": "_trustedForwarders",
		  "internalType": "address[]"
		},
		{
		  "type": "address",
		  "name": "_primarySaleRecipient",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "_platformFeeRecipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_platformFeeBps",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "isTrustedForwarder",
	  "inputs": [
		{
		  "type": "address",
		  "name": "forwarder",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "mintTo",
	  "inputs": [
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "mintWithSignature",
	  "inputs": [
		{
		  "type": "tuple",
		  "name": "_req",
		  "components": [
			{
			  "type": "address",
			  "name": "to",
			  "internalType": "address"
			},
			{
			  "type": "address",
			  "name": "primarySaleRecipient",
			  "internalType": "address"
			},
			{
			  "type": "uint256",
			  "name": "quantity",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "price",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			},
			{
			  "type": "uint128",
			  "name": "validityStartTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "uint128",
			  "name": "validityEndTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "bytes32",
			  "name": "uid",
			  "internalType": "bytes32"
			}
		  ],
		  "internalType": "struct ITokenERC20.MintRequest"
		},
		{
		  "type": "bytes",
		  "name": "_signature",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "multicall",
	  "inputs": [
		{
		  "type": "bytes[]",
		  "name": "data",
		  "internalType": "bytes[]"
		}
	  ],
	  "outputs": [
		{
		  "type": "bytes[]",
		  "name": "results",
		  "internalType": "bytes[]"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "name",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "nonces",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "numCheckpoints",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint32",
		  "name": "",
		  "internalType": "uint32"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "permit",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "value",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "deadline",
		  "internalType": "uint256"
		},
		{
		  "type": "uint8",
		  "name": "v",
		  "internalType": "uint8"
		},
		{
		  "type": "bytes32",
		  "name": "r",
		  "internalType": "bytes32"
		},
		{
		  "type": "bytes32",
		  "name": "s",
		  "internalType": "bytes32"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "primarySaleRecipient",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "renounceRole",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "revokeRole",
	  "inputs": [
		{
		  "type": "bytes32",
		  "name": "role",
		  "internalType": "bytes32"
		},
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setContractURI",
	  "inputs": [
		{
		  "type": "string",
		  "name": "_uri",
		  "internalType": "string"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setPlatformFeeInfo",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_platformFeeRecipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "_platformFeeBps",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setPrimarySaleRecipient",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_saleRecipient",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "supportsInterface",
	  "inputs": [
		{
		  "type": "bytes4",
		  "name": "interfaceId",
		  "internalType": "bytes4"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "symbol",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "totalSupply",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transfer",
	  "inputs": [
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "verify",
	  "inputs": [
		{
		  "type": "tuple",
		  "name": "_req",
		  "components": [
			{
			  "type": "address",
			  "name": "to",
			  "internalType": "address"
			},
			{
			  "type": "address",
			  "name": "primarySaleRecipient",
			  "internalType": "address"
			},
			{
			  "type": "uint256",
			  "name": "quantity",
			  "internalType": "uint256"
			},
			{
			  "type": "uint256",
			  "name": "price",
			  "internalType": "uint256"
			},
			{
			  "type": "address",
			  "name": "currency",
			  "internalType": "address"
			},
			{
			  "type": "uint128",
			  "name": "validityStartTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "uint128",
			  "name": "validityEndTimestamp",
			  "internalType": "uint128"
			},
			{
			  "type": "bytes32",
			  "name": "uid",
			  "internalType": "bytes32"
			}
		  ],
		  "internalType": "struct ITokenERC20.MintRequest"
		},
		{
		  "type": "bytes",
		  "name": "_signature",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		},
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	}
  ]

export const NFTAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

