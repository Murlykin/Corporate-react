import { useTheme } from '../HooksTheme/UseTheme'

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
  HeaderButton,
  HeaderButtonGroup,
} from "./Header.styled";

import Navbar from "../Nave/index";
import Head5 from "../images/head5.png";
import Head1 from "../images/head1.png";
import Head2 from "../images/head2.png";
import Head3 from "../images/head3.png";
import Head4 from "../images/head4.png";
import Head6 from "../images/head6.png";
import Icon from '../images/icons.svg';

const Headerbar = () => {

  const { setTheme } = useTheme()

  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

  return (

      <Header>
        <Logo alt="Logo">
          <use href={Icon + '#icon-logo'}></use>
        </ Logo>
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
      
        <HeaderButtonGroup aria-label="Theme toggle">
          <HeaderButton variant="secondary" onClick={handleLightThemeClick}>
            Light
          </HeaderButton>
          <HeaderButton variant="secondary" onClick={handleDarkThemeClick}>
            Dark
          </HeaderButton>
        </HeaderButtonGroup>

        {/* <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} /> */}

      </Header>

    // </ThemeProvider>
  );
};

export default Headerbar;
