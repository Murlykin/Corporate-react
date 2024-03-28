import {
  MainNav, SiteNav, SiteNavItems, SiteNavLink, Icons, IconsFlag, SiteNavItem, SiteNavImg, SiteNavPosition, SiteNavEllipse,
} from "./Nav.styled";
// import ArrowDown from "../images/svg/Arrow_Down.svg";
import Flag from "../images/flag.png";
import Vector from "../images/Profile.png";
import Ellipse from "../images/Ellipse1.png";
// import Icon from '../images/icons.svg'; 


const Navbar = () => {
  return (
    <MainNav>
        <SiteNav>
          <SiteNavItems>
            <SiteNavLink>Contact Center</SiteNavLink>
            <Icons alt="Logo">  &#5167;</Icons>
          </SiteNavItems>
        <SiteNavItems><SiteNavLink>Ecommerce</SiteNavLink><Icons alt="Logo">
          &#5167;</Icons>
          </SiteNavItems>
          <SiteNavItems><SiteNavLink>Blog</SiteNavLink></SiteNavItems>
          <SiteNavItems><SiteNavLink>About us</SiteNavLink><Icons alt="Logo">
          &#5167;</Icons>
          </SiteNavItems>
          <SiteNavItems><SiteNavLink>Contact us</SiteNavLink><Icons alt="Logo">
          &#5167;</Icons>
          </SiteNavItems>
          <SiteNavItems>
            <SiteNavItem>
              <IconsFlag src={Flag} alt="Flag" />
              <SiteNavLink>EN</SiteNavLink>
              <Icons alt="Logo">
          &#5167;</Icons>
            </SiteNavItem>
          </SiteNavItems>
        </SiteNav>
            <SiteNavImg>
        <SiteNavEllipse src={Ellipse} alt="Ellipse" /> 
        <SiteNavPosition src={Vector} alt="Vector" /> 
        </SiteNavImg>

    </MainNav>
  );
};

export default Navbar;