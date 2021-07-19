import styled from "styled-components"

export const InfoContainer = styled.div`
  color:#000;
  background: #010106;
  font-family: 'Encode Sans', sans-serif;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 780px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width:768px){
    height: 1000px;
    margin-right: 0;
  margin-left: 0;
  padding: 0 0px;
  }
  @media screen and (max-width:600px){
    width: 500px;
    padding: 0 34px;
  }
  @media screen and (max-width:510px){
    width: 450px;
    padding: 0 34px;
  }
  @media screen and (max-width:455px){
    width: 400px;
    padding: 0 34px;
  }
  @media screen and (max-width:405px){
    width: 320px;
    padding: 0 10px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width:768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
  }
  
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width:768){
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width:405px){
    padding: 0 15px;
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
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #FFFFFA;
  letter-spacing: 0.05rem;

  @media screen and (max-width:900px){
    font-size: 45px;

  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFA;
  letter-spacing: 0.02rem;
`

export const ImgWrap = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(240,240,240,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width:900px){
    width: 400px;
    height: 400px;
  }

   @media screen and (max-width:768px){
     justify-self: center;
    align-self: flex-start;
    margin-top: -300px;
  }
  @media screen and (max-width:455px){
    width: 300px;
    height: 300px;
  }
`
export const MapH1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: .05rem;
  font-weight: 700;
  margin-bottom: 15px;
  @media screen and (max-width:455px){
    font-size: 2rem;
  }
`

export const MapH2 = styled.h1`
  font-size: 1.5rem;
  letter-spacing: .05rem;
  font-weight: 400;
  @media screen and (max-width:455px){
    font-size: 1rem;
  }
`