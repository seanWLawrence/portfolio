import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import Logo from '../images/logo.png'
import RESUME from '../data/sean_lawrence_resume_web_developer.pdf'

export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim
      title='Resume'
      id='resume'
      description='A resume for Sean Lawrence, a modern web developer based out of Chicago, IL.'
      image={Logo}
      imageDescription='Profile image for Sean Lawrence'
      metaDate='2017-12-11'
      url='https://seanlawrence.co/resume'
    >
      <p>Download <a href={RESUME}>PDF version</a>.</p>
      <section
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query ResumePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
}`