import {React, useState,useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './vistapartido.scss'
import background from 'assets/images/joshua-hoehne-kl6VSadl5mA-unsplash.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import DetalleCancha from '../../components/DetalleCancha/DetalleCancha';
import Equipos from '../../components/Equipos/Equipos';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {useParams} from 'react-router-dom'
//API URL
import {API_URL, imgField, fieldServicesIconURL} from 'Constants/API'

const VistaPartido = () => {
  const data = {
    "id": 0,
    "field": {
        "id": 0,
        "name": "",
        "rent_cost": 0,
        "address": "",
        "football_type": "",
        "services": []
    },
    "date": "",
    "time": "",
    "category": "",
    "team": [
        {
            "id": 0,
            "name": "",
            "players": [
                {
                    "player_id": "0",
                    "user_data": {
                        "user_id":0,
                        "username": "",
                        "first_name": "",
                        "last_name": "",
                        "email": ""
                    },
                    "gender": "",
                    "position": "",
                    "photo":""
                }
            ]
        },
        {
            "id": 0,
            "name": "",
            "players": [
                {
                    "player_id": "0",
                    "user_data": {
                      "user_id":0,
                        "username": "",
                        "first_name": "",
                        "last_name": "",
                        "email": ""
                    },
                    "gender": "",
                    "position": "",
                    "photo": ""
                }
            ]
        }
    ]
}
  
  const [match, setMatch] = useState(data)
  const {id} = useParams()
  console.log(id)
 
  const getMatch = async () => {
    try{
      const response = await fetch(`${API_URL}matches/${id}/`);
      const match = await response.json();
      setMatch(match)
    }catch (error){
      console.log(error)
    }
  }
   
  useEffect( ()=>{
    getMatch()
  },[])
 

  return (
    <>
      <Navbar/>
      <Container fluid={true} className="vista-partido-container py-5" style={{backgroundImage: `url(${background})`}}>
        <Container>
          <h1 className="py-3">Detalles del partido</h1>
          <Row className="gy-3 justify-content-center">
            <Col className="" sm={12} md={6} lg={5}>
              <DetalleCancha 
              imgField={`${imgField}_${match.field.id}/img`}
              nameField={match.field.name}
              servicesField={match.field.services.map(item=>(
                <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
                  <img className="match-icon mb-1" src={`${fieldServicesIconURL}/${item.toLowerCase()}.svg`} alt="arbitraje" />
                  <p className="p-services mx-1">{item}</p>
                </div>
              ))}
              typeField={match.field.football_type.name}
              priceField={match.field.rent_cost}
              directionField={match.field.address}

              dateMatch={match.date}
              timeMatch={match.time}
              categoryMatch={match.category}

              />
            </Col>
            <Col className="p-0" sm={12} md={6}>
              <Equipos match={match}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
    
  )
}

export default VistaPartido
