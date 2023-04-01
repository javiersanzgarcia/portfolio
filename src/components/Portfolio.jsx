import React, { Fragment, useState } from 'react'
import person from '../assets/Images/JSG.png'
import Data from './PortfolioData'
import '../css/Portfolio.css'

export const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [items] = useState(Data)

  return (
    <Fragment>
      <section className="blog" id="blog">
        <div className="blog-tittle">
          <h2>
            Latest
            <span>Blog Post</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            temporibus consequuntur dicta ullam illo facere.
          </p>
          <div className="blog-line"></div>
        </div>

        <div className="blog-row">
          {items.map((elem) => {
            return (
              <div className="blog-col" key={elem.id}>
                <div className="blog-img">
                  <img className="imge" src={elem.image} alt="" />
                  <div className="img-tag">
                    <h3 className="s-text">{elem.img_tag}</h3>
                  </div>
                </div>
                <div className="post-content">
                  <p>
                    <span>Date:</span> <i className="fa fa-clock-o"></i>
                    {elem.date}
                  </p>
                  <div className="post-title">
                    <a href="single.html">
                      <h4>{elem.heading}</h4>
                    </a>
                  </div>
                  <div className="post-text">
                    <p>{elem.paragrapgh}</p>
                  </div>
                  <a href="single.html" className="post-more">
                    Read more <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}
