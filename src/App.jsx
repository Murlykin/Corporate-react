import './App.css'
import Headerbar from "./Header/index"
import Headbar from "./Head/index"
import СlientsSection  from "./Clients/index"
import AboutSection  from "./About/index"
import VisonSection from "./Vison/index"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Headerbar />
        <Headbar />
        <СlientsSection />
        <AboutSection />
        <VisonSection />
      </div>

    </>
  )
}

export default App
