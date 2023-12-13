import React from 'react';
import Header from "../Components/header";
import { Col, Row ,Image, Button } from 'react-bootstrap';
import SeccionImg from "../assets/img/sistemas opertaivos.jpg";
import SeccionImg2 from "../assets/img/inicio.jpg"
import Navegarimg from "../assets/img/navegar.png"
import Footer from '../Components/Footer';
const Inicio = () => {
  return (
    <div>
        <Header/>
        <seccion>
            <Row className='Divs'>
                <Col xs={12} xl={5}>
                <div id="imagenS">
                <Image src={SeccionImg2} fluid />;

                </div>
                </Col>
                <Col>
                <div id="Secciones">
                    <h1>Inicio</h1>
                    <p>Software es un término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.</p>
                    <p>Comúnmente se utiliza este término para referirse de una forma muy genérica a los programas de un dispositivo informático, sin embargo, el software abarca todo aquello que es intangible en un sistema computacional.</p>
                    <p>Software es un término procedente del idioma inglés, que es aceptado por la RAE y que no posee una traducción que se ajuste al español.</p>
                </div>               
                </Col>
            </Row>
        </seccion>
        <seccion>
            <Row className='Divs2'>               
                <Col>
                <div id="Secciones">
                    <h1>Tipos de software</h1>
                    <p>De forma genérica se pueden distinguir varios tipos de software en función del uso o utilidad:</p>
                    <h2>Software de sistema</h2>
                    <p>Es el programa responsable de la ejecución de todas las aplicaciones necesarias para que un sistema opere correctamente. Suele confundirse con el sistema operativo pero va más allá, ya que también incluye las herramientas de optimización, los controladores de dispositivo y los servidores, entre otros componentes.</p>
                    <div className='button'>
                    <Button href='/Microsoft' variant='primary'>Microsoft</Button>{""}
                    <Button href='/MacOS' variant='light'>MacOS</Button>{""}
                    <Button href='/Android' variant='success'>Android</Button>{""}
                    <Button href='/Linux' variant='secondary'>Linux</Button>{""}
                    </div>
                    <h2>Software de aplicación</h2>
                    <p>
                    Un software de aplicación es un programa diseñado para facilitar algunas tareas específicas para cualquier medio informático, ya sea en computadores, tablets o celulares.
                    </p>
                    <p>
                    Los videojuegos, los programas de diseño asistido (como CAD), el software utilizado en las telecomunicaciones, las aplicaciones de productividad empresarial o educativa son algunos ejemplos de este tipo de programas.
                    </p>
                    <div className='button'>
                    <Button href='/Google' variant='light'>Google Chrome</Button>{""}
                    <Button href='/Brave' variant='light'>Brave Browser</Button>{""}
                    </div>
                </div>               
                </Col>
                <Col xs={12} xl={5}>
                <div className="imagenS">
                <Image src={SeccionImg} width={500} />;
                <Image src={Navegarimg} width={500} />;

                </div>
                </Col>
            </Row>
        </seccion>
        <Footer/>
    </div>
   
  )
}

export default Inicio;
