import { Col } from "react-bootstrap"
import Mostrar from "./Mostrar"

const Formulario = () => {

   
  return (
    <div className="formulario">
        <h2>Formulario</h2>
        <h3>Danos tu opinion!!</h3>
        <form>
            <div className="label">
                <label>Nombre</label>
                <input type='text' id='nombre'/>
            </div>
            <div className="label">
                <label>Edad</label>
                <input type='text' id='edad'/>
            </div>
            <div className="label">
                <label>Tu opinion</label>
                <textarea type='text' id='opinion' cols={40} rows={10} />
            </div>
            <button type='submit' className="btns" onClick={()=>{Mostrar()}}> Enviar</button>

            <div className="salida">
                <div className="col">
                <h3>Hello</h3>
                <div className="saldato">
                    <input type="text" id="sal-nombre"/>
                </div>
                <h3>EDAD</h3>
                <div className="saldato">
                    <input type="text" id="sal-edad"/>
                </div>
                <h3>OPINION</h3>
                <div className="saldato">
                    <textarea type="text" id="sal-opinion" cols={40} rows={10}/>
                </div>
                </div>
            </div>

        </form>
    </div>
  ) 
}

export default Formulario