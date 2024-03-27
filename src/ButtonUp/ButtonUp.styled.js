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
