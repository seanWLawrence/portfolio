import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const GridWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 50px;
  @media(max-width: 860px){
    flex-direction: column;
  }
  @media(max-width: 450px){
    align-items: flex-start;
  }
`

const TextWrapper = GridWrapper.extend`
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  width: 50%;
  margin-bottom: 0;
  @media(max-width: 860px){
    flex-direction: column;
    width: 80vw;
  }
`
const Title = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 42px;
  font-weight: 700;
  cursor: pointer;
  @media(max-width: 450px){
    font-size: 36px;
  }
  @media(min-width: 2000px){
    font-size: 64px;
  }
`

const Description = styled.p`
  @media(min-width: 2000px){
    font-size: 30px;
    line-height: 50px;
  }
`

const ArrowWrapper = TextWrapper.extend`
  align-items: center;
  height: 175px;
  @media(max-width: 860px){
    display: none;
  }
   @media(min-width: 1999px){
    height: 275px;
  }
`

const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
`

const Iframe = styled.iframe`
  box-shadow: 0 1px 9px #999;
  width: 80vw;
  height: 500px;
  margin: 36px auto;
  @media (max-width: 750px) {
    display: none;
  }
`
const Button = styled.a`
  padding: 10px 20px;
  color: #222;
  text-decoration: none;
  background-color: #ddd;
  border-radius: 5px;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #ccc;
  }
  @media (min-width: 750px) {
    display: none;
  }
`

const WorkProject = props => (
  <GridWrapper id={props.title}>
    <TextWrapper>
      <Title
        href={props.url}
        title={props.title}
        rel='noreferrer nofollow noopener'
        target='_blank'
      >
        {props.title}
      </Title>
      <Description>{props.description}</Description>
    </TextWrapper>
    <ArrowWrapper>
      <Arrow />
    </ArrowWrapper>
    <Button
      href={props.url}
      title={props.title}
      rel='noreferrer nofollow noopener'
      target='_blank'
    >
      Visit
      </Button>
    <Iframe src={props.url} title={props.title} frameBorder="0" allowFullScreen></Iframe>
  </GridWrapper>
)

export default WorkProject