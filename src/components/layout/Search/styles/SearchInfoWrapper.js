import styled from 'styled-components';

export const SearchInfoWrapper = styled.div`
        display: flex;
        max-width: 530px;
        padding: 15px 45px;
        background: rgba(255,255,255, .15);
        border-radius: 30px;
        margin: 55px auto 0 auto;
        animation-duration: 1.2s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1); 
        animation-fill-mode: both;
        animation-name: slideUp;
        animation-delay: 300ms;
    
    #result__base {
        display: flex;
        flex-direction: column
    }
    
    @media (min-width: 590px) {
        #result__base {
            flex-direction: row;
        }
    }

    .result__image {
        text-align: center;
    }

    .result__image img {
        border-radius: 50%;
        height: 180px;
        width: 180px;
        border: 2px solid;
        border-color: rgba(255,255,255 0.3);
    }  

    .result__info h2 {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 1em;
        background-color: rgba(255,255,255, 1);
        width: fit-content;
        padding: 0 8px;
        color: #9013fe;
        border-radius: 6px;
        font-weight: 300;
    }

    .result__info ul {
        padding: 5px 0 0 5px;
        margin-top: 5px;
    }

    .result__info li {
        list-style: none;
        margin-bottom:5px;
        font-size: .89em;
    }

    .result__info li label {
        font-weight: bold;
    }

    .result__info li a {
        color: currentColor;
        text-decoration: none
    }

    .result__info li a:hover {
        background: white;
        color: #9013fe;
        text-decoration: none
    }

    .result__image,
    .result__info {
        flex: 1;
    }
`;