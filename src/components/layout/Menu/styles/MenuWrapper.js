import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 0 28px!important;
//  border-top: 1px solid currentColor;
//  border-bottom: 1px solid currentColor;
  padding: 12px;
  z-index: 999;
  position: relative;
  animation-duration: 1.2s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1); 
        animation-fill-mode: both;
        animation-name: slideUp;
        animation-delay: 900ms;
    a {
        background-color: rgba(255,255,255,.9);
        border-radius: 290486px;
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2); color: #9013fe;
        display: inline-block;
        font-size: 1.03rem;
        line-height: 1;
        padding: .85em 3em;
        text-shadow: none;
        transition-property: box-shadow, transform; user-select: none;
        vertical-align: top;
        white-space: nowrap;
        will-change: box-shadow, transform;
        transform-origin: center;
        transition-duration: 100ms;
        text-decoration: none;
        &:hover,
        &:focus {
            box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.2); transform: scale(1.02) translateY(-4px);
        }
        &:active {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); transform: scale(0.98) translateY(-2px);
        }
    }

    @media (min-width: 554px) {
         li {
            display: inline-block;
            margin-bottom: 0px;
        }
    }

    li {
        list-style: none;
        display: block;
        margin-bottom: 15px;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(1rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        } 
    }
`;