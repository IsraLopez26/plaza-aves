import styled from "styled-components"

export const InfoContainer = styled.div`
  color:#000;
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
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 ' 'col2'`)};
  }
  
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width:768px){
    padding: 0;
    margin-bottom: 0px;
  }
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width:768px){
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width:768px){
    padding: 0;
    margin-bottom: 0px;
    
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
  color: #010606;
  letter-spacing: 0.05rem;

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
  letter-spacing: 0.02rem;
  @media screen and (max-width: 768px){
    margin-bottom: 0px;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 405px;
  height: 100%;
  @media screen and (max-width: 768px){
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width:768px){
    margin:0;
    justify-self: flex-start;
    align-self: flex-start;
margin-top: -190px;
    width: 90%;
  }
  @media screen and (max-width:560px){
margin-top: -130px;
    width: 90%;
  }
`