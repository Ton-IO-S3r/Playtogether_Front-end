import React, {Fragment, useState} from 'react'
import { Spin as Hamburger} from 'hamburger-react'
import Button from 'components/Buttons/CallActionBtn'
//RUTAS
import { Link } from 'react-router-dom'
//IMAGENES
import logo from 'assets/icons/PT_Logo.svg'
import {photoAPI, AUTH_TOKEN, AUTH_ID} from 'Constants/API'
//ESTILOS
import './navbar.scss'

const Navbar = (props) => {
    const [show, setShow] = useState(false)
    
    let isLogin = false
     
    if (!AUTH_TOKEN && !AUTH_ID) {
	    isLogin = false
    }else{
        isLogin = true
    }

    const handleLogOut = () =>{
       
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = "/";

    }
    
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
                                        <Link type="button" className="btn-join" to='/unirse/'>Unete!</Link>
                                    </li>
                                </ul>
                                )
                                :
                                (
                                    <ul className="navbar-nav">
                                    <li className="nav-item align-self-center mx-3">
                                        <Link className="search-games" to='/partidos'>Buscar Partidos</Link>
                                    </li>
                                    <li className="nav-item align-self-center mx-4">
                                        <Link className="search-games" to='/crear-partido/'>Crear Partido</Link>
                                    </li>
                                    {/* <li className="nav-item align-self-center ms-5">
                                        <Link type="button" className="btn-join" to='/unirse/'>Unete!</Link>
                                    </li> */}
                                    <div className="nav-photo" onClick={()=>{setShow(!show)}}>
                                    {/* <Link to={`/usuarios/${AUTH_ID}`}> */}
                                    <img src={`${photoAPI}${AUTH_ID}/avatar`}/>
                                    {/* </Link> */}
                                    

                                    </div>
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
                            <Link type="button" className="btn-full" to='/unirse/'>Unete!</Link>
                        </div>
                    </div>
                </div>


            )
            :
            (


                <div className="navbar-nav">
                    <div className="nav-item align-self-center mt-4 ">
                        <Link className="a-menu" to={`/usuarios/${AUTH_ID}`}>Ver Perfil</Link>
                    </div>
                    <div className="nav-item align-self-center mt-4 ">
                        <Link className="a-menu" to='/partidos/'>Buscar Partidos</Link>
                    </div>
                    <div className="nav-item align-self-center mt-4 ">
                        <Link className="a-menu" to='/crear-partido/'>Crear Partidos</Link>
                    </div>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <div className="nav-item align-self-center ">
                            {/* <Link type="button" className=" btn-outline" >Cerrar Sesion</Link> */}
                            <Button onClick={handleLogOut} style={{backgroundColor: "transparent",color: "#28804B"}} text="Cerrar Sesion"/>
                        </div>
                        
                    </div>
                </div>
            )
            }
                    
            </div>
        </div>
        {show ? (
            <div className="floating-menu d-none d-lg-block" >
                <div className="d-flex flex-column">
                    <Link className="align-self-center mt-4 a-menu" to={`/usuarios/${AUTH_ID}`}>Ver Perfil</Link>
                    <div className="align-self-center ">
                        {/* <Link type="button" className=" btn-outline" >Cerrar Sesion</Link> */}
                        <Button className="btn-outline" style={{backgroundColor: "transparent",color: "#28804B"}} onClick={handleLogOut} text="Cerrar Sesion"/>
                    </div>
                </div>
            </div>
      ) : (
        <div></div>
      )}
        
        </Fragment>
        
    )
}

export default Navbar