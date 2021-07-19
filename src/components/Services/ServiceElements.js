import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #010606;
  font-family: 'Encode Sans', sans-serif;


  @media screen and (max-width:1000px){
    height: 1200px;
  }

  @media screen and (max-width:860px){
    height: 1240px;
  }
  @media screen and (max-width:768px){
    height: 1640px;
  }
  @media screen and (max-width:415px){
    height: 1790px;
  }
`

export const TopLine = styled.p`
  color: #E07D44;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-left: 90px;

  @media screen and (max-width:860px){
    margin-left: 60px;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 2.8rem;
  color: #FFFFFA;
  letter-spacing: 0.05rem;
  margin-bottom: 50px;
  letter-spacing: 0.05rem;
  margin-left: 90px;
  font-weight: 700;

  @media screen and (max-width:860px){
    font-size: 2.6rem;
    margin-left: 60px;
  }

  @media screen and (max-width:768px){
    font-size: 2.2rem;
  }
  @media screen and (max-width:480px){
    font-size: 2rem;
  }

`

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 45px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0px 80px;
    
  }
`
export const ServicesCard = styled.div`
  background: #FFFFFA;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;

  height: 530px;
  /* max-height: 740px; */
  padding-top: 10px;
  padding-bottom: 25px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out ;
  /* margin-left: 20px;
  margin-right: 20px; */

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* cursor: pointer; */
  }

  @media screen and (max-width: 1000px){
    height: 430px;
  }
  @media screen and (max-width: 415px){
    height: 490px;
  }
  
`
export const ServicesIcon = styled.img`
  height: 355px;
  width: 265px;
  margin-bottom: 22px;

  @media screen and (max-width: 1000px){
    height: 255px;
    width: 165px;
    margin-bottom: 15px;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #010606;
  margin-bottom: 10px;
  letter-spacing: 0.02rem;

  @media screen and (max-width: 1000px){
    font-size: 1.1rem;
    font-weight: 600;
  }
`
export const ServicesP = styled.p`
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.03rem;
  @media screen and (max-width: 1000px){
    font-size: 1rem;
    font-weight: 500;
  }
`