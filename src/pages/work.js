import React from 'react'
import WorkProject from '../components/WorkProject'
import WORK from '../data/WORK'
import PageWrapperSlim from '../components/PageWrapperSlim'

const projects = WORK.projects

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