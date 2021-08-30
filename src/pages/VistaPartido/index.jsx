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
import ModalTeam from 'components/ModalTeam/ModalTeam'
import ModalLeave from 'components/ModalTeam/ModalLeave'
//API URL
import {API_URL, imgField, fieldServicesIconURL, AUTH_ID} from 'Constants/API'
import { StepButton } from '@material-ui/core';

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
  const [modalShow, setModalShow] = useState(false);
  const [modalShowLeave, setModalShowLeave] = useState(false)
  const [nameBlack, setBlack] = useState("")
  const [nameWhite, setWhite] = useState("")
  const [matchId,setId] = useState("")
  const [inTeam, setTeam] = useState("")
  // const [showButton, setButton] = useState(false)
  let showButton = false
 
  const getMatch = async () => {
    try{
      const response = await fetch(`${API_URL}matches/${id}/`);
      const match = await response.json();
      setMatch(match)
      console.log(match)
      setBlack(match.team[0].name)
  setWhite(match.team[1].name)
    }catch (error){
      console.log(error)
    }
  }
  
  const handleModal = () => {
    setModalShow(true)
    if (match.team[0].name.includes("a")){
      setWhite(match.team[0].name)
    }else{
      setWhite(match.team[1].name)
    }

    if (match.team[1].name.includes("b")){
      setBlack(match.team[1].name)
    }else{
      setBlack(match.team[0].name)
    }
    
    setId(match.id)
  } 

  useEffect( ()=>{
    getMatch()
  },[])
 

  let result = ""
 match.team.forEach(item => (
  item.players.find(item => (item.user_data.user_id === AUTH_ID)) ? result = item.name  : ""
  ))
/////////
  if (result !== "") {
    // setTeam(result)
    showButton = true
  }else{
    // setTeam("")
    showButton = false
  }
  const handleLeave = () => {
    setModalShowLeave(true)
    if (result !== "") {
      setTeam(result)
    }else{
      setTeam("")
    }
    setId(match.id)
  }

  console.log(result)

  return (
    <>
      <Navbar/>
      <Container fluid={true} className="vista-partido-container py-5" style={{backgroundImage: `url(${background})`}}>
        <Container>
          <h1 className="py-3">Detalles del partido</h1>
          <Row className="gy-3 justify-content-center">
            <Col className="p-0" sm={12} md={6} lg={5}>
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

              onClick={()=>handleModal()}

              showButton={showButton}
              onClickLeave={()=>handleLeave()}
              />
            </Col>
            <Col  sm={12} md={6}>
              <Equipos match={match}
                onClick={()=>handleModal()}
                showButton={showButton}
                onClickLeave={()=>handleLeave()}
                
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
      <ModalTeam show={modalShow} onHide={() => setModalShow(false)} nameBlack={nameBlack} nameWhite={nameWhite} matchId={matchId}/>
      <ModalLeave show={modalShowLeave} onHide={() => setModalShowLeave(false)} inTeam={inTeam} matchId={matchId}/>
    </>
    
  )
}

export default VistaPartido
