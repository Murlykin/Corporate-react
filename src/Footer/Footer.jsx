import {
    Footer,
    FooterLink,
    FooterLogo,
    FooterP,
    FooterPLi,
    FooterSvg,
    FooterSocial,
    FooterH4,
    FooterUl,
    FooterDecaration,
    FooterUs,
    FooterIamges,
    FooterIaine,
    FooterCopyraight,

} from "./Footer.styled";
import Icon from '../images/icons.svg'; 
// import Group from "../images/svg/Group.png";
import House from "../images/House.png";
import Phone from "../images/Phone.png";
import Fax from "../images/Fax.png";
import BtnScrollUp from "../ButtonUp/index"


const FooterSection = () => {
    return (

    <Footer>
        <FooterLink>
                <div>
                <FooterLogo alt="Logo">
                     <use href={Icon + '#icon-logo'}></use>
                </ FooterLogo>
                    <FooterP>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.
                    Lorem<br /> Ipsum has been the
                    industry`s.</FooterP>
                <FooterSocial>
                    <li><a href="">
                            <FooterSvg aria-label="іконка фейсбук" width="20" height="20">
                            <use href={Icon + '#icon-facebook'}></use> 
                            </FooterSvg >
                        </a></li>
                    <li><a href="">
                            <FooterSvg aria-label="іконка твітер" width="20" height="20">
                                <use href={Icon + '#icon-tviter'}></use> 
                            </FooterSvg>
                        </a></li>
                    <li><a href="">
                            <FooterSvg aria-label="іконка інстаграм" width="20" height="20">
                                <use href={Icon + '#icon-instagram'}></use>
                            </FooterSvg>
                        </a></li>
                    <li><a href="">
                            <FooterSvg aria-label="іконка ликедин" width="20" height="20">
                                <use href={Icon + '#icon-linkedin'}></use>
                            </FooterSvg>
                        </a></li>
                </FooterSocial>
            </div>
            <div>
                <FooterH4>About us</FooterH4>
                <FooterUl>
                    <FooterPLi><FooterDecaration href="#" >About</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Blog</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Team</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Contact us</FooterDecaration></FooterPLi>
                </FooterUl>
            </div>
            <div>
                <FooterH4>Quick Links</FooterH4>
                <FooterUl>
                    <FooterPLi><FooterDecaration href="#">Privacy policy</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Terms & Conditions</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Contact center</FooterDecaration></FooterPLi>
                    <FooterPLi><FooterDecaration href="#">Reviews</FooterDecaration></FooterPLi>
                </FooterUl>
            </div>
            <div>
                <FooterH4>Contact us</FooterH4>
                <FooterUl>
                        <FooterUs>
                            <FooterIamges src={House} alt="" width="40px" height="40px" />
                            <FooterP>879 West 190th Street #410, Gardena,<br />
                            CA 90248, USA</FooterP>
                        </FooterUs>
                        <FooterUs>
                            <FooterIamges src={Phone} alt="" width="40px" height="40px" />
                            <FooterP>310-630-0072</FooterP>
                    </FooterUs>
                        <FooterUs>
                            <FooterIamges src={Fax} alt="" width="40px" height="40px" />
                            <FooterP>310-630-0074</FooterP>
                    </FooterUs>
                </FooterUl>
            </div>
            <BtnScrollUp />  
        </FooterLink>
        <FooterIaine></FooterIaine>
        <FooterCopyraight>Copyright© All rights reserved by bmark.</FooterCopyraight>
    </Footer>


);
};
export default FooterSection;
