import {
    Client,
    ClientsTitle,
    ClientsItems,
    ClientsItem,
} from "./Clients.styled";

import Group16 from "../images/svg/Group16.svg";
import Group17 from "../images/svg/Group17.svg";
import Group18 from "../images/svg/Group18.svg";
import Group19 from "../images/svg/Group19.svg";
import Group20 from "../images/svg/Group20.svg";
import Group21 from "../images/svg/Group21.svg";

const СlientsSection = () => {
    return (
        <Client>
            <ClientsTitle>Our amazing clients</ClientsTitle>
            <ClientsItems>
                <ClientsItem src={Group16} alt="Сlientimg" />
                <ClientsItem src={Group17} alt="Сlientimg" />
                <ClientsItem src={Group18} alt="Сlientimg" />
                <ClientsItem src={Group19} alt="Сlientimg" />
                <ClientsItem src={Group20} alt="Сlientimg" />
                <ClientsItem src={Group21} alt="Сlientimg" />
            </ClientsItems>
        </Client>
    );
};

export default СlientsSection;
