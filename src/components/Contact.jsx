import React, { Fragment, useEffect } from 'react'
import '../css/Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })

  return (
    <Fragment>
      <section className="contact" id="contact">
        <div data-aos="zoom-in" className="contact-tittle">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            temporibus consequuntur dicta ullam illo facere.
          </p>
          <div className="contact-line"></div>
        </div>

        <div className="contact-container">
          <div className="contact-row">
            <div data-aos="fade-right" className="contact-column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Address</h5>
                    <p>20 W 34th St., New York, NY 10001, United States</p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Contact Us</h5>
                    <p>125-711-811 | 125-668-886</p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Mail</h5>
                    <p>your.support@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="contact-column">
              <div className="contact-form">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact
