import React from 'react'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { project } = useGlobalContext()
  const allProjects = ['home', ...new Set(project.map((item) => item.project))]

  return (
    <>
      {allProjects.map((text, index) => {
        return (
          <li key={index}>
            <a
              href='#'
              onClick={(e) => {
                let scroll = document.getElementById(text)
                e.preventDefault() // Stop Page Reloading
                scroll &&
                  scroll.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {text}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default Sidebar
