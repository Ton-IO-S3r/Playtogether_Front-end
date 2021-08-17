import { Button, Modal } from 'react-bootstrap';
import avatar from 'assets/images/user4.jpg'
import { Container, Row, Col, Form } from 'react-bootstrap';
import './perfilmodal.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PerfilModal = (props) => {
  // const id = useParams();
 

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-perfil-usuario"
    >
      <Modal.Header className="border-0" closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Edita tu perfil
      </Modal.Title>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div className="profile-pic d-flex flex-column justify-content -center align-items-center">
                <div className="avatar my-2" style={{backgroundImage: `url(${avatar})`}}></div>
                {/* <p>Editar foto de perfil</p> */}
              </div>
              <Form className="form-user-profile">
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nombre</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Nombre" defaultValue={props.user_data.first_name}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Apellido</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Apellido" defaultValue={props.user_data.last_name}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nombre de usuario</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Nombre de usuario" defaultValue={props.user_data.username}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Correo electrónico</Form.Label>
                  <Form.Control size="sm" defaultValue={props.user_data.email} plaintext readOnly/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nacionalidad</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Nacionalidad" defaultValue={props.player_data.nationality} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formG">
                  <Form.Label className="mb-0">Género:</Form.Label>
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="Masculino"
                      name="group1"
                      type="radio"
                      id={`radio-male`}
                      checked={props.player_data.gender=="masculino" ? true:false}
                    />
                    <Form.Check
                      inline
                      label="Femenino"
                      name="group1"
                      type="radio"
                      id={`radio-female`}
                      checked={props.player_data.gender=="femenino" ? true:false}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="mb-0">Posición:</Form.Label>
                  <Form.Select size="sm" defaultValue={props.player_data.position}>
                    <option value="1">Delantero</option>
                    <option value="2">Portero</option>
                    <option value="3">Defensa</option>
                    <option value="4">Medio Campo</option>
                  </Form.Select>
                </Form.Group>
                <div className="w-100 text-center">
                  <Button className="align-self-center mt-4 btn-update-user" type="submit" >
                    Actualizar
                  </Button>
                </div>
                
              </Form>
              
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default PerfilModal
