import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Row,Col,Image } from 'react-bootstrap'
import Linuximg from "../assets/img/carru6.png"
import LinuxFundador from "../assets/img/fundadorLinux.jpg"
const Linux = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>Linux</h1>
                <p>En 1991, mientras estudiaba ciencias de la computación en la Universidad de Helsinki, Linus Torvalds inició un proyecto que luego se convirtió en el núcleo Linux. Escribió el programa específicamente para el hardware que estaba usando e independiente de un sistema operativo porque quería usar las funciones de su nueva PC con un procesador 80386. El desarrollo se realizó en MINIX utilizando el compilador de C GNU
                    </p></Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={Linuximg} width={200} height={400}/>
            </Row>
            </div>
        </div>
        <div className='Divs2'>
            <Row>
                <Col>
                <h1>Linus Torvalds</h1>
                <p>Linus Torvalds había querido llamar a su invento Freax, una palabra combinada de «free», «freak» y «x» (en alusión a Unix). Al comienzo de su trabajo en el sistema, almacenó los archivos con el nombre «Freax» durante aproximadamente medio año. Torvalds ya había considerado el nombre «Linux», pero inicialmente lo descartó por considerarlo demasiado egoísta.</p>
                </Col>
                <Col>
            <div className='videos'>
                <Image src={LinuxFundador} height={600}/>
            
            </div>
            </Col>
            </Row>
        </div>
        
        <Footer/>
    </div>
    
  )
}

export default Linux