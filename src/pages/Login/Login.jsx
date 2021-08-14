import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'components/Cards/Card'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './login.scss'

const Login = () => {
    return (
        <div>
        <Nav/>
        <Container fluid className="container-login">
          <Row>
            <Container>
              <Row>
              <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
              <Col md="6" lg="4" xl="4" className="col-login">
                <Card className="flex-column p-3 mt-5 mb-5" content={
                  <Fragment>
                    <h1 className="h1-login mt-4 mb-4">Inicia Sesión</h1>
                    <Form className="d-flex flex-column">
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico:</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu correo" />
                        {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                      </Form.Group>

                      <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                      </Form.Group>
                      {/* <p className="mb-5 ms-auto p-2 bd-highlight">Olvidaste tu contraseña?</p> */}
                      <Button className="align-self-center mt-4 btn-login" type="submit">
                        Iniciar Sesión
                      </Button>
                    </Form> 
                    <p className="mt-4 p-login">No tienes cuenta?, Registrate <strong>aqui</strong></p>  
                  </Fragment>
                }/>
              </Col>
              <Col md="3" lg="4" xl="4" className="d-none d-md-block"></Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Footer/>
        
            
        </div>
    )
}

export default Login
