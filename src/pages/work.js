import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import ContentWrapper from '../components/ContentWrapper'

const projects = WORK_DATA.projects

const Work = () => (
  <ContentWrapper title='Work' id='work'>
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
  </ContentWrapper>
)



export default Work