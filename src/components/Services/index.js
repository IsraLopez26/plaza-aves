import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP, TopLine } from './ServiceElements'
import servicesData from './ServicesData'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <TopLine>Servicios</TopLine>
      <ServicesH1>Disfruta de nuestras amenidades</ServicesH1>
      <ServicesWrapper>

        {servicesData.map((service) => {
          return (
            <ServicesCard key={service.id}>
              <ServicesIcon src={service.icon} />
              <ServicesH2>{service.title}</ServicesH2>
              <ServicesP>{service.description}</ServicesP>
            </ServicesCard>
          )
        })}

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
