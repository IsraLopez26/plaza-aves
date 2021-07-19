import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toogle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>

          {/* <SidebarLink to={sideLink.to} key={sideLink.index} onClick={toogle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{sideLink.name}</SidebarLink> */}
          <SidebarLink to='about' spy={true} exact='true' offset={-85} onClick={toogle}>Conócenos</SidebarLink>
          <SidebarLink to='services' spy={true} exact='true' offset={-85} onClick={toogle}>Servicios</SidebarLink>
          <SidebarLink to='instal' spy={true} exact='true' offset={-85} onClick={toogle}>Instalaciones</SidebarLink>
          <SidebarLink to='visit' spy={true} exact='true' offset={-85} onClick={toogle}>Visítanos</SidebarLink>
          <SidebarLink to='contact' spy={true} exact='true' offset={-85} onClick={toogle}>Contacto</SidebarLink>

        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In!</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
