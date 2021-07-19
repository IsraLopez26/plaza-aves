import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import im1 from '../../images/carousel/im1.jpg'
import im2 from '../../images/carousel/im2.jpg'
import im3 from '../../images/carousel/im3.jpg'
import im5 from '../../images/carousel/im5.jpg'

const CarouselElement = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade={true} activeIndex={index} onSelect={handleSelect} controls={true} indicators={false} nextLabel={''} prevLabel={''} pause={false} variant='dark' wrap={true}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={im1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Estacionamiento Seguro</h5>
          <p>Guardias de seguridad capacitados, y Cámaras de Vigilancia las 24hrs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>¿Quieres ser parte de Plaza Aves?</h5>
          <p>Contáctanos para saber más de nuestros locales en renta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Conoce nuestra Terraza</h5>
          <p>Contamos con un local de dos pisos y terraza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={im5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Mercado Aves</h5>
          <p>Disfruta de un snack y una deliciosa bebida en nuestro Bar Familiar.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselElement
