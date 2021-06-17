import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cars = useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href='#' key={index}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>tesla account</a>
        <CustomMenu onClick={() => setMenuOpen(true)} />
      </RightMenu>
      <BurgerNav show={menuOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setMenuOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li href='#' key={index}>
              {car}
            </li>
          ))}
        <li href='#'>Existing Inventory</li>
        <li href='#'>Used Inventory</li>
        <li href='#'>Trade-in</li>
        <li href='#'>Cybertruck</li>
        <li href='#'>Roadaster</li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 760px) {
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 10px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
    text-transform: capitalize;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  font-weight: 600;
`
