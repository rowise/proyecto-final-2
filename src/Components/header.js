import React from 'react'
import { Col, Row ,Image} from 'react-bootstrap';
import HeaderImg from "../assets/img/banner.jpg";
const header = () => {
  return (
    <div><section className='banner'>
    <Row>
        <Col md={6} className='Descripcion'>
            <h1>
                Software Mas Importantes
            </h1>
        </Col>
        <Col xs={2} md={3}>
            <Image src={HeaderImg} className='imagen' />
        </Col>
    </Row>
</section></div>
  )
}

export default header