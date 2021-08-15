import React from 'react';
import { Link } from "react-router-dom"
import "./NoRoute.css"

export const NoRoute = () => {


    return (
        <div className="container">
            <h5 className="title">Esta página no existe</h5>
            <Link to="/" className="backHome">Volver a Biblioteca Viajera Digital JALP</Link>
        </div>
    )

}