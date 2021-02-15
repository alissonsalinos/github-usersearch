import styled from 'styled-components';

export const SearchWrapper = styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 30px auto;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0, 0.5, 0, 1); 
    animation-fill-mode: both;
    animation-name: slideUp;
    animation-delay: 1200ms;
    justify-content: center;

    input, button {
        font-family: 'Quicksand', sans-serif;
        font-size: .9em;
        padding: 5px;
    }

    small {
        width: 100%;
        padding-left: 102px;
        font-size: .7em;
    }

    button {
        cursor: pointer;
        border-radius: 290486px;
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2); color: #9013fe;
        display: inline-block;
        background: white;
        line-height: 1;
        padding: .85em 1em;
        text-shadow: none;
        transition-property: box-shadow, transform; user-select: none;
        vertical-align: top;
        white-space: nowrap;
        will-change: box-shadow, transform;
        transform-origin: center;
        transition-duration: 100ms;
        text-decoration: none;
        border: none;
        &:hover,
        &:focus {
            box-shadow: 0 .8rem .8rem rgba(0, 0, 0, 0.2); transform: scale(.94);
            border: 0 transparent 0 transparent 1px solid #ffffff 0 transparent;
            outline-color: transparent;
            outline: 0!important;
        }
    }

    input#search {
        background-color: transparent;
        border-top: 0;
        border-bottom: 1px solid #ffffff;
        border-left-color: transparent;
        border-right-color: transparent;
        color: #ffffff;
        width: 200px;
        margin-right: 15px;
        &:focus {
            border: 0 transparent 0 transparent 1px solid #ffffff 0 transparent;
            outline-color: transparent
        }
        &::placeholder {
            color: rgba(255,255,255,.7);
        }
    }

    input.focus-visible,
    button.focus-visible {
        border: 0 0 1px solid #ffffff 0;
        outline-color: transparent;
        outline-width: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #fff !important;   
    }

    @media (min-width: 554px) {
         li {
            display: inline-block;
            margin-bottom: 0px;
        }
    }

    @media (max-width: 322px) {
        input#search {
            width: 112px!important;
        }
    }

    @media (max-width: 866px) {
        small {
            padding-left: 12%;
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