import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model-S'
        desc='Order Online For Touchless Delivery'
        leftBtntext='Custom Order'
        rightBtntext='Existing Inventory'
        backgroundImg='model-s.jpg'
      />

      <Section
        title='Model-Y'
        desc='Order Online For Touchless Delivery'
        leftBtntext='Custom Order'
        rightBtntext='Existing Inventory'
        backgroundImg='model-Y.jpg'
      />
      <Section
        title='Model-3'
        desc='Order Online For Touchless Delivery'
        leftBtntext='Custom Order'
        rightBtntext='Existing Inventory'
        backgroundImg='model-3.jpg'
      />
      <Section
        title='Model-X'
        desc='Order Online For Touchless Delivery'
        leftBtntext='Custom Order'
        rightBtntext='Existing Inventory'
        backgroundImg='model-x.jpg'
      />
      <Section
        title='Lowest Cost Solar Panels In America'
        desc='Money-back guarantee'
        leftBtntext='Order Now'
        rightBtntext='Learn more'
        backgroundImg='solar-panel.jpg'
      />
      <Section
        title='Solar for New Roofs'
        desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        leftBtntext='Order Now'
        rightBtntext='Learn more'
        backgroundImg='solar-roof.jpg'
      />
      <Section
        title='Accessories'
        leftBtntext='Order Now'
        backgroundImg='accessories.jpg'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
`
