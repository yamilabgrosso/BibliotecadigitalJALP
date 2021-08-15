import "./Footer.css"
import facebook from "../../icon/facebook.png"
import instagram from "../../icon/instagram.png"
import youtube from "../../icon/youtube.png"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Footer = () => {

  return (

    <div className="container my-5">
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">

            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://instagram.com/grupo_jalp?utm_medium=copy_link" role="button" data-mdb-ripple-color="dark">
              <i><img className="icon" src={instagram} alt="instagram" /></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://youtube.com/c/GrupoJuntosALaPar" role="button" data-mdb-ripple-color="dark">
              <i><img className="icon" src={youtube} alt="instagram" /></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/grupo.jalp" role="button" data-mdb-ripple-color="dark">
              <i><img className="icon" src={facebook} alt="facebook" /></i>
            </a>

          </section>
        </div>
        <div className="text-center text-dark p-3">
          Biblioteca Viajera Digital JALP
        </div>
      </footer>
    </div>

  )
}
