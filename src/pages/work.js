import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import PageTitle from '../components/PageTitle'

import '../styles/pages/work.scss'

const projects = WORK_DATA.projects

const Work = () => (
  <PageTitle title='Work'
    description={WORK_DATA.description}>
    <section id='work_wrapper'>
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
  </PageTitle>
)



export default Work