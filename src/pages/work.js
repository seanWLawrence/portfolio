import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK_DATA from '../data/work'
import PageWrapperSlim from '../components/PageWrapperSlim'

const projects = WORK_DATA.projects

const Work = () => (
  <PageWrapperSlim title='Work' id='work'>
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
  </PageWrapperSlim>
)



export default Work