import React, { Fragment, useState } from 'react'
import person from '../assets/Images/bohemian-man-with-his-arms-crossed-removebg-preview.png'
import Data from './BlogData'
import '../CSS/Blog.css'

const Blog = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(Data)

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
                  <div className="auther">
                    <div className="auther-img">
                      <img src={person} alt="auther" />
                    </div>
                    <div className="auther-name">
                      <span>By Tim David</span>
                    </div>
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

export default Blog
