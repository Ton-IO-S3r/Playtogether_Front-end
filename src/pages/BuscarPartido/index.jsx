import Buscar from 'components/Buscar'
import Footer from 'components/Footer/Footer'
import ListaPartidos from 'components/ListaPartidos'
import Navbar from 'components/Navbar/Navbar'
import { Col, Row, Container } from 'react-bootstrap'
import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {BACKGROUNDS_URL} from 'Constants/API'

const BuscarPartido = () => {
  
  const [games,setGames] = useState([])
  const [searchParams,setSearchParams]=useState(new URLSearchParams())
  useEffect(() => {
    const getGamesList = async ()=> {
      try {
        const request = {
          params: searchParams
        }
        const res = await axios.get('matches/', request);
        return res.data
        
      } catch (error) {
        console.log(error);
      }
    }
    const getGamesData = async () => {
      const dataFromServer = await getGamesList()
      setGames(dataFromServer)
      console.log(games)

    }
    getGamesData()
  }, [searchParams])

  
  

  return (
    <>
      <Navbar />
      <Container fluid className="buscar-partidos-container pt-2 pb-4" style={{backgroundImage: `url(${BACKGROUNDS_URL}background_2.jpg)`}}>
        <Container>
          <Row className="gy-3 justify-content-around pb-5">
            <h1 className="py-3 mb-2">Partidos</h1>
            <p className="mt-4 p-create">Busta tu partido ideal</p>
            <Col sm={12} md={5} lg={5}>
              <Buscar searchParams={searchParams} setSearchParams={setSearchParams} />
            </Col>
            <Col sm={12} md={7} lg={7}>
              <ListaPartidos games={games}/>
            </Col>
            
          </Row>
        </Container>
      </Container>
      {/* <PageContainer containerFClass="buscar-partidos-container g-1" backgroundImg={"background_2.jpg"} content={(
        <>
          <h1 className="py-3 mb-2">Partidos</h1>
          
          <Col sm={12} md={5}>
            <Buscar searchParams={searchParams} setSearchParams={setSearchParams} />
          </Col>
          <Col sm={12} md={7}>
            <ListaPartidos games={games}/>
          </Col>
          
        </>
        
      )}>
        
      </PageContainer> */}
      <Footer />
    </>
  )
}

export default BuscarPartido
