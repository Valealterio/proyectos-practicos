import "../style/servicios.css"

/*
export default function Servicios(){
    return(
        <>
            <section className ="servicios">
                <h2>Servicios</h2>
                <p>Ademas de prouctos listos para comprar, ofrecemos servicios personalizables que incluyen diseño, produccion y mantenimiento de herreria y carpinteria</p>
                <div>
                    <h3>Catalogo</h3>
                    <table>
                        <li>Servicio 1</li>
                        <li>Servicio 2</li>
                        <li>Servicio 3</li>
                    </table>
                </div>
            </section>
        </>
    )
}
*/

/* intento de componente por separado */ 

export default function Servicios(){
    return(
        <section className ="servicios">
            <Texto />
            <Catalogo />
        </section>
    )
}

function Texto(){
    return(
        <>
        <h2>
            Servicios
        </h2>
        <p>
            Ademas de prouctos listos para comprar, ofrecemos servicios personalizables que incluyen diseño, produccion y mantenimiento de herreria y carpinteria
        </p>
        </>
    )
}

function Catalogo(){
    return(
        <>
        <h3>Catalogo</h3>
        <table>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
        </table>
        </>
    )
}