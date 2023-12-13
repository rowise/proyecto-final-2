import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Row,Col,Image } from 'react-bootstrap'
import Androidimg from "../assets/img/carru5.jpg"
import AndroidFundador from "../assets/img/fundadorAndroid.jpg"
const Android = () => {
  return (
    <div>
      <Header/>
      <div className='Divs'>
            <Row>
                <Col>
                <h1>Android</h1>
                <p>En el año 2005, Google compró Android y la convirtió en una subsidiaria completa. Rubin, Miner y White pasaron a formar parte de Google tras la operación. La información en aquel entonces escaseaba acerca de qué proporcionaría Android a Google, y los rumores decían que la empresa del buscador entraría en el mercado móvil. Andy Rubin se puso manos a la obra y creó una plataforma móvil potenciada por el kernel Linux. Google prometió a fabricantes y operadoras un sistema flexible y actualizable.</p>
                <p>Pasó el tiempo y hasta el año 2007, con la presentación del consorcio tecnológico Open Handset Alliance. En el que estaban empresas como HTC, Samsung, T-Mobile, Qualcomm y la propia Google, no se anunció oficialmente la existencia de Android. El progreso de Android fue positivo a partir de ese momento. Y no se tardó en ver en las tiendas el HTC Dream, en 2008, que sería el primer móvil en hacer uso de la plataforma operativa. Desde entonces Google ha cumplido con las promesas relacionadas con Android. El sistema ha llegado a todo tipo de plataformas y se ha actualizado, cada vez tomando como referencia un postre o dulce reconocible.

</p>
                </Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={Androidimg} width={200} height={400}/>
            </Row>
            </div>
        </div>
        <div className='Divs2'>
            <Row>
                <Col>
                <h1>Rich Miner,Nick Sears, Chris White y Andy Rubin</h1>
                <p>Android nació en el año 2003 de la mano de Rich Miner, Nick Sears, Chris White y Andy Rubin. Este grupo tenía la intención de crear dispositivos móviles que fueran más conscientes de la localización y las preferencias de los usuarios. Los comienzos de Android, totalmente en secreto, no fueron sencillos. El presupuesto se le redujo a Rubin a cero, y sólo un préstamo de Steve Perlman, íntimo amigo de Rubin, le permitió salir adelante.</p>
                
                </Col>
                <Col>
            <div className='videos'>
                <Image src={AndroidFundador} height={600}/>
            
            </div>
            </Col>
            </Row>
        </div>

<Footer/>
    </div>
    
  )
}

export default Android