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
import { SendEmail } from "../service/AuthUserAPI.js";
import { toast } from 'react-toastify';

const GetSection = () => {


    const handleSubmit = evt => {
        evt.preventDefault();

        const data = {
            email: evt.currentTarget.elements.email.value,

        };
        console.log(' data :>>', data)
        var input = document.getElementById("email-get");
        if (input && input.value) {
            //виконати відправку
            SendEmail(data);
            toast.success('Message send successful!');
            alert('Message send successful!');

        }
        else {
            //показати повідомлення
            alert('Error sending data, fill in the field');
        }
        evt.target.reset();

    }
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
                <GetForms onSubmit={handleSubmit}>
                    <GetEmail
                        id="email-get"
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                        autoComplete="off" />
                    <GetButton type="submit">Subscribe</GetButton>
                </GetForms>
            </GetForm>
            <GetImg2 src={GetImges2} alt="" width="173px" height="166px" />
        </Get>


    );
};
export default GetSection;
