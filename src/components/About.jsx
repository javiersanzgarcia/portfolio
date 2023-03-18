import { useEffect } from 'react'
import jsgImg from '../assets/Images/JSG.png'
import jsgCV from '../assets/Resume.pdf'
import '../css/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })

  return (
    <>
      <section className="about" id="about">
        <div className="about-row">
          <div data-aos="fade-right" className="about-column">
            <div className="about-pic">
              <img src={jsgImg} alt="Person" />
            </div>
          </div>

          <div data-aos="fade-left" className="about-column">
            <div className="about-text">
              <div className="about-tittle">
                <span className="span">About me</span>
                <h2>
                  Hi, My Name Is <span> Javier Sanz </span>
                </h2>
              </div>
              <p>
                I’m a programmer with more of 15 years experience, mainly
                oriented to web environment and specialized in Java for Backend
                (Liferay mostly) and React for Frontend
              </p>
              <a href={jsgCV} target="_blank" className="learn-btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
