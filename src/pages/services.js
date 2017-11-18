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

const IframeWrapper = styled.section`
  position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
`

const Iframe = styled.iframe`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
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
