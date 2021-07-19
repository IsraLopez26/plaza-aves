import styled from 'styled-components'
import { Link } from 'react-scroll'
export const NavbarContainer = styled.nav`
  background: #FFFFFA;
  width: 100%;
  height: 90px;
  padding-top: 3px;
  top: 0;
  z-index: 100;
  position: sticky;
  font-family: 'Gruppo', cursive;
  border-bottom: solid 1px #E0E0E0;
  /* margin-top: -90px; */
  
`
export const NavbarWrapper = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 84px;
  /* opacity: 40%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 130px;
  padding-left: 160px;

  @media screen and (max-width:1170px){
padding-right: 90px;
  padding-left: 110px;
  }

  @media screen and (max-width:900px){
padding-left: 70px;
  }

  @media screen and (max-width:580px){
padding-left: 50px;
  }

`

export const LogoLink = styled(Link)`

`

export const NavbarLogoWrapper = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 90px; */
  /* background-color: green; */
`

export const NavbarLogo = styled.img`
  border-radius: 50%;
  width: 230px;
  cursor: pointer;
  transform: translateY(-26px);

  @media screen and (max-width:1170px){
width: 200;
  }

  @media screen and (max-width:1100px){
    width: 180px;
  }

   @media screen and (max-width:580px){
    width: 160px;
  }


`

export const MobileIcon = styled.div`
  display:none;
  @media screen and (max-width:860px){
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-160%,23%);
    font-size: 2.2rem;
    cursor: pointer;
    color: #E07D44;
  }
`

export const NavbarLinkWrapper = styled.ul`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media screen and (max-width:860px){
    display: none;
  }
`

export const NavbarItem = styled.li`
  height: 80px;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 8px;
  font-family: 'Gruppo', cursive;

`

export const NavbarLink = styled(Link)`
  color: #010606;
  display: flex;
  align-items: center;
  text-decoration: none; 
  padding: 0 1rem;
  height: 100%;
  transition: all 0.2s ease-in-out;
&:hover{
  color: #E07D44;
  transform: scale(1.05);
    font-weight: bolder;
    transition: all 0.2s ease-in-out;
    
  }
  &.active{
    color: #E07D44;
  }

  @media screen and (max-width:1170px){
font-size: 1.2rem
  }

  @media screen and (max-width:1080px){
font-size: 1.1rem
  }
`