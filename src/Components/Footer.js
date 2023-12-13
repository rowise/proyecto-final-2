import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Footerimg from "../assets/img/sistemas opertaivos.jpg"
const Footer = () => {
  return (
    <div className='footer'>        
            <Row>
                <Col>
                <Image src={Footerimg} fluid height={100}/>
                </Col>
                <Col>
                <h3>@Copyright 2023</h3>
                <h5>Todos los derechos reservados</h5>
                <h6>Kevin Rodrigo Callisaya Espinoza</h6>
                </Col>
            </Row>       
    </div>
  )
}

export default Footer