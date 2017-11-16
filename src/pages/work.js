import React from 'react'
import styled from 'styled-components'
import FullPageGrid from '../templates/fullPageGrid'
import WORK_DATA from '../data/work'

const projects = WORK_DATA.projects

const WorkWrapper = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 10vw 0 10vw;
`

const Work = () => (
  <WorkWrapper id='work'>
    {
      projects.map(project =>
        <FullPageGrid
          title={project.title}
          description={project.description}
          url={project.url}
          key={project.id}
        />
      )
    }
  </WorkWrapper>
)



export default Work