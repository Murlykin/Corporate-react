import styled from '@emotion/styled';
export const MainNav = styled.div`
    display: flex;
    align-items: center;
`
    ;
export const SiteNav = styled.ul`
    display: flex;
    margin-left: 93px;
`;
export const SiteNavItems = styled.li`
    margin-right: 20px;
    display: flex;
    align-items: center;
    `
    ;
export const SiteNavLink = styled.a`
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.02em;
    text-decoration: none;
    position: relative;
    color: #5a5666;
    cursor: pointer;

`
;
export const SiteNavItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
export const Icons = styled.a`
    margin-left: 5px;
    width: 16px;
    height: 16px;
    color: #5a5666;
    text-align: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
`;
export const IconsFlag = styled.img`
    width: 25px;
    height: 15px;
`;
export const SiteNavImg = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
`
;
export const SiteNavPosition = styled.img`
    margin: 20px 20px 30px;
    z-index: 2;
    position: absolute;
    width: 29px;
    height: 29px;
`;
export const SiteNavEllipse = styled.img`
    width: 69px;
    height: 69px;

    `;