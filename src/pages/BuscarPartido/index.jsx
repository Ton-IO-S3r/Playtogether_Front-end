import Buscar from 'components/Buscar'
import Footer from 'components/Footer/Footer'
import ListaPartidos from 'components/ListaPartidos'
import Navbar from 'components/Navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import background from 'assets/images/alexander-londono-CDtL2qnfTKw-unsplash.jpg'
import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'



const BuscarPartido = () => {
  
  const [games,setGames] = useState([])
  const [searchParams,setSearchParams]=useState({})
  useEffect(() => {
    const getGamesData = async () => {
      const dataFromServer = await getGamesList()
      setGames(dataFromServer)
    }
    getGamesData()
  }, [searchParams])

  

  const getGamesList = async ()=> {
    try {
      // const response = await fetch(`http://127.0.0.1:8000/api/matches/`);
      // const data = await response.json();
      // // console.log(data)
      // return data
      const res = await axios.get('http://127.0.0.1:8000/api/matches/', searchParams);
      return res.data
      
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <Navbar />
      <Container fluid={true} className="buscar-partidos-container py-5" style={{backgroundImage: `url(${background})`}}>
        <Container>
          <h1 className="py-3 mb-5">Partidos</h1>
          <Row className="gy-3 justify-content-center pb-5">
            <Col sm={12} md={6} lg={5}>
              <Buscar searchParams={searchParams} setSearchParams={setSearchParams}/>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <ListaPartidos games={games}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default BuscarPartido
