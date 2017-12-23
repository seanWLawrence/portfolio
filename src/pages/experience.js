import React from 'react'
import Project from '../components/Project'
import PROJECTS from '../data/PROJECTS'
import PageWrapperSlim from '../components/PageWrapperSlim'

const Projects = () => (
  <PageWrapperSlim
    title='Experience'
    id='experience'
    description='See my accomplishments and work history.'
    url='https://seanlawrence.co/experience'
  >
    {
      PROJECTS.map(project => {
        const { title, description, url, id } = project;
        return (
          <Project
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



export default Projects