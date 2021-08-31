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

  //CONSTANTE PARA INICALIZAR EL OBJETO
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
  //CONSTANTES

  //Alamcenar objeto
  const [match, setMatch] = useState(data)
  //Params
  const {id} = useParams()
  //Estado de los modales
  const [modalShow, setModalShow] = useState(false);
  const [modalShowLeave, setModalShowLeave] = useState(false)
  //Almacenar nombre de los equipos
  const [nameBlack, setBlack] = useState("")
  const [nameWhite, setWhite] = useState("")
  //Almacenar Id del partido
  const [matchId,setId] = useState("")
  //Almacenar nombre del equipo en el que se encuentra unido
  const [inTeam, setTeam] = useState("")
  // INCIARALIZAR EL BOTON QUE SE VA A MOSTRAR
  let showButton = false
 
  //OBTENER EL PARTIDO
  const getMatch = async () => {
    try{
      const response = await fetch(`${API_URL}matches/${id}/`);
      const match = await response.json();
      setMatch(match)
      setBlack(match.team[0].name)
  setWhite(match.team[1].name)
    }catch (error){
      console.log(error)
    }
  }
  
  //Funcion callback para abir el modal
  const handleModal = () => {
    setModalShow(true)
    //Valida el nombre del equipo y lo alacena
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
 
//VALIDA EN QUE EQUIPO SE ENCUENTRA EL USURIO
let result = ""
 match.team.forEach(item => (
  item.players.find(item => (item.user_data.user_id === AUTH_ID)) ? result = item.name  : ""
  ))

//Cambia el valor del boton
  if (result !== "") {
    showButton = true
  }else{
    showButton = false
  }

//Mostrar modal del abandonar partido
  const handleLeave = () => {
    setModalShowLeave(true)
    if (result !== "") {
      setTeam(result)
    }else{
      setTeam("")
    }
    setId(match.id)
  }
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
              servicesField={match.field.services.map((item,index)=>(
                <div key={index.toString()} className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
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
            <Col className="p-0"  sm={12} md={6}>
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
