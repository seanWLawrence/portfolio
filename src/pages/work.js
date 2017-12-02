import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import PageTitle from '../components/PageTitle'

const projects = WORK_DATA.projects

const Work = () => (
  <section id='page_wrapper'>
    <PageTitle title='Work' id='work' />
    <section id='work'>
      {
        projects.map(project =>
          <WorkProject
            title={project.title}
            description={project.description}
            url={project.url}
            key={project.id}
          />
        )
      }
    </section>
  </section >
)



export default Work