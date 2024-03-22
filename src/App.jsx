import './App.css'
import Headerbar from "./Header/index"
import Headbar from "./Head/index"
import СlientsSection  from "./Clients/index"
import AboutSection  from "./About/index"
import VisonSection from "./Vison/index"
import FeaturesSection from "./Features/index"
import TeamcSection from "./Teams/index"

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
      </div>

    </>
  )
}

export default App
