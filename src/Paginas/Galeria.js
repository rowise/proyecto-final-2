import React from 'react'
import Header from '../Components/header'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Carrusel from '../Components/Carrusel'
import Videos from '../Components/Videos'
const Galeria = () => {
  return (
    <div>
        <Header/>
        <section className='Divs'>
            <Row>
                <h2>Galeria de fotos</h2>
                <Carrusel/>
            </Row>
        </section>
        <section className='Divs2'>
            <Row>
                <h2>Video</h2>
                <Videos/>
            </Row>
        </section>
        <Footer/>
    </div>
    
  )
}

export default Galeria