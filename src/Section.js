import React from 'react'
import { useGlobalContext } from './context'

const Section = () => {
  const { project, navbar } = useGlobalContext()
  return (
    <>
      {navbar.map((item, index) => {
        return (
          <section className='section' id={item} key={index}>
            <div className='section-title'>
              <h2>{item}</h2>
              <div className='underline'></div>
            </div>
            <div className='project-center'>
              {project
                .filter((i) => i.project === item)
                .map((j, index) => {
                  return (
                    <a href={j.url} key={index}>
                      <article className='project' key={index}>
                        <div className='img-container'>
                          <img src={j.img} alt={j.title} />
                        </div>
                        <div className='project-footer'>
                          <h4>{j.title}</h4>
                          <p>
                            <i>{j.project} project</i>
                          </p>
                        </div>
                      </article>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Section
