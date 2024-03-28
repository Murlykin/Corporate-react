import styled from '@emotion/styled';

export const Button = styled.div`

    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.02em;
    color: var(--body-background-color);
    background-color: #d22238;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    border: 1px solid #d22238;
    margin-right: -50px;
    padding: 6px 0;
    text-align: center;
    &:focus {
        background-color: #f4596b;
        border: 1px solid #f4596b;
        transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        }
    
        &:hover {
        background-color: #f4596b;
    border: 1px solid #f4596b;
    transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        }    
;
`
;

export const ButtonUp = styled.img`
    background-color: #d22238;
    innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
    ;
    Color: #d22238;
    fill: #d22238;
        &:focus {
        background-color: #f4596b;
        border: 1px solid #f4596b;
        transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        }
    
        &:hover {
        background-color: #f4596b;
    border: 1px solid #f4596b;
    transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        }    
;
`
;


