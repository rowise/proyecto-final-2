import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Row,Col,Image } from 'react-bootstrap'
import Googleimg from "../assets/img/carru7.jpg"
const Google = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>Google Chrome</h1>
                <p>Google Chrome es un navegador web del tipo software gratuito propietario que fue desarrollado por Google y apareció por primera vez para Windows en el año 2008. En la actualidad, cuenta con más de 900 millones de usuarios siendo así el navegador web más utilizado en todo el mundo. </p>
                <p>La versión Chrome que apareció el 15 de septiembre de 2008 vino de la mano de la compañía desarrolladora CodeWeavers; sin embargo se trataba de una versión no oficial derivada de Wine y de Developer Build 21 para Linux y Mac OS X. </p>
                <p>No es hasta febrero de 2012 que Google lanza Chrome para Android Beta que el navegador comienza a ser reconocido como tal. Se podía descargar Chrome en teléfonos inteligentes y tabletas con la posibilidad de abrir varias pestañas a la vez y sincronizarlas junto con marcadores con la versión de escritorio, modo incógnito y ver el historial de uso. En junio de 2012, Google actualiza el navegador y lo vuelve una versión estable para Android.</p>
                <p>Hoy en día, Google Chrome es el navegador web favorito de millones de personas alrededor del mundo. Con el paso de los años ha ido mejorando sus funciones y por ello vale la pena reconocer el mérito de Google que hizo posible la existencia de Chrome: el Proyecto Chromium.</p>
                </Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={Googleimg} width={200} height={400}/>
            </Row>
            </div>
        </div>
        

<Footer/>
    </div>
    
  )
}

export default Google