import styled from '@emotion/styled';

export const Header= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
;

export const Logo = styled.svg`
    width: 240px;
    height: 35px;
    fill: var(--texst-color);
    margin-left: -50px;
`
    ;


export const BackHead= styled.div`
    display: flex;
    position: absolute;
    z-index: -15;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
    margin-top: 300px;
`
    ;
export const BackHeadLeft= styled.div`
    display: flex;
    position: relative;
    z-index: -16;
    gap: 50px;
    margin-left: -350px;
`
    ;

export const BackHeadLeftImg1 = styled.img`
    width: 60px;
    height: 120px;
`
    ;

export const BackHeadLeftImg2 = styled.img`
    width: 60px;
    height: 60px;
    margin-top: 250px;
`
    ;

export const BackHeadRight= styled.div`
    display: flex;
    position: relative;
    z-index: -17;
`
    ;

export const BackHeadRightImg5= styled.img`
    transform: translate(0px, 350%);
    position: relative;
    z-index: +30;
`
    ;

 export const BackHeadRightPosition= styled.div`
    display: flex;
    transform: translate(200px, 50%);
    gap: 100px;
`
;

export const BackHeadRightImg3= styled.img`
    width: 180px;
    height: 80px;
    transform: translate(230px, 70%);
`
    ;
export const BackHeadRightImg4= styled.img`
    height: 120px;
    transform: translate(100px, 120%);
`
    ;
export const BackHeadRightImg6= styled.img`
    transform: translate(40px, -10%);
`
    ;