import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #010106;
  font-family: 'Gruppo', cursive;
  color: #FFFFFA;

`

export const FooterWrap = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width:860px){
    padding: 30px 40px;
  }
`

export const SocialMedia = styled.section`
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 20px auto;
  @media screen and (max-width:860px){
    flex-direction: column;
  };
`
export const SocialLogo = styled(Link)`
  color: #FFFFFA;
  text-decoration: none;
  font-size: 22px;
  letter-spacing: .05rem;
  font-weight: bolder;

  &:hover{
    color: #FFFFFA;
    cursor: pointer;
  }
`
export const WebSiteRights = styled.small`
  color: #FFFFFA;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: .02rem;
`

export const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-bottom: 15px;

`

export const SocialIconLink = styled.a`
  color: #FFFFFA;
  font-size: 25px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover{
    transform: scale(1.2);
    color: #FFFFFA;
    transition: all 0.2s ease-in-out;
  }
`