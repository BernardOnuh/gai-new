import styled from 'styled-components';

const ExploreNftStyles = styled.section`
	min-height: 100vh;
	width: 100vw;
	background: var(--dark);
	color: var(--light-white);

	.explore-container {
		width: 70%;
		margin: 0 auto;
		padding: 3rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		.explore-header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			margin-bottom: 4rem;

			button {
				display: inline-block;
				border-radius: 2rem;
				margin-bottom: 1.5rem;
				text-transform: uppercase;
				font-size: calc(0.6rem + 1vw);
				font-weight: 600;
				letter-spacing: 0.1rem;
				cursor: pointer;

				&:nth-child(1) {
					position: relative;
					background: linear-gradient(
						to right,
						var(--green),
						var(--purple),
						var(--mid)
					);
					padding: 2rem;
					border: 2px solid transparent;

					p {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						color: var(--dark);
					}

					&:hover {
						background: linear-gradient(black, black) padding-box,
							linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
						border: 2px solid transparent;
						transition: 1s ease-out;

						p {
							background: linear-gradient(
								to right,
								var(--green),
								var(--purple),
								var(--green)
							);
							-webkit-text-fill-color: transparent;
							background-clip: text;
						}
					}
				}

				&:nth-child(2) {
					position: relative;
					padding: 2rem 0;
					background: linear-gradient(black, black) padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 2px solid transparent;

					p {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--green)
						);
						-webkit-text-fill-color: transparent;
						background-clip: text;
					}

					&:hover {
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--mid)
						);
						color: var(--dark);
						border: 2px solid transparent;
						transition: background 0.4s ease-out;
					}
				}
			}

			.input-actions {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.search,
				.sort {
					width: 48%;
					height: 5.5rem;
					background: linear-gradient(black, black) padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 2px solid transparent;
					border-radius: 3rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.search {
					padding: 0rem 1rem;

					input {
						display: inline-block;
						height: 100%;
						background: transparent;
						border-radius: inherit;
						width: 80%;
						border: none;
						outline: none;
						color: var(--light-white);

						&::placeholder {
							background: linear-gradient(
								to right,
								var(--green),
								var(--purple),
								var(--green)
							);
							-webkit-text-fill-color: transparent;
							background-clip: text;
							text-transform: uppercase;
							font-size: calc(1rem + 1vw);
							letter-spacing: 0.2rem;
							opacity: 0.8;
						}
					}

					i {
						font-size: calc(1.2rem + 1vw);
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--green)
						);
						-webkit-text-fill-color: transparent;
						background-clip: text;
						cursor: pointer;
					}
				}

				.sort {
					padding: 0 1rem;

					p {
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--green)
						);
						-webkit-text-fill-color: transparent;
						background-clip: text;
						text-transform: uppercase;
						font-size: calc(1rem + 1vw);
						letter-spacing: 0.2rem;
					}

					i {
						font-size: calc(1.2rem + 1vw);
						transform: rotate(180deg);
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--green)
						);
						-webkit-text-fill-color: transparent;
						background-clip: text;
						cursor: pointer;
					}
				}
			}
		}

		.explore-cardlist {
			margin-top: 3rem;
			padding: 0 2rem;
			width: calc(80% + 1vw);
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 6rem;
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 768px) {
		.explore-container {
			width: 95%;
			.explore-header {
				button {
					&:nth-child(1) {
						p {
							color: var(--pitch-black);
						}

						&:hover {
							p {
								color: var(--green);
								background: none;
								-webkit-text-fill-color: var(--green);
							}
						}
					}

					&:nth-child(2) {
						p {
							background: none;
							color: var(--green);
							-webkit-text-fill-color: var(--green);
						}
					}
				}

				.input-actions {
					flex-direction: column;
					gap: 1.5rem;

					.search, .sort {
						width: 20rem;
						border-radius: 5rem;
						height: 4.5rem;
					}
					.search {
						input {
							&::placeholder {
								background: none;
								-webkit-text-fill-color: var(--green);
								font-size: 1.2rem;
							}
						}

						i {
							background: none;
							-webkit-text-fill-color: var(--green);
							font-size: 1.2rem;
						}
					}

					.sort {
						p,
						i {
							background: none;
							-webkit-text-fill-color: var(--green);
							font-size: 1.2rem;
						}
					}
				}
			}

			.explore-cardlist {
				width: 100%;
			}
		}
	}
`;

export default ExploreNftStyles;
