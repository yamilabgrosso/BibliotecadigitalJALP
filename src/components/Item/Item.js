import "./Item.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export const Item = ({ name, picture, bookId, pdf }) => {

    return (
 
            <div className="card">
                     <p className="cardTitle">{name}</p>
                    <img className="cardPicture" src={picture} alt="Imagen producto" />
                    <div class="text-center">
                    <a href={pdf} download target="_blank" rel="noreferrer">
                    <button type="button" class="btn btn-warning center-block">Descargar</button>
                    </a>
                    </div>
            </div>
       
    )
}