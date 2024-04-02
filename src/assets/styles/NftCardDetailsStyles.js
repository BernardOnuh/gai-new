import styled from "styled-components";

const NftCardDetailsStyles = styled.section`
	position: relative;
	width: 100vw;
	min-height: 100vh;
	background: var(--dark);
	color: var(--light-white);
	position: relative;
	padding-bottom: 5rem;

	.centered-buttons {
		display: flex;
		justify-content: center; /* Horizontally center the buttons */
		margin-top: 20px; /* Adjust margin-top as needed */
	}
	
	.rounded-button {
		border-radius: 20px;
		background-color: #007bff; /* Example background color */
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		margin: 5px; /* Adjust margin as needed */
	}
	
	.rounded-button:hover {
		background-color: #0056b3; /* Example hover background color */
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
				padding: 1.5rem 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1.4rem;

				p {
					font-size: 1.8rem;
				}

				button {
					border: none;
					background: transparent;

					a {
						text-decoration: none;
						font-size: 1.6rem;
						color: var(--purple);
						cursor: pointer;
						letter-spacing: 0.1rem;
					}
				}
			}
		}
	}
	button {
		align-self: center;
		color: var(--light-white);
		text-transform: uppercase;
		letter-spacing: normal.2rem;
		font-weight: bold;
		padding: 1.5rem 5rem;
		background:linear-gradient(
			to right,
			var(--green),
			var(--purple),
			var(--mid)
		) ;
		border: transparent;
		border-radius: 3rem;
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

	@media screen and (max-width: 950px) {
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

export default NftCardDetailsStyles;