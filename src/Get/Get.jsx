import {
    Get,
    GetImg,
    GetImg1,
    GetImg2,
    GetForm,
    GetTitle,
    GetP,
    GetEmail,
    GetButton,
    GetForms,

} from "./Get.styled";

import GetImges from "../images/get.png";
import GetImges1 from "../images/get1.png";
import GetImges2 from "../images/get2.png";


const GetSection = () => {
    return (
    <Get>
        <div>
            <GetImg src={GetImges} alt="" />
            <GetImg1 src={GetImges1} alt="" />   
        </div>
            <GetForm>
            <GetTitle>Get started today! It`s free</GetTitle>
            <GetP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br /> Ipsum
                has been the industry`s standard dummy</GetP>
            <GetForms action="">
                <GetEmail type="Email" id="email" placeholder="Enter your email" />
                <label></label>
                <GetButton>Subscribe</GetButton>
            </GetForms>
            </GetForm>
        <GetImg2 src={GetImges2} alt="" width="173px" height="166px" />
    </Get>


);
};
export default GetSection;
