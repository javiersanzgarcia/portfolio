import React, { Fragment, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Aos from 'aos'
import '../css/Contact.css'
import 'aos/dist/aos.css'

const Contact = () => {
  const form = useRef()
  const { t } = useTranslation('global')

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_r6i2l0w',
        'template_ermu9rk',
        form.current,
        'CfeHukVtf4oPql74O'
      )
      .then(() => form.current.reset())
    alert('Email sent')
  }

  return (
    <Fragment>
      <section className="contact" id="contact">
        <div data-aos="zoom-in" className="contact-tittle">
          <h2>
            <span>{t('contact.title')}</span>
          </h2>
          <p>{t('contact.description')}</p>
          <div className="contact-line"></div>
        </div>

        <div className="contact-container">
          <div className="contact-row">
            <div data-aos="fade-right" className="contact-column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Email</h5>
                    <p>pracker@gmail.com</p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <a href="https://github.com/javiersanzgarcia" target="_blank">
                    <div className="icon">
                      <i className="fa fa-github"></i>
                    </div>
                    <div className="contact-text">
                      <h5>Github</h5>
                      <p>github.com/javiersanzgarcia</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-widget-item">
                <a href={t('home.linkedin')} target="_blank">
                  <div className="icon">
                    <i className="fa fa-linkedin"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Linkedin</h5>
                    <p>linkedin.com/javier-sanz-garcía</p>
                  </div>
                </a>
              </div>
            </div>

            <div data-aos="fade-left" className="contact-column">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                  />
                  <input type="email" name="email_from" placeholder="Email" />
                  <textarea
                    name="message"
                    placeholder={t('contact.form.comment')}
                  ></textarea>
                  <button type="submit" className="site-btn">
                    {t('contact.form.button')}
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
