import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Footer.css'

const Footer = () => {
  const { t } = useTranslation('global')

  return (
    <Fragment>
      <section className="footer">
        <div className="footer-container">
          <p>Copyright ©2023</p>
          <p>{t('footer.rights')} Javier Sanz Garc&iacute;a </p>
        </div>
      </section>
    </Fragment>
  )
}

export default Footer
