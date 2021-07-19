import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'


export const SidebarContainer = styled.aside`
  font-family: 'Gruppo', cursive;

  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #010106;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity : ${({ isOpen }) => (isOpen ? '97%' : '0%')};
  top : ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  
`

export const CloseIcon = styled(FaTimes)`
  color: #FFFFFA;
  font-weight: bolder;
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.1);
    color: #E07D44;
    transition: all 0.2s ease-in-out;
  }
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #FFFFFA;
  font-weight: bolder;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #FFFFFA;
  cursor: pointer;

  &:hover{
    color: #E07D44;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`
