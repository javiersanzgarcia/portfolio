import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Resume.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Resume = () => {
  const { t } = useTranslation('global')
  const jobs = t('resume.jobs', { returnObjects: true })

  useEffect(() => {
    Aos.init({ duration: 1500, once: true, easing: 'ease' })
  }, [])
  return (
    <>
      <section className="resume">
        <div className="main-title">
          <h2>{t('resume.title')}</h2>
        </div>

        <div className="resume-row">
          <div className="res-col">
            <div className="timeline">
              <ul>
                {jobs.map((job, index) => (
                  <li key={index}>
                    <div
                      data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                      className="content"
                    >
                      <span className="date">{job.timeJob}</span>
                      <h5>{job.company}</h5>
                      <h4>{job.position}</h4>
                      {job.skills.map((skill, index) => (
                        <span key={index} className="textLeft">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
