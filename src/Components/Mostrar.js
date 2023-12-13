function Mostrar(){
    const nom= document.getElementById("nombre").value;
    const eda= document.getElementById("edad").value;
    const opi= document.getElementById("opinion").value;

    (document.getElementById("sal-nombre").value)=nom;
    (document.getElementById("sal-edad").value)=eda;
    (document.getElementById("sal-opinion").value)=opi;
}
export default Mostrar