import styled from "styled-components";

const AdminFeeStyles = styled.section`
	width: 100vw;
	min-height: 100vh;
	background: var(--dark);
	color: var(--light-white);
	padding: 0 1.5rem 4rem 1.5rem;

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
		margin: 5rem auto 0 auto;

		button {
			display: inline-block;
			margin-top: 1.5rem;
			margin-bottom: 10rem;
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
					font-weight: 300;
					letter-spacing: 0.1rem;
					margin-bottom: 0.8rem;
					cursor: pointer;
				}

				.row-1,
				.row-2, .row-3, .row-4, .row-5 {
					margin-bottom: 2rem;

					&-title {
						background: linear-gradient(var(--pitch-black), var(--pitch-black))
								padding-box,
							linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
						border-bottom: 3px solid transparent;
						padding-left: 1.5rem;
						padding-bottom: 1rem;
						margin-bottom: 1.4rem;

						h4 {
							text-align: start;
							text-transform: uppercase;
							letter-spacing: normal.2rem;
							font-size: 1.6rem;
						}
					}

					&-input {
						display: flex;
						flex-direction: column;
						gap: 2rem;

						&-1,
						&-2,
						&-3 {
							display: flex;
							flex-direction: column;

							input {
								background: linear-gradient(
											var(--pitch-black),
											var(--pitch-black)
										)
										padding-box,
									linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
								border: 3px solid transparent;
								outline: none;
								padding: 1.2rem 0rem 1.2rem 0.8rem;
								color: var(--light-white);
							}

              p {
                font-size: 1.4rem;
                margin-top: .5rem;
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
						background: linear-gradient(
							to right,
							var(--green),
							var(--purple),
							var(--mid)
						);
						border: transparent;
						border-radius: 3rem;
					}
				}
			}
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 1100px) {
		.admin-container {
			flex-direction: column;
			width: 100%;

			&-links {
				margin-bottom: 6rem;
				width: 70%;
			}

			&-form {
				width: 85%;

				form {
					min-width: 100%;
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

	@media screen and (max-width: 500px) {
		.admin-container {
			&-form {
				form {
					.row-1,
					.row-2, .row-3, .row-4, .row-5 {
						button {
							padding: 1rem 3rem;
						}
					}
				}
			}
		}
	}
`;

export default AdminFeeStyles;