import React from 'react'
import { useTranslation } from 'react-i18next'

import '../css/Portfolio.css'

export const Portfolio = () => {
  const { t } = useTranslation('global')
  const items = t('portfolio.projects', { returnObjects: true })

  return (
    <>
      <section className="blog" id="blog">
        <div className="blog-tittle">
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.description')}</p>
          <div className="blog-line"></div>
        </div>

        <div className="blog-row">
          {items.map((item) => {
            return (
              <div className="blog-col" key={item.title}>
                <div className="blog-img">
                  <img
                    className="imge"
                    src={item.image}
                    alt={item.description}
                  />
                  <div className="img-tag">
                    <h3 className="s-text">{item.category}</h3>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title">
                    <a href={item.url1}>
                      <h4>{item.title}</h4>
                    </a>
                  </div>
                  <div className="post-text">
                    <p>{item.description}</p>
                  </div>
                  <a href={item.url2} className="post-more">
                    {t('portfolio.readme')}{' '}
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
