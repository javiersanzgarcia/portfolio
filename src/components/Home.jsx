import { useTranslation } from 'react-i18next'
import '../css/Home.css'

const Home = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <section className="home">
        <div className="home-content">
          <h3>{t('home.hello')}</h3>
          <h2>
            {t('home.iam')} <span>Javier Sanz</span>
          </h2>
          <p> {t('home.resume')}</p>
        </div>

        <div className="social">
          <a href={t('home.linkedin')} target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/javiersanzgarcia" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
