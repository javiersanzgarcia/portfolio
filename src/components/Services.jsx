import React, { useEffect } from 'react'
import '../css/Services.css'
import Aos from 'aos'

import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })

  return (
    <>
      <section className="services" id="services">
        <div data-aos="zoom-in" className="ser-tittle">
          <h2>
            {' '}
            MY <span> SERVICES </span>{' '}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            temporibus consequuntur dicta ullam illo facere.
          </p>
          <div className="line"></div>
        </div>

        <div className="ser-row">
          <div data-aos="fade-up-left" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                {' '}
                <i className="fa-solid fa-camera"></i>{' '}
              </span>
              <div className="service-desc">
                <h2>Photoshope</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-down" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                {' '}
                <i className="fa-solid fa-magnifying-glass-dollar"></i>{' '}
              </span>
              <div className="service-desc">
                <h2>Photographer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up-right" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                {' '}
                <i className="fa-solid fa-laptop"></i>{' '}
              </span>
              <div className="service-desc">
                <h2>Frontend</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up-left" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                <i className="fa-solid fa-database"></i>
              </span>
              <div className="service-desc">
                <h2>Backend</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                <i className="fa-solid fa-pen-nib"></i>{' '}
              </span>
              <div className="service-desc">
                <h2>Designer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up-right" className="ser-col">
            <div className="single-ser">
              <span className="ico-area">
                <i className="fa-solid fa-code"></i>
              </span>
              <div className="service-desc">
                <h2>Full Stack</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, facere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
