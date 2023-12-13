import React from 'react'
import { Carousel ,Image} from 'react-bootstrap'
import Carru1 from "../assets/img/carru1.jpg"
import Carru2 from "../assets/img/carru2.jpg"
import Carru3 from "../assets/img/carru3.jpg"
import Carru4 from "../assets/img/carru4.png"
import Carru5 from "../assets/img/carru5.jpg"
import Carru6 from "../assets/img/carru6.png"
import Carru7 from "../assets/img/carru7.jpg"
import Carru8 from "../assets/img/carru8.jpg"

const Carrusel = () => {
  return (
    <div className='carrusel'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={Carru1} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru2} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru3} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru4} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru5} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru6} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru7} width={600} height={500}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image src={Carru8} width={600} height={500}/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrusel