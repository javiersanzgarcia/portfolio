import Home from './components/Home'
import About from './components/About'
// import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
// import Blog from './components/Blog'
import Resume from './components/Resume'
import Services from './components/Services'
import Testimonail from './components/Testimonail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Services />
      <Testimonail />
      {/*  <Portfolio /> */}
      {/*  <Blog /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
