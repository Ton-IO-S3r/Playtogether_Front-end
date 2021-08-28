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
    "id": 26,
    "field": {
        "id": 1,
        "name": "kodemiaFut",
        "rent_cost": 1400,
        "address": "Delegacion: Benito juarez - Calle: alguna - Exterior: 123",
        "football_type": "7vs7",
        "services": [
            "Arbitraje",
            "Estacionamiento",
            "Regaderas"
        ]
    },
    "date": "2021-12-16",
    "time": "12:00:00",
    "category": "masculino",
    "team": [
        {
            "id": 35,
            "name": "26_2021-12-16_12:00:00_b",
            "players": [
                {
                    "player_id": "4",
                    "user_data": {
                        "username": "AaronMendoza",
                        "first_name": "Aaron",
                        "last_name": "Mendoza",
                        "email": "aaronmendoza@gmail.com"
                    },
                    "gender": "masculino",
                    "position": "Defensa"
                }
            ]
        },
        {
            "id": 34,
            "name": "26_2021-12-16_12:00:00_a",
            "players": [
                {
                    "player_id": "1",
                    "user_data": {
                        "username": "brafer",
                        "first_name": "Ferdinand",
                        "last_name": "Bracho",
                        "email": "ferdinandb@gmail.com"
                    },
                    "gender": "femenino",
                    "position": "Delantero"
                }
            ]
        }
    ]
}
  
  const [match, setMatch] = useState(data)
  const {id} = useParams()

 
  const getMatch = async () => {
    try{
      const response = await fetch(`${API_URL}matches/${id}/`);
      const match = await response.json();
      console.log(match)
      setMatch(match)
    }catch (error){
      console.log(error)
    }
  }
 
  console.log(match)
  
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
              <Equipos typeMatch={match.field.football_type.id}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
    
  )
}

export default VistaPartido
