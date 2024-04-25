import styled from "styled-components";

const AdminLinkStyles = styled.ul`
	list-style: none;
	width: 35rem;
	position: relative;
	z-index: 5;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: blur(5px);
		z-index: -1;
		opacity: 0.7;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	li:not(:last-of-type) {
		margin-bottom: 2.5rem;
	}

	li {
		width: 100%;
		background: var(--grey);
		padding: 1.5rem 0;
		background: linear-gradient(var(--grey), var(--grey)) padding-box,
			linear-gradient(90deg, #00ff00, #0023de, #ff00dd) border-box;
		border: 3px solid transparent;
		opacity: 0.8;
		text-align: center;
	}

	li a {
		text-decoration: none;
		color: var(--light-white);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-size: 1.8rem;
		font-weight: 400;
	}

	/* RESPONSIVENESS */
	@media screen and (max-width: 1100px) {
		margin-bottom: 6rem;
		width: 100%;
	}
`;

export default AdminLinkStyles;