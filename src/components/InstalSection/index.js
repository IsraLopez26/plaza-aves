import React from 'react'
import { InstalContainer, TopLine, InstalH1, CarouselContainer } from './InstalElements'
import CarouselElement from './CarouselElement'
import 'bootstrap/dist/css/bootstrap.min.css';

const InstalSection = () => {
  return (
    <>
      <InstalContainer id='instal'>
        <TopLine>Instalaciones</TopLine>
        <InstalH1>Conoce nuestras Instalaciones</InstalH1>
        <CarouselContainer>
          <CarouselElement />
        </CarouselContainer>
      </InstalContainer>
    </>
  )
}

export default InstalSection
