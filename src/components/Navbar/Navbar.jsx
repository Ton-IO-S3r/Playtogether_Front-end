import React, {Fragment, useState} from 'react'
import { Spin as Hamburger} from 'hamburger-react'
//RUTAS
import { Link } from 'react-router-dom'
//IMAGENES
import logo from 'assets/icons/PT_Logo.svg'
//ESTILOS
import './navbar.scss'

const Navbar = (props) => {
    const {isLogin} = props
    return (
        <Fragment>
        {/* AQUI INICIA LA NAVBAR */}
            <div className="container-fluid navbar_pt primary_color">
                <div className="container p-0 primary_color">
                    <nav className="navbar navbar-expand-lg navbar-ligh primary_color p-0">
                        <a className="navbar-brand m-0" href="#">
                            <img src={logo} alt=""  className="d-inline-block align-text-top"/>
                        </a>
                        <Link className="navbar-brand me-auto p-2 bd-highlight playtogether" to='/'>PlayTogether!</Link>
                        {/* <a className="navbar-brand me-auto p-2 bd-highlight playtogether" href="#">PlayTogether!</a> */}
                        <button className="navbar-toggler p-0" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <Hamburger color="white"/>
                        </button>
                        <div className="d-none d-md-none d-lg-block nav-menu">
                            { 
                             isLogin === false ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item align-self-center">
                                        <Link className="search-games" to='/partidos'>Buscar Partidos</Link>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <Link type="button" className="btn-outline" to='/login'>Iniciar Sesion</Link>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <Link type="button" className="btn-join" to='/sign-in'>Unete!</Link>
                                    </li>
                                </ul>
                                )
                                :
                                (
                                    <ul className="navbar-nav">
                                    <li className="nav-item align-self-center">
                                        <Link className="search-games" to='/partidos'>Buscar Partidos</Link>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <Link type="button" className="d-none btn-outline" to='/login'>Iniciar Sesion</Link>
                                    </li>
                                    <li className="nav-item align-self-center ms-5">
                                        <Link type="button" className="btn-join" to='/sign-in'>Unete!</Link>
                                    </li>
                                    </ul>
                                )

                            
                            }
                                
                        </div>
                </nav>
            </div>
        </div>
        {/* MENU DESPEGABLE */}
        <div className="container-fluid bg-light  d-lg-none menu-nav">
            <div className="collapse navbar-collapse bg-light " id="navbarSupportedContent">
            {isLogin === false ? (
                <div className="navbar-nav">
                    <div className="nav-item align-self-center mt-4 ">
                        <Link className="a-menu" to='/search-games'>Buscar Partidos</Link>
                    </div>
                    <div className="d-flex justify-content-between mt-5 mb-4">
                        <div className="nav-item align-self-center ">
                            <Link type="button" className="btn-outline" to='/login'>Iniciar Sesion</Link>
                        </div>
                        <div className="nav-item align-self-center ">
                            <Link type="button" className="btn-full" to='/sign-in'>Unete!</Link>
                        </div>
                    </div>
                </div>


            )
            :
            (


                <div className="navbar-nav">
                    <div className="nav-item align-self-center mt-4 ">
                        <Link className="a-menu" to='/search-games'>Buscar Partidos</Link>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-4">
                        <div className="nav-item align-self-center ">
                            <Link type="button" className="d-none btn-outline" to='/login'>Iniciar Sesion</Link>
                        </div>
                        <div className="nav-item align-self-center ">
                            <Link type="button" className="btn-full" to='/sign-in'>Unete!</Link>
                        </div>
                    </div>
                </div>
            )
            }
                    
            </div>
        </div>
        </Fragment>
        
    )
}

export default Navbar