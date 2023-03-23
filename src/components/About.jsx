import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import jsgImg from '../assets/Images/JSG.png'
import jsgCV from '../assets/Resume.pdf'
import '../css/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const { t } = useTranslation('global')

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
                <span className="span">{t('about.title')}</span>
                <div className="lineLeft" />
              </div>
              <p>{t('about.text')}</p>
              <a href={jsgCV} target="_blank" className="learn-btn">
                {t('about.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
