import {React, Fragment, useRef, useState} from 'react'
//COMPONENTES
import Form from 'react-bootstrap/Form'
import Card from 'components/Cards/Card'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { Col, Container, Row, Button } from 'react-bootstrap'
//NOTIFICACIONES
import Toast from 'components/Toast/Toast'
import {notifyWarning} from 'Functions/toastFunc'
//RUTAS
import { Link } from 'react-router-dom'
//API
import {API_URL} from 'Constants/API'
import context from 'react-bootstrap/esm/AccordionContext'



const SignUp = () => {
    //REFERECIA DE LOS INPUTS
const usernRef = useRef()
const nameRef = useRef()
const lastnRef = useRef()
const emailRef = useRef()
const pwdRef = useRef()

//FUNCION PARA HACER REGISTRO A LA API (POST)
const loginSignUp = async(username,name,lastName,email,password) => {
    try{
      const response = await fetch(`${API_URL}signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          lastName,
          email,
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
    const name = nameRef.current.value 
    const lastName = lastnRef.current.value 
    const email = emailRef.current.value 
    const password = pwdRef.current.value 
  
    //VALIDAR CAMPOS VACIOS
    if (username === '' || name === '' || lastName === '' || email === '' || password === ''){
      //ALERTA
      notifyWarning("Campos Vacios")
      return
    }
      // console.log(await JSON.stringify(username,password))
      // console.log(await loginUser(username,password))
  
      //Se pasan los valores de los inputs a la funcion del POST
      const response = await loginSignUp(username,name,lastName,email,password);

      console.log(response)
      //VALIDAR SI SE RECIBE UN USUARIO EXISTENTE
        if (response.username[0] === "A user with that username already exists.") {
          notifyWarning("El nombre de usuario ya existe, intenta con otro")
          usernRef.current.value = null
        } else if (response.username === username) {
          //SE REDIRIGE A LA PAGINA DE LOGIN
            window.location.href = "/login";
         }
  
    }
    return (
        <div>
        <Nav/>
        <Container fluid className="container-login">
            <Row>
            <Container>
            <Row>
            <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
                <Col md="6" lg="4" xl="4" className="">
                  <Card className="flex-column p-3 mt-5 mb-5" content={
                    <Fragment>
                      <h1 className="h1-login mt-4 mb-4">Registrate</h1>
                      <p style={{color:"#8a8e92"}}><small>* Todos los campos son requeridos</small></p>
                      <Form className="d-flex flex-column" onSubmit={handleSubmit} >
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Nombre de Usuario:</Form.Label>
                          <Form.Control ref={usernRef}  type="text" placeholder="Nombre de usuario" />
                          </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control ref={nameRef}  type="text" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label>Apellido:</Form.Label>
                          <Form.Control ref={lastnRef}  type="text" placeholder="Apellido" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label>Correo Electronico:</Form.Label>
                          <Form.Control ref={emailRef}  type="email" placeholder="Correo electronico" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label>Contraseña:</Form.Label>
                          <Form.Control ref={pwdRef}  type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button className="align-self-center mt-4 btn-login" type="submit" >
                          Iniciar Sesión
                        </Button>
                      </Form> 
                      <p className="mt-4 p-login">Ya tienes cuenta?, Inicia Sesión <Link to='/login' style={{color:"#28804B"}}><strong>aqui</strong></Link></p>  
                    </Fragment>
                  }/>
                </Col>
                <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
            </Row>
        </Container>
            </Row>

        </Container>
        
            <Footer/>
            <Toast/>
            
        </div>
    )
}

export default SignUp
