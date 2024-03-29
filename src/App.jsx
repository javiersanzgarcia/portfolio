import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </>
)

export default App
