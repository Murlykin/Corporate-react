import styled from '@emotion/styled';
export const Get = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -150px;
    height: 663px;
`
    ;

export const GetImg = styled.img`
    position: absolute;
    z-index: -1;
    margin: 0 0 0 -420px;
`
    ;
export const GetImg1 = styled.img`
    position: absolute;
    margin: 50px 0 0 -450px;
`
    ;
export const GetImg2 = styled.img`
    position: absolute;
    z-index: -1;
    margin: 280px 0 0 600px;
`
    ;
export const GetForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `
    ;

export const GetTitle = styled.h2`
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 1.3;
    letter-spacing: 0.02em;
    color: var(--texst-color);
`
    ;
export const GetP = styled.p`
    font-family: "Catamaran", sans-serif;
    margin: 10px 0 100px 0;
    font-size: 18px;
    line-height: 1.66;
    color: var(--texst-color);
`
    ;
export const GetEmail = styled.input`
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    width: 384px;
    height: 63px;
    padding-left: 15px;
`
    ;

export const GetButton = styled.button`
    font-family: "Catamaran", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.66;
    color: #ffffff;
    background-color: #d22238;
    border-radius: 10px;
    width: 143px;
    height: 63px;
    border: 1px solid #d22238;
    margin-right: 20px;

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

`
    ;

export const GetForms = styled.form`
    display: flex;
    gap: 5px;
`
    ;