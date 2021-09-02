import React from 'react'
//IMPORT ELEMENTOS DE BOOTSTRAP
import {Container,Row,Col} from 'react-bootstrap'
//IMPORT ICONOS
import fb from 'assets/icons/facebook-icon.svg'
import tw from 'assets/icons/twitter-icon.svg'
import ig from 'assets/icons/ig-icon.svg'
//IMPORT ESTILO DEL COMPONENTE
import './footer.scss'

const Footer = (props) => {

    const {mt} = props
    return (
        <div >
            <footer className={mt}>
                <Container fluid className="footer-background pt-5 pb-2">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="12"  lg="6" className="footer-info footer-info-lg ps-md-5">  
                                <p className="mt-3">Quienes Somos</p>
                                <p>Preguntas Frecuentes</p>
                                <p>Contacto</p>
                                <p>Terminos y condiciones</p>
                                
                            </Col>
                            <Col md="12" lg="6" className="footer-info my-4">
                                <p className="mt-3 mt-lg-5 followus">Síguenos</p>
                                <ul className="d-flex mt-3 justify-content-center social-network">
                                    <li className="me-5"><img src={fb} alt="Facebook"/></li>
                                    <li className="me-5 "><img src={tw} alt="Twitter"/></li>
                                    <li><img src={ig} alt="Instagram"/></li>
                                </ul>
                            </Col>
                            <Col xs md lg="12" className="footer-info">
                            <p className="mt-3 followus">2021 PlayTogether!  Todos los derechos reservados</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
