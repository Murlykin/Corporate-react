import {
    VisonContainer,
    VisonItems,
    VisonTitle,
    VisonTitleP,
    VisonPosition,
    VisonCard,
    VisonServises,
    VisonCardTitle,
    VisonCardP,
    VisonImg,
    VisonImg1,
    VisonImg2,
    VisonButton,
    VisonCardItems,
} from "./Vison.styled";

import ContactCenter from "../images/Contact-center.png";
import Ecommerce from "../images/ecommerce.png";
import Business from "../images/Business.png";

const VisonSection = () => {
    return (
        <VisonContainer>
            <VisonItems>
                <div>
                    <VisonTitle>Our vison & Our goal</VisonTitle>
                    <VisonTitleP>Transcosmos’ business is uniting people and technology to provide
                        exceptional<br />
                        customer experiences. </VisonTitleP>
                </div>
            <VisonPosition >
                <VisonCard >
                    <VisonCardItems>
                        <div>
                        <VisonImg src={ContactCenter} alt="" />
                        <VisonCardTitle>Contact center</VisonCardTitle>
                        <VisonCardP>For over 50 years, transcosmos has been<br /> designing solutions
                        that prioritize the<br /> customer experience.</VisonCardP>
                        <VisonButton>Read More &nbsp;&nbsp;</VisonButton>
                        </div>
                    </VisonCardItems>
                    <VisonCardItems>
                        <VisonImg1 src={Ecommerce} alt="" />
                        <VisonCardTitle>Ecommerce</VisonCardTitle>
                        <VisonCardP>Whether you’re looking for a complete end-<br />to-end ecommerce solution
                        or a specific<br /> service, transcosmos America</VisonCardP>
                        <VisonButton>Read More &nbsp;&nbsp; </VisonButton>
                    </VisonCardItems>
                    <VisonCardItems>
                        <VisonImg2 src={Business} alt="" />
                        <VisonCardTitle>Business process outsourcing</VisonCardTitle>
                        <VisonCardP>transcosmos America’s BPO services team<br /> will perform an intensive
                        investigation for<br /> the tasks of all of the applicable</VisonCardP>
                        <VisonButton>Read More &nbsp;&nbsp;</VisonButton>
                    </VisonCardItems>
                </VisonCard >
                <VisonServises >SERVICES</VisonServises >
            </VisonPosition >
            </VisonItems>
        </VisonContainer>
);
};
export default VisonSection;
