import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'

export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim
      title='Resume'
      id='resume'
      description='A resume for Sean Lawrence, a modern web developer based out of Chicago, IL.'
      image='../img/sean_lawrence.jpg'
      imageDescription='Profile image for Sean Lawrence'
      metaDate='2017-12-11'
      url='https://seanlawrence.co/resume'
    >
      <section
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query ResumePageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
}`