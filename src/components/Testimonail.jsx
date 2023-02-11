import React, { Fragment, useState } from 'react'
import '../CSS/Testimonail.css'

const Testimonial = () => {
  const [toggleTab, setToggleTab] = useState(2)

  const toggleState = (index) => {
    setToggleTab(index)
  }

  return (
    <Fragment>
      <section className="testimonial">
        <div className="testi-tittle">
          <h2>
            {' '}
            What <span> Client Say</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            temporibus consequuntur dicta ullam illo facere.
          </p>
          <div className="testi-line"></div>
        </div>

        <div className="container">
          <div className="tabs">
            <div
              className={
                toggleTab === 1 ? 'single-tab active-tab' : 'single-tab'
              }
              onClick={() => toggleState(1)}
            ></div>

            <div
              className={
                toggleTab === 2 ? 'single-tab active-tab' : 'single-tab'
              }
              onClick={() => toggleState(2)}
            ></div>

            <div
              className={
                toggleTab === 3 ? 'single-tab active-tab' : 'single-tab'
              }
              onClick={() => toggleState(3)}
            ></div>
          </div>

          <div className="tab-content">
            {/* Tab-1 Content */}

            <div
              className={
                toggleTab === 1
                  ? 'testi-content active-content'
                  : 'testi-content'
              }
            >
              <div className="user-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  perferendis deleniti unde quae recusandae alias blanditiis
                  veniam accusantium pariatur ab!
                </p>
                <h4>Robert Jonson</h4>
              </div>
            </div>

            {/* Tab-2 Content */}

            <div
              className={
                toggleTab === 2
                  ? 'testi-content active-content'
                  : 'testi-content'
              }
            >
              <div className="user-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  perferendis deleniti unde quae recusandae alias blanditiis
                  veniam accusantium pariatur ab!
                </p>
                <h4>Tom Hardy</h4>
              </div>
            </div>

            {/* Tab-3 Content */}

            <div
              className={
                toggleTab === 3
                  ? 'testi-content active-content'
                  : 'testi-content'
              }
            >
              <div className="user-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  perferendis deleniti unde quae recusandae alias blanditiis
                  veniam accusantium pariatur ab!
                </p>
                <h4>Tony Stark</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Testimonial
