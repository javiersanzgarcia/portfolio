import React, { useEffect } from 'react'
import '../CSS/Resume.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true, easing: 'ease' })
  }, [])
  return (
    <>
      <section className="resume">
        <div className="main-title">
          <h2>My Resume</h2>
        </div>

        <div className="resume-row">
          <div className="res-col">
            <div className="timeline">
              <ul>
                <li>
                  <div data-aos="fade-right" className="content">
                    <span className="date">2017 - 2023</span>
                    <h4>Freelancer</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore et dolore magna
                      aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </li>

                <li>
                  <div data-aos="fade-left" className="content">
                    <span className="date">2018 - 2023</span>
                    <h4>Developer</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore et dolore magna
                      aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </li>

                <li>
                  <div data-aos="fade-right" className="content">
                    <span className="date">2015 - 2023</span>
                    <h4>Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore et dolore magna
                      aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </li>

                <li>
                  <div data-aos="fade-left" className="content">
                    <span className="date">2014 - 2023</span>
                    <h4>Seo Expert</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore et dolore magna
                      aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
