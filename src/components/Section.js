import React from 'react'
import styled from 'styled-components'

function Section({ title, desc, backgroundImg, leftBtntext, rightBtntext }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <TextItem>
        <h1>{title}</h1>
        <p>{desc}</p>
      </TextItem>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtntext}</LeftButton>
          {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`
const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-botttom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`

const DownArrow = styled.img`
  
  height: 40px;
  animation: animateDown infinite 1.5s;
  ove
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
