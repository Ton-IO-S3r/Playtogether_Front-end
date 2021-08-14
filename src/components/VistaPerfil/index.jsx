
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import CardPerfil from 'components/CardPerfil';
import UserMatches from 'components/UserMatches';
import avatar from 'assets/images/user4.jpg'
import background from 'assets/images/nathan-rogers-ObhCU6Vhoe8-unsplash.jpg'

const VistaPerfil = ({user}) => {
  
  return (
    
    <Container fluid={true} className="vista-perfil-container" style={{background:`linear-gradient(129deg, rgba(2,0,36,0.8883928571428571) 0%, rgba(61,99,19,0.5578606442577031) 100%), url(${background}), no-repeat,fixed, center`}}>
      <Container>
      <h1 className="py-3">Perfil de usuario</h1>
      <Row className="gy-3 justify-content-center pb-5">
          <Col sm={12} md={6} lg={5}>
            <CardPerfil avatar={avatar} user={user}/>
          </Col>
          <Col sm={12} md={6} lg={5}>
            <UserMatches matches={user.players.matches} fields={user.players.fields_count} num_matches={user.players.matches_count}/>
          </Col>
      </Row>
      </Container>
    </Container>
  )
}

export default VistaPerfil
