import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import PageWrapperWide from '../components/PageWrapperWide'

const projects = WORK_DATA.projects

const Work = () => (
  <PageWrapperWide title='Work' id='work'>
    {
      projects.map(project => {
        const { title, description, url, id } = project;
        return (
          <WorkProject
            title={title}
            description={description}
            url={url}
            key={id}
          />
        )
      })
    }
  </PageWrapperWide>
)



export default Work