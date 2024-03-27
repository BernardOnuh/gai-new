// FooterStyles.js

import styled from 'styled-components';

const FooterStyles = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: var(--pitch-black);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;

    .social-links {
        display: flex;
        align-items: center;

        a {
            margin-right: 1.5rem;
            color: var(--light-white);
            font-size: 2rem;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
                color: var(--green);
            }
        }
    }
`;

export default FooterStyles;
