import styled from 'styled-components';

const AdminRaffleStyles = styled.section`
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

	.raffle-list {
		width: 90%;
		margin: 6rem auto 0 auto;
		overflow: hidden;

		.image-card {
			width: calc(30rem + 3vw) !important;
			height: auto !important;
			flex-shrink: 0;

			.card-item {
				width: 100%;
				height: calc(45rem + 5vw);
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				img {
					width: 100%;
					height: 80%;
					object-fit: cover;
					object-position: left;
					user-select: none;
				}

				p,a {
					background: #c724b1;
					height: 10%;
					text-align: center;
					font-size: 2.5rem;
					line-height: 5rem;
				}

				a {
						text-decoration: none;
						background: var(--light-white);
						color: var(--dark);
						font-weight: bold;
						text-transform: capitalize;
						display: flex;
						justify-content: center;
						align-items: center;

						i {
							margin-left: 1.5rem ;
							cursor: pointer;
							font-size: 2.8rem;
						}
					}
				}
			}
		}

	.raffle-form {
		width: 100%;
		margin: 5rem auto 0 auto;
		background: rgba(221, 255, 247, 0.05);
		border-bottom: 0.1rem solid #ddfff7;
		backdrop-filter: blur(25px);
		padding: 2.5rem 1.5rem 5rem 1.5rem;
		display: flex;
		flex-direction: column;

		form {
			display: flex;
			flex-direction: column;

			h4 {
				text-transform: uppercase;
				font-size: 2.5rem;
				letter-spacing: 0.1rem;
				margin-bottom: 2rem;
				text-align: center;
			}

			.row-1,
			.row-2,
			.row-3,
			.row-4,
			.row-5,
			.row-6 {
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-bottom: 2.5rem;

				label {
					display: inline-block;
					font-size: 1.6rem;
					font-weight: 300;
					letter-spacing: 0.1rem;
					margin-bottom: 1rem;
					cursor: pointer;
				}

				input {
					outline: none;
					padding: 1.6rem 0rem 1.6rem 1rem;
					background: linear-gradient(var(--pitch-black), var(--pitch-black))
							padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 3px solid transparent;
					color: var(--light-white);
					font-size: 1.8rem;

					&::placeholder {
						color: #ccc;
						font-size: 1.6rem;
						letter-spacing: 0.1rem;
					}
				}
			}

			button {
				display: inline-block;
				margin-top: 1rem;
				align-self: center;
				padding: 1rem 3rem;
				color: var(--light-white);
				text-transform: uppercase;
				font-size: 2rem;
				font-weight: 500;
				letter-spacing: 0.1rem;
				background: linear-gradient(
					to right,
					var(--green),
					var(--purple),
					var(--mid)
				);
				border: transparent;
				border-radius: 2rem;
				cursor: pointer;
			}
		}

		.doodle {
			align-self: center;
			margin-top: 3rem;
			width: 40rem;
			height: 40rem;
			object-fit: cover;
		}
	}
`;

export default AdminRaffleStyles;
