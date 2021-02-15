import styled from 'styled-components';

export const Wallpaper = styled.div`
    display: block; 
    height: 100%; 
    left: 0;
    top: 0;
    width: 100%;
    background-image: url("./amsterdam.jpg"); background-position: center;
    background-size: cover;
    opacity: 0.1;
    position: fixed;
    z-index: 1;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0, 0.5, 0, 1); 
    animation-fill-mode: both;
    animation-name: zoomOut; 
    animation-timing-function: ease-out;

    @keyframes zoomOut {
        from {
            opacity: 0;
            transform: scale(1.05); 
        }
        to {
            opacity: 0.2; transform: scale(1);
        } 
    }
`;