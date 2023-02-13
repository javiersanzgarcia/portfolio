import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Navbar.css'
import Flag from './Flag'
import SpainFlag from '../assets/Images/Spain.svg'
import UkFlag from '../assets/Images/UK.svg'

const Navbar = () => {
  const { i18n } = useTranslation()

  const [showMenu, setShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language

  const rightMargin = {
    marginRight: ' 10px'
  }

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <a href="/">
          <h1>
            Javier <span className="dot">Sanz</span> Garc&iacute;a
          </h1>
        </a>
        <div className={showMenu ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <i
              className="fa-solid fa-xmark"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
            <li className="first">
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#services"> Services </a>
            </li>
            <li>
              <a href="#contact"> Contact </a>
            </li>
            <li>
              <Flag
                image={SpainFlag}
                isSelected={selectedLanguage === 'es'}
                onClick={() => handleChangeLanguage('es')}
                style={rightMargin}
              />

              <Flag
                image={UkFlag}
                isSelected={selectedLanguage === 'en'}
                onClick={() => handleChangeLanguage('en')}
              />
            </li>
          </ul>
          <a className="hire" href="#contact">
            Hire Me
          </a>
        </div>
        <i
          className="fa-solid fa-bars"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
        <div className={showMenu ? 'over actived' : 'over'}></div>
      </nav>
    </>
  )
}

export default Navbar
