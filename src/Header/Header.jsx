import {
  Header,
  Logo,
  BackHead,
  BackHeadLeft,
  BackHeadRight,
  BackHeadLeftImg1,
  BackHeadLeftImg2,
  BackHeadRightImg5,
  BackHeadRightPosition,
  BackHeadRightImg3,
  BackHeadRightImg4,
  BackHeadRightImg6,
} from "./Header.styled";
import Navbar from "../Nave/index";
import LogoImg from "../images/svg/Group.svg";
import Head5 from "../images/head5.png";
import Head1 from "../images/head1.png";
import Head2 from "../images/head2.png";
import Head3 from "../images/head3.png";
import Head4 from "../images/head4.png";
import Head6 from "../images/head6.png";

const Headerbar = () => {
  return (
    <Header>
      <Logo src={LogoImg} alt="Logo" />
      <Navbar />
      <BackHead>
        <BackHeadLeft>
          <BackHeadLeftImg1 src={Head1} alt="Head img" />
          <BackHeadLeftImg2 src={Head2} alt="Head img" />
        </BackHeadLeft>
        <BackHeadRight>
          <BackHeadRightPosition>
            <BackHeadRightImg3 src={Head3} alt="Head img" />
            <BackHeadRightImg4 src={Head4} alt="Head img" />
            <BackHeadRightImg6 src={Head6} alt="Head img" />
          </BackHeadRightPosition>
        </BackHeadRight>
      </BackHead>
      <BackHeadRightImg5 src={Head5} alt="Head img" />
    </Header>
  );
};

export default Headerbar;
