import Header from '../Components/header'
import Footer from '../Components/Footer'
import { Col, Image, Row } from 'react-bootstrap';
import Windows from "../assets/img/windows.png"
import WindowsFunda from "../assets/img/fundadorWindows.png"
export const Microsoft = () => {
  return (
    <div>
        <Header/>
        <div className='Divs'>
            <Row>
                <Col>
                <h1>Microsoft Windows</h1>
                <p>En 1985, Microsoft publica la primera versión de Windows, una interfaz gráfica de usuario (GUI) para su propio sistema operativo (MS-DOS) que había sido incluido en el PC de IBM y compatibles desde 1981.</p>
                <p>La primera versión de Windows lanzada el 20 de noviembre de 1985 nunca fue del todo potente, ni tampoco se hizo popular. Estuvo severamente limitada a causa de los recursos legales de Apple, que no permitió imitaciones de sus interfaces de usuario. Por ejemplo, allí las ventanas solo pudieron disponerse en mosaico sobre la pantalla y nunca pudieron solaparse u ocultarse unas a otras. Allí tampoco hubo papelera de reciclaje porque Apple pensó que tuvo la patente de este paradigma o concepto. Ambas limitaciones fueron eliminadas cuando el recurso de Apple fue rechazado en los tribunales. Windows 1.0 incluyó un programa simple de pintura de gráficos llamado Windows Paint, Windows Write un simple procesador de textos, un calendario de citas, un archivador de tarjetas, un bloc de notas, un reloj, un panel de control, una terminal de computadora, portapapeles y un controlador de RAM. También incluía el MS-DOS Executive y un juego llamado Revorse. Sin embargo, fueron consideradas como aplicaciones "de juguete" con poco atractivo para todos los usuarios profesionales y los ingenieros.</p>
                <p>Windows 2.0 salió al mercado en diciembre en 1987 y fue algo más popular que la versión inicial. Gran parte de esta popularidad ha sido recibida por la inclusión en forma de versión run-time de nuevas aplicaciones gráficas de Microsoft como Microsoft Excel y Microsoft Word para Windows. Además, recibió un gran impulso cuando Aldus PageMaker apareció en una versión de Windows, que anteriormente solo se ejecutaba en Macintosh. A diferencia de su predecesor, Windows 2.0 permitía por primera vez a las ventanas de aplicación superponerse entre sí e introdujo el soporte de gráficos VGA, aunque solo a 16 colores.</p>
                <p>Las versiones 2.0x usaban el modelo de memoria en modo real, que lo limitaba a un máximo de 1 megabyte de memoria. En dicha configuración, podría ejecutarse en otro multitarea como DESQview, que utilizaba el modo protegido 286. Estas pudieron cargarse desde el MS-DOS, ejecutando Windows a la vez que el programa, y cerrándolo al salir de ellas. Allí Windows todavía usó el microprocesador 8088 de Intel, así que estuvo limitado a 1 megabyte de memoria RAM; sin embargo, mucha gente consiguió hacerlo funcionar bajo sistemas multitareas como DesqView ..</p>

                </Col>
            </Row>
            <div className='videos'>
            <Row  >
                <Image src={Windows} width={200} height={400}/>
            </Row>
            </div>
        </div>
        <div className='Divs2'>
            <Row>
                <Col>
                <h1>Bill Gates</h1>
                <p>William Henry Gates III (Seattle, Washington; 28 de octubre de 1955), conocido como Bill Gates, es un magnate empresarial, desarrollador de software, inversor, autor y filántropo estadounidense. Es cofundador de Microsoft, junto con su difunto amigo de la infancia Paul Allen. Durante su carrera en Microsoft, Gates ocupó los cargos de presidente, director ejecutivo (CEO), presidente y arquitecto jefe de software, además de ser el mayor accionista individual hasta mayo de 2014. Fue uno de los principales empresarios de la revolución de las microcomputadoras de las décadas de 1970 y 1980.</p>
                
                </Col>
                <Col>
            <div className='videos'>
                <Image src={WindowsFunda} />
            
            </div>
            </Col>
            </Row>
        </div>
<Footer/>
    </div>
   
    
  )
}
export default Microsoft;