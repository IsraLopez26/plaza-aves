import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, MapH1, MapH2 } from './LocateElements'


const LocateSection = () => {

  const imgStart = false;
  return (
    <>
      <InfoContainer id='visit'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Visítanos</TopLine>
                <Heading>Nos puedes encontrar en el Corazón de Jiutepec</Heading>
                <Subtitle>Estamos ubicados a 5 minutos de Cuernavaca, y 1 hora de la Ciudad de México.</Subtitle>
                <Subtitle>Encuéntranos en GoogleMaps y Waze.</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <MapH1>Plaza Aves</MapH1>
                <MapH2>Mapa de Localización Plaza Aves</MapH2>
                <MapH2>No disponible por el momento.</MapH2>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default LocateSection
