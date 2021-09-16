// const { default: MatchResume } = require("components/MatchResume")
import './admingames.scss'
import "flatpickr/dist/themes/dark.css";
import MatchResume from "components/MatchResume"
import {Tabs, Tab, Form, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {AUTH_TOKEN, API_URL, BACKGROUNDS_URL} from 'Constants/API'
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import ActionBtn from 'components/ActionBtn';
import PendingGame from 'components/PendingGame/PendingGame';
import ModalMatchAction from 'components/ModalMatchAction/ModalMatchAction';
import { set } from 'date-fns';

const field_fake = {
  "name": "planet gol roma norte",
  "rent_cost": 900,
  "address": null,
  "football_type": 1,
  "photo": "https://django-playtogether-media.s3.amazonaws.com/field_default.jpg",
  "services": [
      "Arbitraje"
  ],
  "show": false,
  "total_match_history": 3,
  "match_history": [
      {
          "id": 1,
          "field": {
              "name": "planet gol roma norte",
              "football_type": "Fut7"
          },
          "date": "2021-12-29",
          "time": "08:00:00",
          "category": "mixto",
          "places_available": 18,
          "organizer": {
              "id": 2,
              "date_joined": "2021-09-09T17:27:26.958226-05:00",
              "username": "ferbra",
              "fields_count": 0,
              "matches_count": 0
          },
          "accepted": true
      },
      {
          "id": 2,
          "field": {
              "name": "planet gol roma norte",
              "football_type": "Fut7"
          },
          "date": "2021-12-28",
          "time": "08:00:00",
          "category": "mixto",
          "places_available": 18,
          "organizer": {
              "id": 2,
              "date_joined": "2021-09-09T17:27:26.958226-05:00",
              "username": "ferbra",
              "fields_count": 0,
              "matches_count": 0
          },
          "accepted": true
      },
      {
          "id": 3,
          "field": {
              "name": "planet gol roma norte",
              "football_type": "Fut7"
          },
          "date": "2021-12-27",
          "time": "08:00:00",
          "category": "mixto",
          "places_available": 18,
          "organizer": {
              "id": 2,
              "date_joined": "2021-09-09T17:27:26.958226-05:00",
              "username": "ferbra",
              "fields_count": 0,
              "matches_count": 0
          },
          "accepted": true
      }
  ],
  "pending_matches": [
      {
        "id":  6,
        "field": {
            "name": "planet gol roma norte",
            "football_type": "Fut7"
        },
        "date": "2021-12-26",
        "time": "08:00:00",
        "category": "mixto",
        "places_available": 18,
        "organizer": null,
        "accepted": false
      },
      {
        "id": 1,
        "field": {
            "name": "planet gol roma norte",
            "football_type": "Fut7"
        },
        "date": "2021-12-29",
        "time": "08:00:00",
        "category": "mixto",
        "places_available": 18,
        "organizer": {
            "id": 7,
            "date_joined": "2021-09-09T17:27:26.958226-05:00",
            "username": "ferbra",
            "fields_count": 0,
            "matches_count": 0
        },
        "accepted": false
    },
    {
        "id": 2,
        "field": {
            "name": "planet gol roma norte",
            "football_type": "Fut7"
        },
        "date": "2021-12-28",
        "time": "08:00:00",
        "category": "mixto",
        "places_available": 18,
        "organizer": {
            "id": 9,
            "date_joined": "2021-09-09T17:27:26.958226-05:00",
            "username": "ferbra",
            "fields_count": 0,
            "matches_count": 0
        },
        "accepted": false
    },
    {
        "id": 3,
        "field": {
            "name": "planet gol roma norte",
            "football_type": "Fut7"
        },
        "date": "2021-12-27",
        "time": "08:00:00",
        "category": "mixto",
        "places_available": 18,
        "organizer": {
            "id": 7,
            "date_joined": "2021-09-09T17:27:26.958226-05:00",
            "username": "ferbra",
            "fields_count": 0,
            "matches_count": 0
        },
        "accepted": false
    }
  ]
}

const AdminGames = (props) => {
  const {field,matchUpdate,setMatchUpdate} = props
  // const [pendingGames, setPendingGames] = useState(field.pending_matches)
  const [totalMatch, setTotalMatch] = useState(field.total_match_history)
  // const [matchHistory, setMatchHistory] = useState(field.match_history)
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle]= useState("")
  const [action, setAction] = useState("")
  const [textBtn, setTextBtn] = useState("")
  const [actionBtn, setActionBtn] = useState(()=>()=>{})
  const [listPending, setListPending] = useState("list")
  const [listHistory, setListHistory] = useState("")


  const updateMatch = async (id,organizer,accepted) => {
    try{
      const response = await fetch(`${API_URL}match_update/${id}/`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          organizer,
          accepted,

        })
        
      })
      return response
    }catch (error){
      console.log(error)
    }
  }

  const deleteMatch = async (id) => {
    try{
      const response = await fetch(`${API_URL}field_manager/match_update/${id}/`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${AUTH_TOKEN}`,
        }
      })
      return response
    }catch(error){
      console.log(error)
    }
  }

  const handleAccept = async (id,organizer) =>{
    console.log(organizer)
    let accepted = true
    const response = await updateMatch(id,organizer,accepted)
    setModalShow(false)
    setMatchUpdate(true)
    
    
  }
  const handleDeny = async (id) =>{
    let accepted=false
    let organizer=""
    const response = await updateMatch(id,organizer,accepted)
    setModalShow(false)
    setMatchUpdate(true)
    
  }
  const handleDelete = async (id) =>{
    const response = await deleteMatch(id)
    setModalShow(false)
    setMatchUpdate(true)
    
  }

  useEffect(()=>{
    
  },[field.pending_matches])


  return (
    <div className="admin-games-container text-center py-4 px-2 mx-auto ">
      <Tabs
        defaultActiveKey="partidosCreados"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="partidosCreados" title="Administrar partidos">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Form className="d-flex justify-content-center flex-wrap">
              <Row className="justify-content-center align-items-end">
                <Col xs={8} md={6} lg={4}>
                  <Form.Label className="me-2">Fecha: </Form.Label>
                  <DatePicker disabledKeyboardNavigation className="form-control"  dateFormat="dd-MMMM-yyyy" locale="es" minDate={new Date()} /> 
                </Col>
                <Col xs={4} md={3} lg={3}>
                  <Form.Label className="me-2">Hora: </Form.Label>
                  <TimePicker placeholder="--:--" disabledHours={() => [0, 1, 2, 3, 4, 5]} showSecond={false} minuteStep={30} hideDisabledOptions />
                </Col>
                <Col xs={12} md={12} lg={4}>
                  <ActionBtn 
                    action="Añadir partido" 
                    btn_type="submit" 
                    btn_disable={false} 
                    aria-controls="collapse-loader"
                    
                  />
                </Col>
              </Row>
            </Form>
          </div>
            
          <hr />
          
          <div className="matches-list-container text-center">
            { field.pending_matches.length > 0 ? 
              field.pending_matches.map((game,index)=>(
                  <PendingGame
                    key={index.toString()}
                    date={game.date}
                    time={game.time}
                    organizer={game.organizer}
                    accept={()=>{
                      setModalShow(true)
                      setTitle("Aceptar Partido")
                      setAction(`Aceptar el partido?`)
                      setTextBtn("Aceptar")
                      setActionBtn(()=>()=>handleAccept(game.id,game.organizer.id))
                      }}
                    deny={
                      ()=>{
                      setModalShow(true)
                      setTitle("Denegar Partido")
                      setAction(`Rechazar el partido?`)
                      setTextBtn("Rechazar")
                      setActionBtn(()=>()=>(handleDeny(game.id)))}}
                    elimn={()=>{
                      setModalShow(true)
                      setTitle("Eliminar Partido")
                      setAction(`Eliminar el partido?`)
                      setTextBtn("Eliminar")
                      setActionBtn(()=>()=>(handleDelete(game.id)))
                      }}
                    
                    
                  />
                ))
              :
              <>
                <h2>Aún no has creado ningún partido.</h2>
              </>
            }
          </div>
        </Tab>
        <Tab eventKey="historialPartidos" title="Historial de Partidos">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-around align-items-center p-3 ">
            <h5 className="fw-bold">Historial de Partidos:</h5>
              <h4 className="mx-3">{totalMatch}</h4>
            </div>
          </div> 
          <hr />
          <div className="history-match text-center">
            { field.match_history.length > 0 ?
              field.match_history.map((match, index) => (
                <Link key={index.toString()} id={match.id} to={`/partidos/${match.id}`} className="game-link">
                  <MatchResume  
                    date={match.date} 
                    field_name={match.field.name} 
                    match_type={match.field.football_type} 
                    category={match.category} 
                    
                  />
                </Link>
              ))
              :
              (<p className="text-center fw-bold">Aun no generas historial, da de alta partidos.</p>)
            }
           

          </div>
        </Tab>
      </Tabs>
      <ModalMatchAction show={modalShow} onHide={()=> setModalShow(false)} title={title} action={action} actionBtn={actionBtn} textBtn={textBtn}/>
    </div>
    
  )
}
export default AdminGames
