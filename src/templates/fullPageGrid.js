import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const GridWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 50vh;
`

const ArrowWrapper = styled.i`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
`

const Iframe = styled.iframe`
  max-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const FullPageGrid = props => (
  <GridWrapper id={props.title}>
    <TextWrapper>
      <h2>
        <a href={props.url}>{props.title}</a>
      </h2>
      <p>{props.description}</p>
    </TextWrapper>
    <ArrowWrapper>
      <Arrow />
    </ArrowWrapper>
    <Iframe src={props.url} title={props.title} frameBorder="0" allowFullScreen></Iframe>
  </GridWrapper>
)

export default FullPageGrid