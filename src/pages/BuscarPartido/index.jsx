import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import './index.scss'

const BuscarPartido = ({background}) => {
  return (
    <>
      <Navbar />
      <Container fluid={true} className="vista-partido-container" style={{backgroundImage: `url(${background})`}}>
        <Container>
          <h1 className="py-3">Detalles del partido</h1>
          <Row className="gy-3">
            <Col sm={12} md={6}>
              
            </Col>
            <Col sm={12} md={6}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer/>
    </>
  )
}

export default BuscarPartido
