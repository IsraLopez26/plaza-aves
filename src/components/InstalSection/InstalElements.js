import styled from 'styled-components'

export const InstalContainer = styled.div`
  background-color: #FFFFFA;
  height: 800px;
  font-family: 'Encode Sans', sans-serif;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:1000px){
    height: 750px;
  }

  @media screen and (max-width:900px){
    height: 730px;
  }
  @media screen and (max-width:670px){
    height: 680px;
  }
  @media screen and (max-width:600px){
    height: 600px;
  }
  @media screen and (max-width:500px){
    padding: 0 30px;
  }
`

export const TopLine = styled.p`
  color: #E07D44;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-right: 90px;
  margin-left: auto;
  margin-bottom: 16px;
  margin-top: 50px;
  @media screen and (max-width:900px){
    margin-top: 80px;
  }

  @media screen and (max-width:670px){
    margin-right: 60px;
  }
  @media screen and (max-width:600px){
    margin-right: 40px;
  }
`

export const InstalH1 = styled.h1`
  font-size: 2.8rem;
  color: #010606;
  letter-spacing: 0.05rem;
  margin-bottom: 30px;
  letter-spacing: 0.05rem;
  margin-right: 90px;
  margin-left: auto;
  font-weight: 700;

  @media screen and (max-width:768px){
    font-size: 2.4rem;
  }

  @media screen and (max-width:670px){
    font-size: 2.2rem;
    margin-right: 60px;
  }

  @media screen and (max-width:600px){
    margin-right: 40px;
    font-size: 2rem;
  }
   @media screen and (max-width:528px){
    margin-right: 40px;
    font-size: 1.8rem;
  }
  

`

export const CarouselContainer = styled.div`
  width: 69%;
  height: auto;
  background-color: #010106;
  align-self: center;
`