import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'

const NotFoundPage = () => (
  <PageWrapperSlim
    title='Page not found'
    id='404'
    description='Page not found, please visit https://seanlawrence.co'

  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageWrapperSlim>
)

export default NotFoundPage
