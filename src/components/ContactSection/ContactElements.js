import styled from "styled-components"

export const InfoContainer = styled.div`
  color:#010106;
  background: #FFFFFA;
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
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width:768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

  }
  
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width:768px){
    margin-bottom: 0px;
    padding: 0 0px;  
  }
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 70px;

  @media screen and (max-width:860px){
    margin-left: 30px;
  }

  @media screen and (max-width:768px){
    margin-left: 0px;
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
  @media screen and (max-width:768px){
    margin-top: 50px;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #010106;
  letter-spacing: 0.05rem;
@media screen and (max-width:400px){
    font-size: 38px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010106;
  letter-spacing: 0.02rem;
  @media screen and (max-width:400px){
    font-size: 15px;
  }
`

export const FormWrap = styled.div`
  width: 500px;
  height: 500px;
  /* background-color: rgba(240,240,240,0.8); */
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width:860px){
    width: 450px;
  }
  @media screen and (max-width:768px){
    width: 600px;
    height: 500px;
    margin-bottom: 180px;
  }
  @media screen and (max-width:625px){
    width: 500px;
    height: 500px;
    margin-bottom: 180px;
  }
  @media screen and (max-width:530px){
    width: 450px;
    height: 500px;
    margin-bottom: 180px;
  }
  @media screen and (max-width:455px){
    width: 380px;
    height: 500px;
    margin-bottom: 180px;
  }
  @media screen and (max-width:380px){
    width: 350px;
    height: 500px;
    margin-bottom: 180px;
  }
`
export const MapH1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: .05rem;
  font-weight: 700;
  margin-bottom: 15px;
`

export const MapH2 = styled.h1`
  font-size: 1.5rem;
  letter-spacing: .05rem;
  font-weight: 400;
`