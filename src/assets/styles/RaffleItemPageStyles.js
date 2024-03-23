import styled from 'styled-components';

const RaffleItemPageStyles = styled.section`
	width: 100vw;
	min-height: 100vh;
	background: var(--dark);
	color: var(--light-white);

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

	.raffle-item {
		width: 90%;
		margin: 3rem auto 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;

		.row-1 {
			margin-bottom: 3rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			&-content-1 {
				display: flex;
				align-items: center;
				margin-bottom: 1.5rem;

				&-image {
					width: 4rem;
					height: 4rem;
					padding: 1.5rem;
					background: var(--grey);
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 1rem;

					img {
						width: 2.5rem;
						height: 2.5rem;
						object-fit: cover;
					}
				}

				h2 {
					margin-left: 1.5rem;
					font-size: 1.8rem;
				}
			}

			&-content-2 {
				width: 40rem;
				height: 40rem;
				background: linear-gradient(var(--dark), var(--dark)) padding-box,
					linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
				border: 3px solid transparent;
				border-radius: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.row-2 {
			width: 80%;
			margin: 2rem auto;
			background: linear-gradient(var(--grey), var(--grey)) padding-box,
				linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
			border-top: 3px solid transparent;
			padding: 4rem;
			text-align: center;

			&-content-1 {
				display: flex;
				flex-direction: column;
				align-items: center;
				h4 {
					font-size: 1.6rem;
				}

				p {
					display: inline-block;
					word-wrap: break-word;
					margin: 2rem auto 3.5rem auto;
					font-size: 1.4rem;
					width: 80%;
				}

				button {
					background: transparent;
					color: var(--green);
					border: none;
					padding: 1rem 1.5rem;
					box-shadow: rgba(187, 187, 187, 0.25) 0px 2px 5px -1px,
						rgba(156, 156, 156, 0.3) 0px 1px 3px -1px;
					cursor: pointer;
				}
			}
		}

		.row-3 {
			width: 80%;
			margin: 2rem auto;
			background: linear-gradient(var(--grey), var(--grey)) padding-box,
				linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
			border-top: 3px solid transparent;
			padding: 2rem;

			&-content {
				margin-bottom: 1.5rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				p {
					font-size: 1.5rem;

					&.para-two {
						color: var(--purple);
					}
				}
			}
		}
	}

	// RESPONSIVENESS
	@media screen and (max-width: 600px) {
		.raffle-item {
			width: 100%;

			.row-1 {
				&-content-2 {
					width: 80vw;
					height: 40vh;
				}
			}

			.row-2,
			.row-3 {
				width: 90%;
			}
		}
	}
`;

export default RaffleItemPageStyles;
