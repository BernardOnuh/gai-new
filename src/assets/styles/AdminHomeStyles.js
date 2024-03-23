import styled from "styled-components";

const AdminHomeStyles = styled.section`
	width: 100vw;
	min-height: 100vh;
	background: var(--dark);
	color: var(--light-white);
	padding: 0 1.5rem;

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

	.admin-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 88%;
		margin: 5rem auto;

		&-form {
			padding: 1.5rem 2rem;
			background: var(--pitch-black);
			border-bottom: 0.1rem solid var(--light-white);

			form {
				display: flex;
				flex-direction: column;
				min-width: 50rem;
				padding: 2rem 0;

				h2 {
					text-transform: uppercase;
					font-size: 2rem;
					margin-bottom: 2.5rem;
					align-self: center;
				}

				label {
					display: inline-block;
					font-size: 1.5rem;
					font-weight: bold;
					letter-spacing: 0.1rem;
					margin-bottom: 0.8rem;
					cursor: pointer;
				}
			}

			.row-1,
			.row-2,
			.row-3,
			.row-4,
			.row-5 {
				display: flex;
				flex-direction: column;

				input,
				textarea {
					display: inline-block;
					margin-bottom: 1rem;
					color: var(--light-white);
					outline: none;
					background: linear-gradient(var(--pitch-black), var(--pitch-black))
							padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 3px solid transparent;

					&::placeholder {
						letter-spacing: 0.1rem;
					}
				}

				input {
					padding: 1.6rem 0.5rem;
					color: var(--light-white);
				}

				textarea {
					resize: none;
					min-height: 13rem;
					padding: 0.8rem;
					color: var(--light-white);
				}
			}

			.row-2,
			.row-6 {
				p {
					font-size: 1.4rem;
					margin-bottom: 1rem;
				}
			}

			.row-6 {
				input {
					display: inline-block;
					margin-right: 0.8rem;
					outline: none;
				}
			}

			button {
				display: inline-block;
				margin-top: 1.5rem;
				background: linear-gradient(
					to right,
					var(--green),
					var(--purple),
					var(--mid)
				);
				border: 0.1rem solid transparent;
				color: var(--light-white);
				padding: 1.5rem 0.5rem;
				border-radius: 3rem;
				cursor: pointer;
				font-size: 1.8rem;
				letter-spacing: 0.2rem;
				font-weight: bold;
			}
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 1100px) {
		padding-bottom: 4rem;

		.admin-container {
			flex-direction: column;
			margin: 5rem auto 0 auto;
			width: 100%;

			&-links {
				margin-bottom: 2rem;
				width: 70%;

				ul {
					width: 100%;
				}
			}

			&-form {
				width: 85%;

				form {
					min-width: 100%;

					.row-1,
					.row-2,
					.row-3,
					.row-4,
					.row-5,
					.row-6 {
						margin-bottom: 2rem;
					}
				}
			}
		}
	}

	@media screen and (max-width: 600px) {
		.admin-container {
			&-links {
				width: 90%;
			}

			&-form {
				width: 100%;
			}
		}
	}
`;

export default AdminHomeStyles;