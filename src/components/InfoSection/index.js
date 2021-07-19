import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img } from './InfoElements'
import img from '../../images/img2.JPG'


const InfoSection = () => {
  const imgStart = true;
  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Conócenos</TopLine>
                <Heading>Nacimos a partir del sueño de una pequeña</Heading>
                <Subtitle>Que desde hace muchos años anhelaba que su casa de descanso se convirtiera en un lugar para todas las familias.</Subtitle>
                {/* <BtnWrap>
                  <Button>Visítanos</Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt='foto1' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
