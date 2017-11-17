import React from 'react'
import styled from "styled-components"
import SERVICES_DATA from '../data/services'
import Service from '../templates/service'
import TitleWrapper from '../templates/titleWrapper'

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50vw;
`

const Services = () => (
  <TitleWrapper title='Services'>
    <ServicesWrapper>
      {
        SERVICES_DATA.map(service =>
          <Service
            title={service.title}
            summary={service.summary}
            description={service.description}
            key={service.title}
            gif_url={service.gif_url}
          />
        )
      }
    </ServicesWrapper>
  </TitleWrapper>
)

export default Services
