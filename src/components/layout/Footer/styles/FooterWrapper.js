import styled from 'styled-components';

export const FooterWrapper = styled.div`
    text-align: center;
    margin: 20px auto;
    z-index: 999;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;