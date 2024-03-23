import styled from 'styled-components';

const ConnectWalletStyles = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, 0%);
	width: 45vw;
	background: var(--dark-blue);
	padding: 2rem 0;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	color: var(--light-white);
	box-shadow: var(--shadow);
	z-index: 5;

	& > * {
		margin-bottom: 1.5rem;
	}

	.row-1,
	.row-2 {
		background: linear-gradient(var(--dark-blue), var(--dark-blue)) padding-box,
			linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
		border-bottom: 3px solid transparent;
	}

	.row-1,
	.row-2,
	.row-3 {
		width: 100%;
		padding: 1.5rem;
	}

	.box {
		width: 4rem;
		height: 4rem;
		background: var(--light-white);
		border-radius: 0.5rem;
		margin-right: 1rem;
		cursor: pointer;
	}

	.row-1 {
		display: flex;
		justify-content: space-between;

		.col-1 {
			display: flex;

			&-texts {
				h4 {
					font-size: 1.8rem;
					letter-spacing: 0.1rem;
					margin-bottom: 0.6rem;
				}

				p {
					font-size: 1.4rem;
				}
			}
		}

		.col-2 {
			width: 3rem;
			height: 3rem;
			border: 0.2rem solid var(--light-white);
			border-radius: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;

			i {
				font-size: 2rem;
				cursor: pointer;
			}
		}
	}

	.row-2 {
		.col-1 {
			width: fit-content;
			align-self: flex-start;
			display: flex;
			flex-direction: column;
			align-items: center;

			.box {
				margin-bottom: 0.8rem;
			}

			p {
				font-size: 1.4rem;
			}
		}
	}

	.row-3 {
		.col-1 {
			background: var(--grey);
			border-radius: 0.8rem;
			padding: 2rem 2rem 1rem 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			h4 {
				font-size: 1.8rem;
			}

			p {
				width: 80%;
				font-size: 1.4rem;
				margin-bottom: 1.5rem;
				text-align: center;
				margin-top: 0.6rem;
			}

			img {
				width: 15rem;
			}

			button {
				display: inline-block;
				background: var(--dark);
				border: 0.1rem solid var(--green);
				border-radius: 0.5rem;
				padding: 0.8rem 1.2rem;
				margin-top: 1.5rem;

				&:hover {
					background: transparent;
					transition: .4s ease;
				}

				a {
					text-decoration: none;
					font-size: 1.5rem;
					text-transform: lowercase;
					letter-spacing: 0.1rem;
					color: var(--green);
				}
			}
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 990px) {
		top: 10%;
		width: 60vw;
	}

	@media screen and (max-width: 650px) {
		top: 10%;
		width: 80vw;

		.row-1 {
			.col-1 {
				&-texts {
					h4 {
						font-size: 1.5rem;
					}

					p {
						font-size: 1.2rem;
					}
				}
			}

			.col-2 {
				width: 2rem;
				height: 2rem;

				i {
					font-size: 1.5rem;
				}
			}
		}

		.row-2 {
			.col-1 {
				p {
					font-size: 1.2rem;
				}
			}
		}

		.row-3 {
			.col-1 {
				h4 {
					font-size: 1.5rem;
				}

				p {
					width: 90%;
					font-size: 1.2rem;
				}

				img {
					width: 10rem;
				}
			}
		}
	}
`;

export default ConnectWalletStyles;
