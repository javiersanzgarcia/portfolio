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
            I am <span>Javier Sanz </span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            mollitia alias amet earum, obcaecati numquam nesciunt vero
            reprehenderit veniam, quas repellat in ratione.
          </p>
        </div>

        <div className="social">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
