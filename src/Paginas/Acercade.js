import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Col, Image, Row } from 'react-bootstrap'
import Programador from "../assets/img/programador.png"

const Acercade = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>Acerca del programador</h1>
                <h2>Empresas mas impotantes de software</h2>
                <h2>Kevin Rodrigo Callisaya Espinoza</h2>
                <h2>Paralelo "A"</h2>
                <h2>Programacion Web II</h2>
                <h2>Doctora Tellez</h2>
                </Col>
                <Col>
                <Image src={Programador} width={500} height={500}/>
                </Col>
            </Row>
        </div>

        <Footer/>
    </div>
    
  )
}

export default Acercade