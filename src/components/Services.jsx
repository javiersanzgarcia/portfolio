import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Services.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Services = () => {
  const { t } = useTranslation('global')
  const services = t('services.services', { returnObjects: true })

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })

  return (
    <>
      <section className="services" id="services">
        <div data-aos="zoom-in" className="ser-tittle">
          <h2>
            {t('services.title1')}
            <span> {t('services.title2')}</span>
          </h2>
          <p>{t('services.description')}</p>
          <div className="line"></div>
        </div>

        <div className="ser-row">
          {services.map((service, index) =>
            index % 2 === 0 ? (
              <div
                key={service.title}
                data-aos="fade-up-left"
                className="ser-col"
              >
                <div className="single-ser">
                  <span className="ico-area">
                    <i className={`fa-solid ${service.icon}`} />
                  </span>
                  <div className="service-desc">
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={service.title}
                data-aos="fade-up-right"
                className="ser-col"
              >
                <div className="single-ser">
                  <span className="ico-area">
                    <i className={`fa-solid ${service.icon}`} />
                  </span>
                  <div className="service-desc">
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  )
}
