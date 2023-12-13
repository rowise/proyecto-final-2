import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import MacOSimg from "../assets/img/carru3.jpg"
import MacOSFundador from "../assets/img/fundadorMacOs.jpg"
import { Row,Col,Image } from 'react-bootstrap'
const MacOS = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>MacOS</h1>
                <p>macOS es la versión más reciente del sistema operativo de Apple. Aunque se define oficialmente como la "versión 10" del Mac OS, la "versión 9" tiene un código fuente, un sistema archivos, un diseño y soporte en hardware completamente distinto. El Mac OS ha sido el sistema operativo primario de Apple desde 1984.</p>
                <p>A diferencia de sus predecesores, Mac OS X es un sistema operativo tipo UNIX, el cual fue construido sobre la tecnología desarrollada por NeXT en la segunda mitad de los años 1980 hasta que Apple compró esta compañía a principios de 1997. Fue liberada inicialmente en 1999 la versión para servidores (Mac OS X Server 1.0), para luego ser liberada la versión para escritorio (Mac OS X v10.0) en marzo de 2001. Desde aquel entonces, diez versiones del Mac OS X han estado disponibles, siendo el Mac OS X v10.10 la más reciente. Las versiones del Mac OS X tiene un sobrenombre relacionado con grandes felinos, hasta OS X 10.9, versión en la que comenzaron a usarse sobrenombres de lugares de California (Mavericks y Yosemite).</p>
                </Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={MacOSimg} width={200} height={400}/>
            </Row>
            </div>
        </div>
        <div className='Divs2'>
            <Row>
                <Col>
                <h1>Steve Jobs</h1>
                <p>Steven Paul Jobs (San Francisco, 24 de febrero de 1955-Palo Alto, 5 de octubre de 2011)​ fue un empresario, diseñador industrial, magnate empresarial, propietario de medios e inversor estadounidense. Fue cofundador y presidente ejecutivo de Apple​ y máximo accionista individual de The Walt Disney Company.​</p>
                <p>Fundó Apple en 1976 junto con un amigo de la adolescencia, Steve Wozniak, con ayuda del excompañero de Jobs en Atari, Ronald Wayne, en el garaje de su casa. Aupado por el éxito del Apple II, Jobs obtuvo una gran relevancia pública, siendo portada de Time en 1982.14​ Contaba 27 años y ya era millonario gracias a la exitosa salida a bolsa de la compañía a finales del año anterior. La década de los 80 supuso la entrada de potentes competidores en el mercado de los ordenadores personales, lo que originó las primeras dificultades empresariales.</p>
                </Col>
                <Col>
            <div className='videos'>
                <Image src={MacOSFundador} height={600}/>
            
            </div>
            </Col>
            </Row>
        </div>

    <Footer/></div>
    
  )
}

export default MacOS
