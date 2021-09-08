import React, { Fragment, useRef} from 'react'
//COMPONENTES
import Form from 'react-bootstrap/Form'
import Card from 'components/Cards/Card'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
//ESTILOS Y COMPONENTES BOOSTRAP
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './login.scss'
//RUTAS
import { Link } from 'react-router-dom'
//NOTIFICACIONES
import Toast from 'components/Toast/Toast'
//
import {notifyWarning} from 'Functions/toastFunc'
import {API_URL} from 'Constants/API'

const Login = () => {

//REFERECIA DE LOS INPUTS
const usernRef = useRef()
const pwdRef = useRef()



//FUNCION PARA HACER LOGIN A LA API (POST)
const loginUser = async(username,password) => {
  try{
    const response = await fetch(`${API_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    });
    return await response.json();
  } catch (error){
    console.log(error)
  }
  
}

const handleSubmit = async(e) => {
  e.preventDefault();
  //INPUTS
  const username = usernRef.current.value
  const password = pwdRef.current.value

  //VALIDAR CAMPOS VACIOS
  if (username === '' || password === ''){
    //ALERTA
    notifyWarning("Nombre de usuario o contraseña incorrectos")
    return
  }

    //Se pasan los valores de los inputs a la funcion del POST
    const response = await loginUser(username,password);

    //VALIDAR SI SE RECIBE UN TOKEN DE ACCESO
	  if (response.token) {
      //SE ALMACENA EL TOKEN EN LOCALSTORAGE
	  	localStorage.setItem("token", response.token);
      localStorage.setItem("id", response.user_id);
      localStorage.setItem("player_photo", response.player_photo)
      const id=localStorage.getItem("id")
      //SE REDIRIGE A LA PAGINA DE BUSCAR PARTIDO
    	// window.location.href = `/usuarios/${id}`;
      window.location.href = `/usuarios/${id}`;
	  }else{
      //SI NO SE RECIBE EL TOKEN DE ACCESO SE MANDA ALERTA CON ERROR DE CREDENCIALES
      notifyWarning("Nombre de usuario o contraseña incorrectos")
      usernRef.current.value = null
      pwdRef.current.value = null
      return
    }

  }
    return (
        <div>
          <Nav />
          <Container fluid className="container-login">
            <Row>
              <Container>
                <Row>
                <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
                <Col md="6" lg="4" xl="4" className="col-login">
                  <Card className="flex-column p-3 mt-5 mb-5" content={
                    <Fragment>
                      <h1 className="h1-login mt-4 mb-4">Inicia Sesión</h1>
                      <Form className="d-flex flex-column" onSubmit={handleSubmit} >
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label className="text-secondary">Nombre de Usuario:</Form.Label>
                          {/* <Form.Control value={username} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Ingresa tu correo" /> */}
                          <Form.Control className="text-success" ref={usernRef} type="text" placeholder="Ingresa tu Nombre de Usuario" />

                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                          <Form.Label className="text-secondary">Contraseña:</Form.Label>
                          {/* <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Ingresa tu contraseña" /> */}
                          <Form.Control className="text-success" ref={pwdRef} type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>
                        <Button className="align-self-center mt-4 btn-login" type="submit" >
                          Iniciar Sesión
                        </Button>
                      </Form> 
                      <p className="mt-4 p-login">No tienes cuenta?, Registrate <Link to='/unirse/' style={{color:"#28804B"}}><strong>aqui</strong></Link></p>  
                    </Fragment>
                  }/>
                </Col>
                <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
                </Row>
              </Container>
            </Row>
          </Container>
          <Footer/>
              {/* ALERTS */}
          <Toast/>
        </div>
    )
}

export default Login
