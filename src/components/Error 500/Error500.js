import { Fragment } from "react"
import imgError  from "../../multimedia/error500.png"
import {Link} from "react-router-dom"



export const Error500 = () => {

    return (
        <Fragment>
        <img className="imgError" alt="error" src={imgError} />
        <Link to= "/">Volver al menú principal</Link>
        </Fragment>
    )

}