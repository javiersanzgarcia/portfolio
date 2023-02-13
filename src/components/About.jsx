import { useEffect } from 'react'
import person2 from '../assets/Images/bohemian-man-with-his-arms-crossed-removebg-preview.png'
import '../CSS/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' })
  })

  return (
    <>
      <section className="about" id="about">
        <div className="about-row">
          <div data-aos="fade-right" className="about-column">
            <div className="about-pic">
              <img src={person2} alt="Person" />
            </div>
          </div>

          <div data-aos="fade-left" className="about-column">
            <div className="about-text">
              <div className="about-tittle">
                <span className="span">About me</span>
                <h2>
                  Hi, My Name Is <span> Javier Sanz </span>
                </h2>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                officia natus adipisci debitis deleniti est odio, distinctio
                fugiat esse quaerat excepturi aut deserunt ducimus corrupti
                veritatis blanditiis praesentium labore nobis fugit non tenetur
                fuga repellat. Delectus labore id quos magnam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                magnam totam voluptates eum? Doloribus, labore laboriosam
                assumenda natus reprehenderit fuga
              </p>
              <a href="#" className="learn-btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
