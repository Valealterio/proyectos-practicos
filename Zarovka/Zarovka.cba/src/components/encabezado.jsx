import "../style/encabezado.css"

/* primer componente 
export default function Encabezado() {
    return (
      <div className="encabezado">
        <h1> Zarovka: Diseño y calidad en cada detalle </h1>
        <button className="boton"> ver productos </button>
      </div>
    )
  }
  */



  /* intento de componente por separado */ 

function Titulo(){
  return(
    <h1>Zarovka: Diseño y calidad en cada detalle</h1>
  )
}

function Boton(){
  return(
    <button className="boton" >ver productos</button>
  )
}

export default function Encabezado() {
  return (
    <div className="encabezado">
    <Titulo />
    <Boton />
    </div>
  )
}