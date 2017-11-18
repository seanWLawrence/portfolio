import React from 'react'
import styled from 'styled-components'

const ServiceWrapper = styled.section`
  margin-top: 50px;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 0;
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

const GIFWrapper = styled.section`
  position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
`

const GIF = styled.iframe`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const Service = props => (
  <ServiceWrapper>
    <Title>
      {props.title}
    </Title>
    <GIFWrapper>
      <GIF src={props.gif_url} frameBorder='0' allowFullScreen></GIF>
    </GIFWrapper>
    <Summary>
      {props.summary}
    </Summary>
    <Description>
      {props.description}
    </Description>
  </ServiceWrapper>
)

export default Service