import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import BeatLoader from "react-spinners/BeatLoader";
import './loading.scss'

const Loading = (props) => {
    const {text} = props
    return (
        <Container fluid className="container-spinner">
        <Container >
        <Row>
        <Col lg="4"></Col>
        <Col lg="4" className="d-flex align-content-center justify-content-center">
        <div className="d-flex flex-column justify-content-center align-content-center div-spinner">
        <div className="align-self-center">
        <BeatLoader color={'#32A77A'} />
        </div>
        
        <p>{text}</p>
        </div>
        </Col>
        <Col lg="4"></Col>
        
        </Row>
        
        
        
        </Container>
      </Container>
    )
}

export default Loading
