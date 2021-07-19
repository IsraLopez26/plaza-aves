import styled from 'styled-components'
import { Link } from 'react-scroll'

export const HeroContainer = styled.div`
  background-color: #171535;
  font-family: 'Encode Sans', sans-serif;
  color: #010606;
  width: 100%;
  height: 750px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  z-index: 1;
  position: relative;
`

export const HeroBackground = styled.div`
  position: absolute;
  /* top: -50px; */
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const BackImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #171535;
`

export const HeroWrapper = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
  /* justify-content: center; */
  /* padding: 10px 20px 10px; */
  background-color: rgba(245,245,245,0.5);
  width: 560px;
  height: 340px;
  margin-top: 40px;
  margin-left: 90px;
  border-radius: 8px;

  @media screen and (max-width:670px){
    margin-top: 30px;
    margin-left: 30px;
  }
  @media screen and (max-width:670px){
    margin-top: 30px;
    margin-left: 30px;
    width: 500px;
    height: 380px;
  }
  @media screen and (max-width:540px){
    margin-top: 10px;
    margin-left: 10px;
    width: 400px;
    height: 440px;
  }
`

export const HeroH1 = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 35px;
  letter-spacing: 0.2rem;

  @media screen and (max-width:670px){
    font-size: 2rem;
  }
  @media screen and (max-width:600px){
    font-size: 1.8rem;
  }
`

export const HeroP = styled.p`
  font-weight: 200;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  @media screen and (max-width:670px){
    font-size: 1.1em;
  }
`
export const HeroP2 = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 0px;
  margin-bottom: 15px;
`
export const HeroButton = styled(Link)`
  background: #E27D44;
  white-space: nowrap;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 180px;
  border-radius: 25px;
  font-weight: 500;
  padding: 13px 10px 12px;
  text-decoration: none;
  &:hover{
    background: #D16C31;
    transition: all 0.2s ease-out;
    text-decoration: none;
    color: #fff;


  }
`
