import styled from 'styled-components';

const NavbarStyles = styled.nav`
	width: 100vw;
	position: static;
	top: 0;
	left: 0;
	height: 8rem;
	z-index: 5;
	bac 
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 0.15rem solid var(--light-white);
	z-index: 50;

	.nav-center {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo-link img {
			width: 5rem;
			height: 5rem;
			object-fit: cover;
		}

		button {
			color: var(--light-white);
			background: linear-gradient(black, black) padding-box,
				linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
			border-radius: 5rem;
			border: 2px solid transparent;
			padding: 1rem 3rem;
			text-transform: uppercase;
			letter-spacing: 0.3rem;
			cursor: pointer;
			transform: scale(1);

			&:hover {
				transform: scale(1.05);
				transition: transform 0.4s ease;
			}
		}

		.navbar {
			width: 3rem;
			height: 3rem;

			i {
				display: inline-block;
				font-size: 3rem;
				color: #fff;
				cursor: pointer;
			}
		}
	}

	.navlist {
		position: fixed;
		top: 0%;
		left: 100%;
		width: 100%;
		height: 100vh;
		background: var(--dark-blue);
		z-index: 100;
		padding: 10rem 5rem;
		list-style-type: none;
		transition: left 0.4s ease-in;

		&-show {
			top: 0%;
			left: 0%;
		}

		.fa-times {
			display: inline-block;
			position: absolute;
			top: 2%;
			right: 5%;
			color: var(--light-white);
			font-size: 4rem;
			cursor: pointer;
		}

		li {
			margin-bottom: 3.5rem;

			&:hover {
				border-left: 0.6rem solid var(--green);
				transition: 0.2s ease;
			}

			a {
				display: inline-block;
				text-decoration: none;
				color: var(--light-white);
				text-transform: uppercase;
				font-size: calc(1.4rem + 1vw);
				font-weight: 500;
				letter-spacing: 0.1rem;
				width: 100%;
				padding: 1.5rem 1rem;
			}
		}

		:nth-child(4) {
			width: fit-content;
			display: flex;
			align-items: center;

			i {
				display: inline-block;
				font-size: 2rem;
				color: var(--light-white);
				margin-left: 2rem;
				cursor: pointer;
			}
		}

		p {
			color: var(--light-white);
			font-size: calc(1rem + 1vw);
			margin-bottom: 3.5rem;
			margin-left: 3rem;
			cursor: pointer;

			&:hover {
				color: var(--purple);
				transition: 0.4s ease;
			}
		}

		.soon {
			width: fit-content;
			display: flex;
			align-items: center;

			button {
				display: inline-block;
				margin-left: 2rem;
				background: transparent;
				color: var(--light-white);
				background: linear-gradient(black, black) padding-box,
					linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
				border-radius: 2rem;
				border: 2px solid transparent;
				padding: 0.8rem 2rem;
				text-transform: uppercase;
				font-size: calc(0.4rem + 1vw);
				letter-spacing: 0.3rem;
			}
		}
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 990px) {
		.nav-center {
			.logo-link img {
				width: 3rem;
				height: 3rem;
			}
			button {
				font-size: 1.2rem;
				padding: 1rem 1.5rem;
			}

			.navbar {
				width: 2rem;
				height: 2rem;

				i {
					font-size: 2rem;
				}
			}
		}
	}
`;

export default NavbarStyles;
