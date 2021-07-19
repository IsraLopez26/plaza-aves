import React from 'react'
import { HeroContainer, HeroBackground, BackImage, HeroWrapper, HeroH1, HeroP, HeroP2, HeroButton } from './HeroElements'
import back from '../../images/heroback.JPG'
const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBackground>
        <BackImage src={back} />
      </HeroBackground>
      <HeroWrapper>
        <HeroH1>¡Bienvenido a Plaza Aves!</HeroH1>
        <HeroP>Ven y diviértete con tus amigos y familiares, en este paraíso en el corazón de Jiutepec. Podrás encontrar desde restaurantes y un bar familiar, hasta un circuito de aventuras.</HeroP>
        <HeroP2>¡Ya estamos abiertos!</HeroP2>
        <HeroButton to='contact' spy={true} exact='true' offset={-85}>Contáctanos</HeroButton>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
