import React from 'react'
import styled from 'styled-components'

const ServiceWrapper = styled.section`
  margin-top: 50px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 0;
  @media (max-width: 450px) {
    font-size: 28px;
  }
`
const titleStyle = Title.withComponent('blockquote')

const Summary = titleStyle.extend`
  color: #6a6a6a;
  font-size: 24px;
  font-style: oblique;
  border-left: 5px solid #555;
  padding: 25px;
  line-height: 35px;
  @media (max-width: 750px) {
    line-height: 30px;
    font-size: 20px;
    padding: 0;
    border-left: 0;
    margin: 0;
  }
`

const Description = styled.p`
  color: #555;
  font-size: 20px;
  line-height: 35px;
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 30px;
  }
`

const GIFWrapper = styled.section`
  position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
  margin-bottom: 75px;
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