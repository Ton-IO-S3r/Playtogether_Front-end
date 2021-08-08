import React, {Fragment} from 'react'
import { Spin as Hamburger} from 'hamburger-react'
//IMAGENES
import logo from 'assets/icons/PT_Logo.svg'
//ESTILOS
import './navbar.scss'

const Navbar = () => {
    return (
        <Fragment>
        {/* AQUI INICIA LA NAVBAR */}
            <div className="container-fluid navbar_pt primary_color">
                <div className="container p-0 primary_color">
                    <nav className="navbar navbar-expand-lg navbar-ligh primary_color p-0">
                        <a className="navbar-brand m-0" href="#">
                            <img src={logo} alt=""  className="d-inline-block align-text-top"/>
                        </a>
                        <a className="navbar-brand me-auto p-2 bd-highlight playtogether" href="#">PlayTogether!</a>
                        <button className="navbar-toggler p-0" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <Hamburger color="white"/>
                        </button>
                        <div className="d-none d-md-none d-lg-block nav-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item align-self-center">
                                        <a className="search-games" href="#">Buscar Partidos</a>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <a type="button" className="btn-outline" href="#">Iniciar Sesion</a>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <a type="button" className="btn-join"  href="#">Unete!</a>
                                    </li>
                                </ul>
                        </div>
                </nav>
            </div>
        </div>
        {/* MENU DESPEGABLE */}
        <div className="container-fluid bg-light  d-lg-none menu-nav">
            <div className="collapse navbar-collapse bg-light " id="navbarSupportedContent">
                    <div className="navbar-nav">
                                    
                        <div className="nav-item align-self-center mt-4 ">
                            <a className="a-menu" href="#">Buscar Partidos</a>
                        </div>
                        <div className="d-flex justify-content-between mt-5 mb-4">
                            <div className="nav-item align-self-center ">
                                <button type="button" className="btn-outline" href="#">Iniciar Sesion</button>
                            </div>
                            <div className="nav-item align-self-center ">
                                <a type="button" className="btn-full" href="#">Unete!</a>
                            </div>
                        </div>
                                    
                                    
                    </div>
            </div>
        </div>
        </Fragment>
        
    )
}

export default Navbar