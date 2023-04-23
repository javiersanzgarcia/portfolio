import React from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Portfolio.css'
import { getImgURL } from '../utils/images'

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
              <div key={item.title} className="blog-col">
                <div className="blog-img">
                  <img
                    className="image"
                    src={getImgURL(item.image)}
                    alt={item.description}
                  />
                  <div className="img-tag">
                    <h3 className="s-text">{item.category}</h3>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title">
                    <a
                      href={item.url1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4>{item.title}</h4>
                    </a>
                  </div>
                  <div className="post-text">
                    <p>{item.description}</p>
                  </div>
                  <a href={item.url2} target="_blank" className="post-more">
                    {t('portfolio.readme')}
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
