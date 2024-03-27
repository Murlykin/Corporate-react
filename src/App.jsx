import './App.css'
import Headerbar from "./Header/index"
import Headbar from "./Head/index"
import СlientsSection  from "./Clients/index"
import AboutSection  from "./About/index"
import VisonSection from "./Vison/index"
import FeaturesSection from "./Features/index"
import TeamcSection from "./Teams/index"
import BlogSection from "./Blog/index"
import GetSection from "./Get/index"
import FooterSection from "./Footer/index"

function App() {

  return (
    <>
      <div>
        <Headerbar />
        <Headbar />
        <СlientsSection />
        <AboutSection />
        <VisonSection />
        <FeaturesSection />
        <TeamcSection />
        <BlogSection />
        <GetSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App

