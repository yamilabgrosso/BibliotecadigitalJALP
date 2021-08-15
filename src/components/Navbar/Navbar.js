import "./Navbar.css"
import logo from "../../multimedia/Logo.png";
import { NavLink } from "react-router-dom"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



export const Navbar = () => {

  return (

    <div className="containerHeader">
      <div className="topbar">
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <NavLink activeClassName="activeLinkToPage" className="linkToPage" exact to='/'>Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid logoandseeker">
          <img src={logo} alt="" width="100" className="d-inline-block align-text-top"></img>
          <p className="text-center">Biblioteca Viajera Digital Jalp</p>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          Biblioteca JALP
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categoría/libros de texto'>Libros de texto</NavLink>
              </li>
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categoría/cuentos'>Cuentos</NavLink>
              </li>
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categoría/novelas'>Novelas</NavLink>
              </li>
              <li className=" nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categoría/leyendas'>Leyendas</NavLink>
              </li>
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categoría/poemas'>Poemas</NavLink>
              </li>
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/libros'>Ver todos</NavLink>
              </li>
              <li className="nav-item linkCategories">
                <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/'>Actividades</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}