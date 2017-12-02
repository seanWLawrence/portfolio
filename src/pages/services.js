import React from 'react'
import styled from "styled-components"
import SERVICES_DATA from '../data/services'
import ServiceSection from '../Components/ServiceSection'
import PageTitle from '../components/PageTitle'

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
`

const Services = () => (
  <PageTitle title='Services'
    description={SERVICES_DATA.description}>
    <ServicesWrapper>
      {
        SERVICES_DATA.services.map(service =>
          <ServiceSection
            title={service.title}
            summary={service.summary}
            description={service.description}
            key={service.title}
            gif_url={service.gif_url}
          />
        )
      }
    </ServicesWrapper>
  </PageTitle>
)

export default Services
