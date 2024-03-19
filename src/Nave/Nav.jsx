import {
  MainNav, SiteNav, SiteNavItems, SiteNavLink, Icons, IconsFlag, SiteNavItem, SiteNavImg, SiteNavPosition, SiteNavEllipse,
} from "./Nav.styled";
import ArrowDown from "../images/svg/Arrow_Down.svg";
import Flag from "../images/flag.png";
import Vector from "../images/Profile.png";
import Ellipse from "../images/Ellipse1.png";


const Navbar = () => {
  return (
    <MainNav>
      <div>
        <SiteNav>
          <SiteNavItems>
            <SiteNavLink>Contact Center</SiteNavLink>
            <Icons src={ArrowDown} alt="Logo" />
          </SiteNavItems>
          <SiteNavItems><SiteNavLink>Ecommerce</SiteNavLink><Icons src={ArrowDown} alt="Logo" />
          </SiteNavItems>
          <SiteNavItems><SiteNavLink>Blog</SiteNavLink></SiteNavItems>
          <SiteNavItems><SiteNavLink>About us</SiteNavLink><Icons src={ArrowDown} alt="Logo" />
          </SiteNavItems>
          <SiteNavItems><SiteNavLink>Contact us</SiteNavLink><Icons src={ArrowDown} alt="Logo" />
          </SiteNavItems>
          <SiteNavItems>
            <SiteNavItem>
              <IconsFlag src={Flag} alt="Flag" />
              <SiteNavLink>EN</SiteNavLink>
              <Icons src={ArrowDown} alt="Logo" />
            </SiteNavItem>
          </SiteNavItems>
        </SiteNav>
      </div>
      <SiteNavImg>
        <SiteNavEllipse src={Ellipse} alt="Ellipse" /> 
        <SiteNavPosition src={Vector} alt="Vector" /> 
        </SiteNavImg>

    </MainNav>
  );
};

export default Navbar;