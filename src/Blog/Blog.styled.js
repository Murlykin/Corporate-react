import styled from '@emotion/styled';
export const Blog = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 150px;
`
    ;

export const BlogItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
    ;

export const BlogImg = styled.img`
    border-radius: 10px;
    ;
`
export const BlogGradient = styled.a`
    display: inline-block;
    position: relative;
    line-height: 0;

    &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    background-image: linear-gradient(rgb(0 0 0 / 0) 0%, #000000 100%);
    opacity: 0.8;
    border-radius: 10px;
}
    &:hover:after {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(rgb(0 0 0 / 0) 30%, #f00000 70%) no-repeat;
    opacity: 1;
    transition: all .25s ease 0s;
    cursor: pointer;
    transition-timing-function: ease-in;
}
    ;
`
export const BlogItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
    ;
`
export const BlogDiscript= styled.div`
    margin-bottom: 10px;
    position: absolute;
    margin-left: 15px;
    z-index: 5;
`

export const BlogItemsCenter= styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const BlogITime= styled.div`
    display: flex;
    align-items: center;
`
export const BlogVector = styled.img`
    transform: translate(712.5px, -50%)
    ;
`
export const BlogTitle = styled.h2`
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 1.3;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--texst-color);
    ;
`    
export const BlogTitleP = styled.p`
    font-family: "Catamaran", sans-serif;
    margin: 10px 0 100px 0;
    font-size: 18px;
    line-height: 1.66;
    text-align: center;
    color: var(--texst-color);
    ;
`    
export const BlogBlogP = styled.p`
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 1.6;
    letter-spacing: 0.02em;
    color: #ffffff;
    ;
`   
export const BlogTimeP = styled.p`
    font-family: "Catamaran", sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.02em;
    color: #ffffff;
`  
