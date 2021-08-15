import React from 'react'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import Carousel from 'react-bootstrap/Carousel'
import CardsLanding from 'components/CardLanding/CardsLanding'
import find_games from 'assets/images/find_games.png'
import { Container, Row } from 'react-bootstrap'
import './createGame.scss'

const CreateGame = () => {
    return (
        <div>
        <Nav/>
        <Container fluid className="container-create">
            <Row>
                <Container>
                    <Row>
                        <Carousel interval={null} indicators={false}>
                            <Carousel.Item >
                            <div className="d-flex">
                            <CardsLanding className="me-5" image={find_games} text="Juega en donde quieras y cuando quieras."/>
                            <CardsLanding className="mx-5" image={find_games} text="Juega en donde quieras y cuando quieras."/>
                            
                            </div>
                            
                            </Carousel.Item>
                            
                            
                        </Carousel>
                    </Row>
                </Container>
            </Row>
        </Container>
            <Footer/>
        </div>
    )
}

export default CreateGame
