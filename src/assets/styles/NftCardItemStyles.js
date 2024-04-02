import styled from "styled-components";

const ExploreCardStyles = styled.article`
	width: calc(35rem + 1vw);
	height: fit-content;
	background: var(--pitch-black);
	padding: 2rem 1.4rem;
	text-align: center;
	position: relative;
	z-index: 5;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 20%;
		background: #fff;
		background: linear-gradient(var(--pitch-black), var(--pitch-black))
				padding-box,
			linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
		border-top: 4px solid transparent;
		border-left: 4px solid transparent;
		filter: blur(0.8px);
		z-index: -1;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 50%;
		height: 20%;
		background: #fff;
		background: linear-gradient(var(--pitch-black), var(--pitch-black))
				padding-box,
			linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
		border-bottom: 4px solid transparent;
		border-right: 4px solid transparent;
		filter: blur(0.8px);
		z-index: -1;
	}

	img {
		width: 100%;
		object-fit: cover;
		margin-bottom: 1.5rem;
	}

	h2 {
		text-transform: uppercase;
		font-size: calc(1.2rem + 1vw);

		&:nth-of-type(1) {
			margin-bottom: 1.5rem;
		}
	}

	a {
		display: inline-block;
		margin-top: 2rem;
		text-decoration: none;
		color: var(--green);
		font-size: calc(.5rem + 1vw);
		letter-spacing: .1rem;
		border: .1rem solid var(--dark);
		padding: .8rem 1.2rem;
		background: var(--dark);
		text-transform: uppercase;
		cursor: pointer;

		&:hover {
			background: transparent;
			transition: .4s ease;
		}
	}

	/* RESPONSIVENESS */
	/* @media screen and (max-width: 768px) {
    
  } */
`;

export default ExploreCardStyles;