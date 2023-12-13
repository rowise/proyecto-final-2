import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Row,Col,Image } from 'react-bootstrap'
import Braveimg from "../assets/img/logoBrave.jpg"
const Brave = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>Brave Browser</h1>
                <p>El navegador Brave fue fundado por Brendan Eich, quien también es el creador del lenguaje de programación Javascript y co-fundador de Mozilla Firefox. El objetivo principal de Brave es mejorar la experiencia de navegación en línea al mismo tiempo que protege la privacidad del usuario.</p>
                <p>Desde su lanzamiento en 2016, el navegador web Brave ha ganado una base de usuarios significativa. En 2019, la compañía anunció que había alcanzado los 8.7 millones de usuarios activos mensuales. En 2020, ese número aumentó a más de 16 millones de usuarios activos mensuales.</p>
                <p>En cuanto a la distribución geográfica de los usuarios de Brave, los EE. UU. lideran con el mayor número de usuarios, seguidos de cerca por Europa y Asia. También se informa que la base de usuarios de Brave está en constante crecimiento a medida que más personas buscan una alternativa más segura y privada a los navegadores estándar.</p>
                <h2>Caracteristicas</h2>
                <p>Bloqueo automático de anuncios y rastreadores de sitios web: Una de las principales características que hacen de Brave un navegador seguro y privado es su capacidad para bloquear anuncios molestos y rastreadores de sitios web. Esta característica no solo mejora la experiencia de navegación del usuario al evitar anuncios no deseados, sino que también aumenta la velocidad y la fluidez de la navegación.</p>
                <p>Sistema de recompensas de criptomonedas: Brave ofrece a sus usuarios un sistema de recompensas de criptomonedas que les permite ganar dinero mientras navegan en línea. El navegador utiliza una moneda digital llamada Basic Attention Token (BAT) que se otorga a los usuarios por ver anuncios seleccionados. Los usuarios pueden contribuir a sitios web y creadores de contenido con BAT, lo que ayuda a generar un ecosistema de contenidos más justo y beneficia tanto a los usuarios como a los creadores.</p>
                <p>Carga más rápida de páginas: Brave utiliza un sistema que reduce la cantidad de datos que los sitios web tienen que transferir para cargar, lo que acelera la carga de las páginas y mejora la velocidad general de navegación.</p>
                <p>Modo de navegación privado: Al igual que otros navegadores, Brave ofrece un modo de navegación privado que permite al usuario navegar sin dejar rastros en el historial de navegación y sin que la información de búsqueda sea almacenada. Sin embargo, a diferencia de otros navegadores, Brave ofrece opciones adicionales de privacidad como bloqueo de huellas dactilares y bloqueo de scripts de terceros.</p>
                </Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={Braveimg} width={200} height={400}/>
            </Row>
            </div>
        </div>
        

<Footer/>
    </div>

  )
}

export default Brave