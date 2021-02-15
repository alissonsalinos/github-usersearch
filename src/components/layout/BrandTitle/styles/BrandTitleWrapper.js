import styled from 'styled-components';

export const BrandTitleWrapper = styled.div`
    animation-fill-mode: both;
    animation-duration: 750ms;
    animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.25);
    animation-delay: 500ms;
    animation-name: brandTitle;
    

    a.brandlogo {
        color: white!important;
        text-decoration: none;
        transform-origin: center;
        transition-duration: 100ms;
        text-decoration: none;
        box-shadow: 0 .4rem .6rem rgba(0, 0, 0, 0.2); color: #9013fe;
        &:hover,
        &:focus {
            box-shadow: 0 .7rem .8rem rgba(0, 0, 0, 0.2); transform: scale(1.02) translateY(-1px);
        }
        &:active {
            box-shadow: 0 0.5rem .5rem rgba(0, 0, 0, 0.3); transform: scale(0.98) translateY(-1px);
        }
    }

    @keyframes brandTitle {
        from {
            opacity: 0;
            transform: scale(1.2) translateY(-1rem); 
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        } 
    }
`;