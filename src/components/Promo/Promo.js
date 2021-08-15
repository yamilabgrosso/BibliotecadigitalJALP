import borges from "../../multimedia/Borges.png"
import "./Promo.css"
import { Fragment } from "react"

export const Promo = () => {

    return (
        <Fragment>
            <img src={borges} className="nba" alt="nba" />
            <div className="bibliotecaQueEsContainer">
            <h2 className="bibliotecaQueEs">La biblioteca digital JALP es un portal para que alumnos, 
                docentes y familias de escuelas rurales puedan acceder a libros de textos, 
                cuentos, leyendas, novelas y muchos títulos más para hacer viajar y volar la
                 imaginación.</h2>
                 </div>
        </Fragment>
    )
}