import {
    About,
    AboutBody,
    AboutUs,
    AboutPictures,
    AboutImg,
    AboutImg1,
    AboutText,
    AboutTextH2,
    AboutTextP,
    AboutNam,
    AboutColor,
    AboutColorP,
    AboutVector,
    AboutButton
} from "./About.styled";

import MaskGroup3 from "../images/maskgroup3.png";
import MaskGroup4 from "../images/maskgroup4.png";
import Vector from "../images/Vector1.png";

const AboutSection = () => {
    return (
        <About>
            <AboutBody>
                <AboutUs>ABOUT US</AboutUs>
                <AboutPictures>
                    <AboutImg src={MaskGroup3} alt="" />
                    <AboutImg1 src={MaskGroup4} alt="" />
                </AboutPictures>
                    <AboutText>
                        <AboutTextH2>We are here for your <br /> business solutions</AboutTextH2>
                        <AboutTextP>As an organization focused on customer experience, the <br />measure of our
                            success
                            is always based on the satisfaction of <br />our clients, customers, and employees.<br />
                                Launching in 1966, transcosmos has grown to be a global <br />leader in customer ex <br />perience with over
                                    58,000 employees<br /> across 30 countries.
                                    </AboutTextP>
                        <AboutNam>
                                        <div>
                                            <AboutColor>53k</AboutColor>
                                            <AboutColorP>Projects Done</AboutColorP>
                                        </div>
                                        <AboutVector src={Vector} alt="" />
                                            <div>
                                                <AboutColor>400</AboutColor>
                                                <AboutColorP>Amazing Clients</AboutColorP>
                                            </div>
                                        <AboutVector src={Vector} alt="" />
                                                <div>
                                                    <AboutColor>1+</AboutColor>
                                                    <AboutColorP>Get Awards</AboutColorP>
                                                </div>
                        </AboutNam>
                                            <div><AboutButton>Learn More</AboutButton></div>
                    </AboutText>
            </AboutBody>
                            
        </About>
                            );
};

export default AboutSection;
