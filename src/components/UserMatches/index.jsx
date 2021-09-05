// const { default: MatchResume } = require("components/MatchResume")
import './usermatches.scss'
import MatchResume from "components/MatchResume"
import {Tabs, Tab} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {AUTH_TOKEN, API_URL, BACKGROUNDS_URL} from 'Constants/API'

const UserMatches = ({matches, fields, num_matches , matchCreated, numOfMatchCreated}) => {
  
  return (
    
    <div className="user-matches-container text-center py-4 px-2 mx-auto ">
      <Tabs
  defaultActiveKey="partidosJugados"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="partidosJugados" title="Partidos Jugados">
  <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-around align-items-center p-3 ">
          <h5>Partidos jugados:</h5>
          <h4 className="mx-3">{num_matches}</h4>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center p-3">
          <h5>Canchas visitadas:</h5>
          <h4 className="mx-3">{fields}</h4>
        </div>
      </div>
      
      <hr />
      <div className="matches-list-container text-center">
        {
          matches.map((match, index) => (
            <MatchResume 
              key={index.toString()} 
              date={match.date} 
              field_name={match.field.name} 
              match_type={match.field.football_type} 
              category={match.category} 
              time={''}
            />
            
          ))
        }
        </div>
  </Tab>
  <Tab eventKey="misPartidos" title="Mis partidos">
  <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-around align-items-center p-3 ">
        <h5>Partidos Creados:</h5>
          <h4 className="mx-3">{numOfMatchCreated}</h4>
        </div>

      </div>
      
      <hr />
      <div className="matches-list-container text-center">
        { matchCreated.length > 0 ?
          matchCreated.map((match, index) => (
            <MatchResume 
              key={index.toString()} 
              date={match.date} 
              field_name={match.field} 
              match_type={match.field} 
              category={match.category} 
              
            />
            
          ))
          :
          (<></>)
        }
        </div>
  </Tab>
  
</Tabs>
    </div>
  )
}

export default UserMatches
