
import styled from '@emotion/styled';
export const About = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`
    ;

export const AboutBody = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
    margin-left: -180px;;
`
    ;
export const AboutUs = styled.p`
    transform: rotate(-90deg);
    font-weight: 700;
    font-size: 70px;
    line-height: 1.64;
    color: #f5f5f5;
    text-align: center;
    width: 560px;
    height: 119px;
    margin: 100px 0 0 -100px;
`
    ;

export const AboutPictures = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    margin-right: 80px;
`
    ;
export const AboutImg = styled.img`
    margin-bottom: 150px;
    margin-left: -200px;
    width: 270px;
    height: 495px;
}
`;
    export const AboutImg1 = styled.img`
    margin - top: 150px;
    width: 270px;
    height: 495px;
`
    ;

    export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    height: 580px;
    width: 540px;
`
    ;
    export const AboutTextH2 = styled.h2`
    font-weight: 700;
    font-size: 46px;
    line-height: 1.3;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
`
    ;
    export const AboutTextP = styled.p`
    font-size: 18px;
    line-height: 1.66;
    margin-bottom: 10px;
}
`
    ;
    export const AboutNam = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 20px;
`
        ;
    export const  AboutNamPosition= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: -50px 50px 0 0;
`
        ;    

    export const AboutColor = styled.p`
    font-weight: 700;
    font-size: 46px;
    line-height: 1.3;
    background: linear-gradient(#f00000, #9109f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

export const AboutColorP = styled.p`
    font-size: 15px;
    line-height: 1.66;
    color: #858585;
}
}
`;
export const AboutVector = styled.img`

}
`;
export const AboutVector1 = styled.svg`
fill: #858585;
stroke: #858585;
// ransform: translate(0px, -1000%);
// margin: -10px 0 0 0;
}
`;
export const AboutButton = styled.button`
    font-family: "Catamaran", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.66;
    color: #ffffff;
    background-color: #d22238;
    border-radius: 10px;
    width: 186px;
    height: 68px;
    border: 1px solid #d22238;
    transform: translate(0px, -50%);
    // margin: -150px 0 0 0;
    
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
`;
