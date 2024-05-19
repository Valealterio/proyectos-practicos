import "../style/contacto.css"

/* primer componente 
export default function Contacto(){
    return(
        <div className="contacto">
            <img src="" alt="logo" className="logo"/>
            <h2>Contactanos ahora</h2>
            <p>¿Listo para elevar el estilo de tu espacio? <br /> Hablemos de las infinitas posibilidades que los diseños de Zarovka pueden ofrecer. Contactanos para una consulta gratuita</p>
            <button className="boton">Enviar mensaje</button>
        </div>
    )
}
*/


/* intento de componente por separado */ 

function Texto(){
    return(
        <div>
            <h2>
                Contactanos ahora
            </h2>
            <p>
            ¿Listo para elevar el estilo de tu espacio?
            <br />
            Hablemos de las infinitas posibilidades que los diseños de Zarovka pueden ofrecer.
            Contactanos para una consulta gratuita.
        </p>
        </div>
    )
}

function Boton(){
    return(
        <button type="submit" className="boton">Enviar solicitud</button>
    )
}

const Imagen = () => (
    <img src="url_de_la_imagen" alt="logo" className="logo" />
);

export default function Contacto(){
    return(
        <div className="contacto">
        <Imagen />
        <Texto />
        <Boton />
        </div>
    )
}