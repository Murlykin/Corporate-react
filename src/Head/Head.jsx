import {
    Head,
    HeadLeft,
    HeadLeftTitle,
    HeadLeftP,
    HeadLeftForm,
    HeadLeftFormInput,
    HeadLeftFormButton,
    HeadLeftP1,
    HeadLeftP1Color,
    HeadRait,
    HeadRaitImg,
    HeadSocial,
    HeadMedal,
    HeadMedal1,
    HeadMedal2,
    HeadPosition,
    HeadP,
    HeadPowerful,
    HeadPowerfulImg,
    HeadP700,
    HeadPColor,
    HeadH4,
    HeadH3,
} from "./Head.styled";
import Woman from "../images/011.png";
import Medal from "../images/svg/medal.svg";
import Ellipsel from "../images/Ellipse9.png";
import MaskGroup1 from "../images/MaskGroup1.png";
import MaskGroup2 from "../images/MaskGroup2.png";


const Headbar = () => {
    return (
        <Head>
            <HeadLeft>
                <HeadLeftTitle>Your customer<br /> experience solution</HeadLeftTitle>
                <HeadLeftP>
                    For over 50 years, transcosmos has been designing solutions<br /> that
                    prioritize the customer experience
                </HeadLeftP>
                <HeadLeftForm>
                    <HeadLeftFormInput
                        type="Email"
                        id="email"
                        placeholder="Enter your email"
                    />
                    <label>
                        <HeadLeftFormButton>Discover Now</HeadLeftFormButton>
                    </label>
                </HeadLeftForm>
                <HeadLeftP1>
                    *By clicking the button, you are agreeing with our{" "}
                    <HeadLeftP1Color>Terms & Conditions</HeadLeftP1Color>
                </HeadLeftP1>
            </HeadLeft>
            <HeadRait>
            <HeadRaitImg src={Woman} alt=""/>
            <HeadSocial>
                <HeadMedal>
                    <HeadMedal1 src={Medal} alt="" /> 
                    <HeadMedal2 src={Ellipsel}  alt="" />
                </HeadMedal>
                <HeadPosition>
                    <HeadH3>Best Design Awards</HeadH3>
                    <HeadP>#1 UX Agency</HeadP>
                
                    <HeadPowerful>
                        
                    <HeadPowerfulImg src={MaskGroup1} alt="" />
                    <div>
                        <HeadH4>Powerful Platform</HeadH4>
                        <HeadP700>Tuesday - $80.00</HeadP700>
                    </div>
                    <HeadPColor>+96 pts</HeadPColor>
                </HeadPowerful>
                <HeadPowerful>
                    <HeadPowerfulImg src={MaskGroup2} alt=""/>
                    <div>
                        <HeadH4>Powerful Platform</HeadH4>
                        <HeadP700>Tuesday - $80.00</HeadP700>
                    </div>
                    <HeadPColor>+96 pts</HeadPColor>
                        </HeadPowerful>
                </HeadPosition>
            </HeadSocial>  
            </HeadRait>

        </Head>
    );
};

export default Headbar;
