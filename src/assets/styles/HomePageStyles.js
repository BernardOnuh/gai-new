import styled from 'styled-components';

const HomePageStyles = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: var(--dark);

	.showcase {
		min-height: 80vh;
		margin-top: 8rem;
		color: var(--light-white);
		display: flex;
		justify-content: center;

		.showcase-center {
			padding: 5rem;
			text-align: center;

			.header-one h2,
			.header-two h2 {
				font-size: calc(3.5rem + 1vw);
			}

			.header-one {
				margin-bottom: 7rem;
				margin-top: -5rem;
				position: relative;
				z-index: 5;

				h2 {
					position: relative;
				}

				h2 span {
					color: var(--purple);
				}

				p {
					margin-top: 0.8rem;
					font-size: calc(0.8rem + 1vw);
					font-weight: 400;
					letter-spacing: 0.1rem;
				}

				img {
					width: 12rem;
					filter: blur(2px);
					position: absolute;
					top: 50%;
					left: 0%;
					transform: translate(10%, -50%);
					z-index: -1;
				}
			}


			.header-two {
				h6 {
					font-size: calc(0.5rem + 1vw);
					text-transform: uppercase;
					font-weight: 500;
					letter-spacing: 0.1rem;
					color: var(--purple);
				}

				h2 {
					text-transform: uppercase;
					margin: 1.5rem 0;
					letter-spacing: 0.1rem;
				}

				button {
					padding: 1rem 2rem;
					border-radius: 5rem;
					color: var(--light-white);
					background: linear-gradient(black, black) padding-box,
						linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
					border: 2px solid transparent;
          text-transform: uppercase;
					cursor: pointer;
					margin-bottom: 7rem;
					margin-left:1.5rem;
				}
			}
		}
	}
`;

export default HomePageStyles;
