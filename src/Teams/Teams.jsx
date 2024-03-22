import {
    Teams,
    TeamsAbove,
    TeamsTitle,
    TeamsTitleP,
    TeamsCart,
    TeamsCartLi,
    TeamsCartImg,
    TeamsCartImgBack,
    TeamsCartImgBack1,
    TeamsCartImgBack2,
    TeamsCartImgBack3,
    TeamsCartImgBack4,
    TeamsTitleLe,
    TeamsTitleLeP,
    TeamsBack,
    TeamsBackLeft,
    TeamsBackLeft1,
    TeamsBackLeft2,
    TeamsBackRight1,
    TeamsBackRight2,
    TeamsBackRight,
} from "./Teams.styled";

import Mask from "../images/mask-group1.png";
import Mask1 from "../images/mask-group2.png";
import Mask2 from "../images/mask-group3.png";
import Mask3 from "../images/mask-group4.png";
import Ellipse3 from "../images/teams/ellipse3.png";
import Ellipse4 from "../images/teams/ellipse4.png";
import Ellipse8 from "../images/ellipse-8.png";
import Ellipse9 from "../images/ellipse-9.png";
import Ellipse10 from "../images/ellipse-10.png";
import Ellipse11 from "../images/ellipse-11.png";

const TeamcSection = () => {
    return (
<Teams>
        <TeamsAbove>
            <TeamsTitle>Our team members</TeamsTitle>
            <TeamsTitleP>Transcosmos` business is uniting people and technology to provide exceptional
                customer<br /> experiences. </TeamsTitleP>
            <TeamsCart>
                <TeamsCartLi>
                    <div>
                        <TeamsCartImg src={Mask} alt="" />
                        <TeamsCartImgBack >
                            <TeamsCartImgBack1  src={Ellipse3} alt="" />
                            <TeamsCartImgBack2  src={Ellipse4} alt="" />
                        </TeamsCartImgBack>
                    </div>
                    <div>
                        <TeamsTitleLe>Shinichi Nagakura</TeamsTitleLe>
                        <TeamsTitleLeP>Chairman and CEO</TeamsTitleLeP>
                    </div>
                </TeamsCartLi>
                <TeamsCartLi>
                    <div>
                        <TeamsCartImg src={Mask1} alt="" />
                        <TeamsCartImgBack >
                            <TeamsCartImgBack3 src={Ellipse3} alt="" />
                            <TeamsCartImgBack4  src={Ellipse4} alt="" />
                        </TeamsCartImgBack>
                    </div>
                    <div>
                        <TeamsTitleLe>Toru Tanii</TeamsTitleLe>
                        <TeamsTitleLeP>President and COO</TeamsTitleLeP>
                    </div>
                </TeamsCartLi>
                <TeamsCartLi>
                    <div>
                        <TeamsCartImg src={Mask2} alt="" />
                        <TeamsCartImgBack >
                            <TeamsCartImgBack1  src={Ellipse3} alt="" />
                            <TeamsCartImgBack2  src={Ellipse4} alt="" />
                        </TeamsCartImgBack>
                    </div>
                    <div>
                        <TeamsTitleLe>Mike Reik</TeamsTitleLe>
                        <TeamsTitleLeP>Vice President of Sales</TeamsTitleLeP>
                    </div>
                </TeamsCartLi>
                <TeamsCartLi>
                    <div>
                        <TeamsCartImg src={Mask3} alt="" />
                        <TeamsCartImgBack>
                            <TeamsCartImgBack3  src={Ellipse3} alt="" />
                            <TeamsCartImgBack4  src={Ellipse4} alt="" />
                        </TeamsCartImgBack>
                    </div>
                    <div>
                        <TeamsTitleLe>Greg Bush</TeamsTitleLe>
                        <TeamsTitleLeP>Vice President of Operations</TeamsTitleLeP>
                    </div>
                </TeamsCartLi>
            </TeamsCart>
        <TeamsBack>
            <TeamsBackLeft>
                <TeamsBackLeft1 src={Ellipse8} alt="" />
                <TeamsBackLeft2 src={Ellipse9} alt="" />
            </TeamsBackLeft>
            <TeamsBackRight>
                <TeamsBackRight1 src={Ellipse11} alt="" />
                <TeamsBackRight2 src={Ellipse10} alt="" />
            </TeamsBackRight>
        </TeamsBack>
        </TeamsAbove>

    
    </Teams>

);
};
export default TeamcSection;
