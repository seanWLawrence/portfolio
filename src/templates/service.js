import React from 'react'
import styled from 'styled-components'

const ServiceWrapper = styled.section`
  margin-top: 50px;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 0;
`

const GIF = styled.iframe`
  height: 300px;
  width: 100%;
`

const Summary = Title.extend`
  color: #555;
  font-size: 24px;
  font-style: oblique;
`

const Description = Title.extend`
  color: #555;
  font-size: 20px;
`

const Service = props => (
  <ServiceWrapper>
    <Title>
      {props.title}
    </Title>
    <GIF src={props.gif_url}></GIF>
    <Summary>
      {props.summary}
    </Summary>
    <Description>
      {props.description}
    </Description>
  </ServiceWrapper>
)

export default Service