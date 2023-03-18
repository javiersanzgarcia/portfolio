import { useState } from 'react'
import '../CSS/Portfolio.css'
import Menu from './PortData'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((cureElem) => {
      return cureElem.category === categItem
    })
    setItems(updatedItems)
  }

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="port-tittle">
          <h2>
            my <span>works</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            temporibus consequuntur dicta ullam illo facere.
          </p>
          <div className="port-line"></div>
        </div>

        <div className="nav">
          <ul className="nav-list">
            <li onClick={() => setItems(Menu)}>
              <a className="img-filter active">All</a>
            </li>
            <li onClick={() => filterItem('Designing')}>
              <a className="img-filter">Designing</a>
            </li>
            <li onClick={() => filterItem('Frontend')}>
              <a className="img-filter">Frontend</a>
            </li>
            <li onClick={() => filterItem('Backend')}>
              <a className="img-filter">Backend</a>
            </li>
            <li onClick={() => filterItem('Seo')}>
              <a className="img-filter">Seo</a>
            </li>
          </ul>
        </div>

        <div className="port-row">
          {items.map((elem) => {
            return (
              <div className="port-col" key={elem.id}>
                <div className="project-item">
                  <a className="zoom1" href="#">
                    <img alt="" src={elem.image} />
                    <div className="overlay">
                      <div className="overlay-inner">
                        <h4>{elem.heading}</h4>
                        <p>{elem.paragrapgh}</p>
                      </div>
                    </div>
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

export default Portfolio
