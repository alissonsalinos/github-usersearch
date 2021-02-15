import styled from 'styled-components';

export const HistoryWrapper = styled.div`
        display: flex;
        flex-direction: column;
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

    .history__title {
        display:block;
        width: 100%
    }
    
    h2 {
        font-size: 1em;

    }

    #history__data li {
        list-style: none;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px
        
    }

    #history__data li:last-of-type {
        margin-right: 0;
    }

    #history__data li a {
        background: white;
        border-radius: 29px;
        padding: 3px 20px;
        display: block;
        color: #9013fe;
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
    
`;