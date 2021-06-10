import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <TextItem>
        <h1>Model-S</h1>
        <p>Order online for touchless Delivery</p>
      </TextItem>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const TextItem = styled.div``
