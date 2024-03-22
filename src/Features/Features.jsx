import {
    Features,
    FeaturesFeatures,
    FeaturesCenter,
    FeaturesTitle,
    FeaturesP,
    FeaturesLi,
    FeaturesImg,
    FeaturesImgBackground,
    FeaturesLiTitle,
    FeaturesLiP,
    FeaturesIcon,
} from "./Features.styled";

import Discover from "../images/discover.png";
import Planning from "../images/planning.png";
import Books from "../images/books.png";
import Group from "../images/group53.png";
import Man from "../images/man.png";

const FeaturesSection = () => {
    return (
<Features>
        <FeaturesFeatures>FEATURES</FeaturesFeatures>
        <FeaturesCenter>
            <FeaturesTitle>How we work features for<br />customers</FeaturesTitle>
            <FeaturesP >Whether you need help launching a single product in a<br /> specific country or are looking for a global
            </FeaturesP>
            <ul>
                <FeaturesLi>
                    <FeaturesIcon  src={Discover} alt="" width="87px" height="86px" />
                    <div>
                        <FeaturesLiTitle>Discover new ideas</FeaturesLiTitle>
                        <FeaturesLiP>Lorem Ipsum is simply dummy text of the printing<br /> and typesetting industry. Lorem Ipsum
                        </FeaturesLiP>
                    </div>
                </FeaturesLi>
                <FeaturesLi>
                    <FeaturesIcon src={Planning} alt="" width="87px" height="86px" />
                    <div>
                        <FeaturesLiTitle>Planning & analysis</FeaturesLiTitle>
                        <FeaturesLiP>Lorem Ipsum has been the industry`s standard<br /> dummy text ever since the 1500s</FeaturesLiP>
                    </div>
                </FeaturesLi>
                <FeaturesLi>
                    <FeaturesIcon src={Books}  alt="" width="87px" height="86px" />
                    <div>
                        <FeaturesLiTitle>Book your providers</FeaturesLiTitle>
                        <FeaturesLiP>It is a long established fact that a reader will be<br /> distracted by the readable content of
                            a page</FeaturesLiP>
                    </div>
                </FeaturesLi>
            </ul>
        </FeaturesCenter>
        <div>
            <FeaturesImg src={Man} />
            <FeaturesImgBackground src={Group} alt="" />
        </div>
        
    </Features>



        );
};
export default FeaturesSection;
