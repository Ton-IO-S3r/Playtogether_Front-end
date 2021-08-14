import 'bootstrap/dist/css/bootstrap.min.css';
import './vistapartido.scss'
import background from 'assets/images/joshua-hoehne-kl6VSadl5mA-unsplash.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import DetalleCancha from '../DetalleCancha/DetalleCancha';
import { useState } from 'react';
import Toast from "react-bootstrap/Toast";
import ToastContainer from 'react-bootstrap/ToastContainer'
import Equipos from '../Equipos/Equipos';

const VistaPartido = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <Container fluid={true} className="vista-partido-container" style={{backgroundImage: `url(${background})`}}>
        <Container>
          <h1 className="py-3">Detalles del partido</h1>
          <Row className="gy-3">
            <Col sm={12} md={6}>
              <DetalleCancha />
            </Col>
            <Col sm={12} md={6}>
              <Equipos />
            </Col>
          </Row>
        </Container>
        
      
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showA} onClose={toggleShowA} bg="warning" delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Playtogether</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
            ¡Te has unido con éxito al partido!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  )
}

export default VistaPartido
