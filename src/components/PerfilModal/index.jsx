import { Modal } from 'react-bootstrap';
import ActionBtn from 'components/ActionBtn'
import avatar from 'assets/images/user4.jpg'
import { Container, Row, Col, Form } from 'react-bootstrap';
import React from 'react'

const index = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Edita tu perfil
      </Modal.Title>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div className="profile-pic">
                <div className="avatar mt" style={{backgroundImage: `url(${avatar})`}}></div>
                <p>Editar foto de perfil</p>
              </div>
              <Form>
                <Form.Group className="mb-3" >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control type="text" placeholder="Nombre de usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control defaultValue="nombre@ejemplo.com" plaintext readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Nacionalidad</Form.Label>
                  <Form.Control type="text" placeholder="Nacionalidad" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formG">
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="Masculino"
                      name="group1"
                      type={type}
                      id={`inline-radio-1`}
                    />
                    <Form.Check
                      inline
                      label="Femenino"
                      name="group1"
                      type=
                      id={`inline-radio-2`}
                    />
                  </div>
                </Form.Group> */}
                
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
              
            </Col>
          </Row>
        </Container>
        

      </Modal.Body>
      <Modal.Footer className="justify-content-center w-100">
        <ActionBtn action="Cerrar" onClick={props.onHide}>Close</ActionBtn>
      </Modal.Footer>
    </Modal>
  )
}

export default index
