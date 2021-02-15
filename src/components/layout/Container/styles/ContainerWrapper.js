import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    width: 100%;
    padding: 10px 15px;
    display: block;
    position: relative;
    z-index: 998;
    height: fit-content;
    margin: 0 auto;


    @media(min-width: 768px) {
        width: 60%
    }
`;