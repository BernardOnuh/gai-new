import styled from 'styled-components';

const NftCardConnectedStyles = styled.section`
	position: relative;
	width: 100vw;
	min-height: 100vh;
	background: var(--dark);
	color: var(--light-white);
	position: relative;
	padding-bottom: 5rem;

	nav {
		.nav-center {
			button {
				padding: 0.7rem 0.5rem;
				display: flex;
				align-items: center;
				gap: 0.5rem;

				p,
				span {
					font-size: 1rem;
					text-transform: capitalize;
				}

				span {
					background: linear-gradient(
						to right,
						var(--green),
						var(--purple),
						var(--mid)
					);
					padding: 0.5rem 1rem;
					border-radius: 1rem;
					cursor: pointer;
				}
			}
		}
	}

	.card-container {
		width: 90%;
		margin: 3rem auto 0 auto;
		padding: 2rem;
		background: linear-gradient(black, black) padding-box,
			linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
		border: 3px solid transparent;
		border-radius: 3rem;
		display: flex;
		justify-content: center;
		gap: 5rem;

		&-image {
			background: var(--pitch-black);
			text-align: center;
			padding: 1.5rem;
			align-self: center;

			img {
				width: 40rem;
				margin-bottom: 1.5rem;
			}

			h2 {
				font-size: 2rem;
				font-weight: 700;
				text-transform: capitalize;

				span {
					text-transform: uppercase;
				}
			}
		}

		&-texts {
			width: 50%;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 4rem;

			.row-1 {
				width: 100%;
				display: flex;
				justify-content: space-between;

				p {
					font-size: 1.8rem;
				}

				.para-two {
					color: var(--purple);
				}
			}

			.row-2 {
				display: flex;
				flex-direction: column;
				gap: 1.4rem;

				h5 {
					font-size: 1.8rem;
				}

				.input-box {
					display: flex;
					gap: 1.5rem;

					input {
						width: 3rem;
						height: 3rem;
						border-radius: 0.5rem;
						border: none;
						outline: none;
					}
				}
			}

			.row-3,
			.row-4 {
				width: 100%;
				display: flex;
				justify-content: space-between;

				p {
					font-size: 1.8rem;
				}

				.para-two {
					color: var(--purple);
				}
			}

			.row-5 {
				width: 100%;
				padding-bottom: 1rem;
				background: linear-gradient(black, black) padding-box,
					linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
				border-bottom: 3px solid transparent;
				p {
					font-size: 1.5rem;
					text-align: center;
				}
			}

			.row-6 {
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding-bottom: 3rem;
				background: linear-gradient(black, black) padding-box,
					linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
				border-bottom: 3px solid transparent;

				input,
				button {
					height: 4rem;
				}

				input {
					width: 48%;
					background: linear-gradient(black, black) padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 2px solid transparent;
					border-radius: 0.8rem;
					color: var(--light-white);
					outline: none;
					padding-left: .5rem;
				}

				button {
					width: 40%;
					min-width: fit-content;
					color: var(--light-white);
					text-transform: uppercase;
					font-size: 2rem;
					font-weight: 500;
					letter-spacing: 0.1rem;
					padding: 0 1rem;
					background: linear-gradient(
						to right,
						var(--green),
						var(--purple),
						var(--mid)
					);
					border: 0;
					border-radius: 2rem;
					cursor: pointer;
				}
			}

			.row-7 {
				align-self: center;
				padding: 1rem;
				display: flex;

				& > *:not(:last-child) {
					margin-right: 1.5rem;
				}

				button {
					padding: 1.8rem 3rem;
					border-radius: 3rem;
					font-size: 2rem;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
					color: var(--light-white);
					cursor: pointer;

					&:nth-child(1),
					&:nth-child(3) {
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--mid)
						);
						border: 0;
					}

					&:nth-child(2) {
						background: linear-gradient(black, black) padding-box,
							linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
						border: 2px solid transparent;
						border-radius: 3rem;
					}
				}
			}

			.row-8,
			.row-9 {
				width: 100%;
				display: flex;
				justify-content: space-between;

				p {
					font-size: 2rem;
					letter-spacing: 0.1rem;
				}

				.para-two {
					color: var(--purple);
				}
			}
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 1200px) {
		.card-container {
			gap: 3rem;
			&-image {
				img {
					width: 35rem;
				}
			}
		}
	}

	@media screen and (max-width: 1050px) {
		.card-container {
			flex-direction: column;
			align-items: center;

			&-image,
			&-texts {
				width: 90%;
			}

			&-texts {
				.row-2 {
					align-self: center;
					align-items: center;

					h5 {
						font-weight: 300;
					}
				}
			}
		}
	}

	@media screen and (max-width: 700px) {
		.card-container {
			&-texts {
				.row-6 {
					flex-direction: column;
					justify-content: center;
					align-items: center;

					input {
						display: inline-block;
						margin-bottom: 1.5rem;
						width: 60%;
					}

					button {
						width: 60%;
						font-size: 1.8rem;
					}
				}

				.row-7 {
					button {
						padding: .8rem 1.5rem;
						font-size: 1.6rem;
					}
				}
			}
		}
	}

	@media screen and (max-width: 550px) {
		.card-container {
			width: 95%;
			border-radius: 1rem;
			padding: 2rem 1rem;

			&-image {
				img {
					width: 70vw;
				}

				h2 {
					font-size: 1.5rem;
				}
			}

			&-texts {
				.row-1 p,
				.row-2 h5,
				.row-3 p,
				.row-4 p,
				.row-6 p {
					font-size: 1.4rem;
				}

				.row-6 button a {
					font-size: 1.5rem;
				}
			}
		}
	}
`;

export default NftCardConnectedStyles;
