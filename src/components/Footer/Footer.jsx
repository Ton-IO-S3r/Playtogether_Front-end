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
                <Container fluid className="footer-background">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="12"  lg="6" className="footer-info footer-info-lg">  
                                <p className="mt-3">Quienes Somos</p>
                                <p>Preguntas Frecuentes</p>
                                <p>Contacto</p>
                                <p>Terminos y condiciones</p>
                                
                            </Col>
                            <Col md="12" lg="6" className="footer-info ">
                                <p className="mt-3 mt-lg-5 followus">Siguenos</p>
                                <ul className="d-flex mt-3 justify-content-around justify-content-md-center social-network">
                                    <li className="me-5"><img src={fb}/></li>
                                    <li className="me-5 "><img src={tw}/></li>
                                    <li><img src={ig}/></li>
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
