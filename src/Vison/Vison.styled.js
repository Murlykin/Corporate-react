import styled from '@emotion/styled';
export const VisonContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`
    ;

export const VisonItems = styled.div`
    display: flex;
    align-items: center;
    Justify-content: center;
    flex-direction: column;
    margin-top: 150px;
    height: 663px;
    width: 1305px;
`
    ;
export const VisonTitle = styled.h2`
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 1.3;
    letter-spacing: 0.02em;
    text-align: center;
    letter-spacing: 0.02em;
`
    ;

export const VisonTitleP = styled.p`
    font-family: "Catamaran", sans-serif;
    margin: 10px 0 100px 0;
    font-size: 18px;
    line-height: 1.66;
    text-align: center;
    letter-spacing: 0.02em;;
`
    ;

export const VisonPosition = styled.div`
    display: flex;
    transform: translate(100px, 0%);
    align-items: center;
    Justify-content: center;
    width: 1200px;
`
    ;
export const VisonServises = styled.p`
    transform: rotate(90deg);
    font-weight: 700;
    font-size: 70px;
    line-height: 1.64;
    color: #f5f5f5;
    text-align: center;
    width: 560px;
    height: 119px;
    margin: 0 -20px 0 -100px;
    letter-spacing: 0.02em;
    `;


export const VisonCard = styled.div`
    display: flex;
    align-items: center;
    Justify-content: center;
    gap: 30px;
`
    ;

export const VisonCardItems = styled.div`
    width: 340px;
    height: 462px;
    border-radius: 10px;
    padding: 20px 0 0 20px;

        &:focus {
        box-shadow: 0px 18px 41px 0px rgba(240, 0, 0, 0.06);
        }
    
        &:hover {
        box-shadow: 0px 18px 41px 0px rgba(240, 0, 0, 0.06);
        }    
}
`
    ;
export const VisonCardTitle = styled.h3`
    font-weight: 700;
    font-size: 21px;
    line-height: 1.57;
    letter-spacing: 0.02em;
    margin-top: 50px; 
}
`
    ;
export const VisonCardP = styled.p`
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.02em;
    margin-top: 25px;
    color: #858585;
}
`
    ;
export const VisonImg = styled.img`
    background-color: #F6EFFA;
    border-radius: 10px;
`
    ;
export const VisonImg1 = styled.img`
    background-color: #FCEDEF;;
`
    ;
export const VisonImg2 = styled.img`
    background-color: #FCEDEF;
`
    ;
export const VisonButton = styled.button`
    display: flex;
    align-items: center;
    Justify-content: center;
    gap: 4px;
    font-family: "Catamaran", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.66;
    color: #858585;
    background-color: rgb(0 0 0 / 0);
    border-radius: 10px;
    width: 145px;
    height: 52px;
    border: 1px solid #858585;
    margin: 40px 0;
    fill: #858585;
    
    &:focus {
            color: #FFFFFF;
    background-color: #d22238;
    border: 1px solid #d22238;
    fill: #FFFFFF;
    transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        }
    
    &:hover {
            color: #FFFFFF;
    background-color: #d22238;
    border: 1px solid #d22238;
    fill: #FFFFFF;
    transition: box-shadow 400ms ease-in 0s, color 400ms ease-in 0s, background-color 400ms ease-in 0s;
        } 
    &:after {
            content: " →";   
        }
`
    ;

