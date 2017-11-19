import React from 'react'
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  width: 80vw;
  margin: 100px 0 0 0;
  @media (maz-width: 450px) {
    font-size: 42px;
  }
`
const HorizontalRule = styled.div`
  height: 1px;
  width: 80vw;
  margin: 10px auto;
  border-bottom: 5px solid #2D9CDB;
`

const Description = styled.p`
  color: #616161;
  width: 80vw;
  margin-bottom: -75px;
`

const TitleWrapper = props => (
  <Wrapper id={props.title}>
    <Title>
      {props.title}
    </Title>
    <HorizontalRule />
    {
      (props.description)
        ? <Description>{props.description}</Description>
        : null
    }
    {props.children}
  </Wrapper>
)

export default TitleWrapper
