// const { default: MatchResume } = require("components/MatchResume")
import './admingames.scss'
import "flatpickr/dist/themes/dark.css";
import MatchResume from "components/MatchResume"
import {Tabs, Tab, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {AUTH_TOKEN, API_URL, BACKGROUNDS_URL} from 'Constants/API'
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import ActionBtn from 'components/ActionBtn';

const AdminGames = ({field}) => {
  const [pendingGames, setPendingGames] = useState(field.pending_matches)
  const [totalMatch, setTotalMatch] = useState(field.total_match_history)
  const [matchHistory, setMatchHistory] = useState(field.match_history)
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
            <Form className="d-flex flex-wrap">
              <Form.Group className="mb-3 d-flex flex-row" controlId="createGame">
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                  <div className="d-flex flex-column justify-content-center align-items-start me-3">
                    <Form.Label className="me-2">Fecha: </Form.Label>
                    <DatePicker disabledKeyboardNavigation className="form-control"  dateFormat="dd-MMMM-yyyy" locale="es" minDate={new Date()} />  
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-start me-3">
                    <Form.Label className="me-2">Hora: </Form.Label>
                    <TimePicker placeholder="--:--" disabledHours={() => [0, 1, 2, 3, 4, 5]} showSecond={false} minuteStep={30} hideDisabledOptions />
                  </div>
                </div>
              </Form.Group>
              <div className="d-flex align-items-end text-center mb-3">
                <ActionBtn 
                  action="Añadir partido" 
                  btn_type="submit" 
                  btn_disable={false} 
                  aria-controls="collapse-loader"
                  // aria-expanded={open}
                />
              </div>
            </Form>
          </div>
            
          <hr />
          <div className="matches-list-container text-center">
            {
              pendingGames.length > 0 ? 
                pendingGames.map((game,index)=>{
                  console.log(game)
                })
              :
              <></>
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
            { matchHistory.length > 0 ?
              matchHistory.map((match, index) => (
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
    </div>
  )
}

export default AdminGames
