import styled from "styled-components";

const ErrorPageStyles = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: var(--clr-primary-10);
	text-align: center;

	h1 {
		font-size: 10rem;
	}

	h3 {
		font-size: 4rem;
		color: var(--clr-grey-3);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.btn {
		font-size: 3rem;
		letter-spacing: .1rem;
	}
`;

export default ErrorPageStyles;