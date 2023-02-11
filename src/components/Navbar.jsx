import { useState } from 'react'
import '../css/Navbar.css'

const Navbar = () => {
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

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <a href="/">
          {' '}
          <h1>
            Javier <span className="dot">Sanz</span> Garc&iacute;a
          </h1>{' '}
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
