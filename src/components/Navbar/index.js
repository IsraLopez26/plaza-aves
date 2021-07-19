import React from 'react'
import { NavbarContainer, NavbarWrapper, NavbarLogoWrapper, NavbarLogo, NavbarLinkWrapper, NavbarItem, NavbarLink, LogoLink, MobileIcon } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import logo from '../../images/logo4.png'

const Navbar = ({ toogle }) => {

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarLogoWrapper>
            <LogoLink to='home' spy={true} exact='true' offset={-90}>
              <NavbarLogo src={logo} />
            </LogoLink>
          </NavbarLogoWrapper>
          <MobileIcon onClick={toogle}>
            <FaBars />
          </MobileIcon>
          <NavbarLinkWrapper>
            <NavbarItem>
              <NavbarLink to='about' spy={true} exact='true' offset={-85}>Conócenos</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to='services' spy={true} exact='true' offset={-85}>Servicios</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to='instal' spy={true} exact='true' offset={-85}>Instalaciones</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to='visit' spy={true} exact='true' offset={-85}>Visítanos</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to='contact' spy={true} exact='true' offset={-85}>Contacto</NavbarLink>
            </NavbarItem>
          </NavbarLinkWrapper>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
