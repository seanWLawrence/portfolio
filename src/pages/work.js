import React from 'react'
import styled from 'styled-components'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import PageTitle from '../components/PageTitle'

const projects = WORK_DATA.projects

const WorkWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 10vw 0 10vw;
`

const Work = () => (
  <PageTitle title='Work'
    description={WORK_DATA.description}>
    <WorkWrapper id='work'>
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
    </WorkWrapper>
  </PageTitle>
)



export default Work