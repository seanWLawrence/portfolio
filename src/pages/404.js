import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <PageWrapperSlim
    title='Page not found'
    id='404'
    description='Page not found, please visit https://seanlawrence.co'

  >
  <h1>Whoops! Wrong page, sorry about that...</h1>
  <p>Go back to the <Link to="/">home page</Link> or check out my <Link to="/blog">blog</Link> though while you're here!</p>
  </PageWrapperSlim>
)

export default NotFoundPage
