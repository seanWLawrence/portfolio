import React from 'react'
import styled from "styled-components"

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 48px;
  color: #4f4f4f;
  width: 80vw;
  margin: 100px 0 0 0;
`
const HorizontalRule = styled.div`
  height: 1px;
  width: 80vw;
  margin: 10px auto;
  border-bottom: 5px solid #2D9CDB;
`

const Layout = props => (
  <TitleWrapper id={props.title}>
    <Title>
      {props.title}
    </Title>
    <HorizontalRule />
    {props.children}
  </TitleWrapper>
)

export default Layout
