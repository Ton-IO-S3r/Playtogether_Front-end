import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import cancha from 'assets/images/ligaesp_sauces.png'
import regaderas from 'assets/icons/regaderas.svg'
import arbitraje from 'assets/icons/arbitraje.svg'
import estacionamiento from 'assets/icons/estacionamiento.svg'
import bebederos from 'assets/icons/bebederos.svg'
import techada from 'assets/icons/cancha.svg'
import location from 'assets/icons/location.svg'
import calendar from 'assets/icons/calendar.svg'
import time from 'assets/icons/time.svg'
import genre from 'assets/icons/genre.svg'
import { Card } from 'react-bootstrap';
import UnirseBtn from './UnirseBtn';


const DetalleCancha = () => {
  
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  
  return (
    <Card className="border-light rounded overflow-auto">
      <Card.Img variant="top" src={cancha} alt="liga_española_sauces" />
      <Card.Body>
        <Card.Title className="fs-3 fw-bolder text-dark">Liga española - Los Sauces</Card.Title>
        <div className="d-flex flex-wrap justify-content-around align-items-start my-4">
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
            <img className="match-icon" src={arbitraje} alt="arbitraje" />
            <p className="icon-description mt-2">Arbitraje</p>
          </div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
            <img className="match-icon" src={estacionamiento} alt="estacionamiento" />
            <p className="icon-description mt-2">Estacionamiento</p>
          </div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
            <img className="match-icon" src={regaderas} alt="regaderas" />
            <p className="icon-description mt-2">Regaderas</p>
          </div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
            <img className="match-icon" src={bebederos} alt="bebederos" />
            <p className="icon-description mt-2">Bebederos</p>
          </div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
            <img className="match-icon" src={techada} alt="techada" />
            <p className="icon-description mt-2">Techada</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center">
          <div>
            <h2 className="match-type my-1 ">11 vs 11</h2>
          </div>
          
          <div className= "d-flex flex-row justify-content-center align-items-center bg-dark text-warning price-container">
            <h2 className="my-1 mx-1 match-price">$100</h2>
            <span className="my-1 mx-2">Precio /<br/>Jugador</span>
          </div>
        </div>
        <hr/>
        <div className="location d-flex flex-row justify-content-start align-items-center">
          <img className="match-icon" src={location} alt="ubicacion" />
          <p className="py-3 ps-3 m-0">Av. Juan Diego S/N, Tejocote, 64870 Cuautitlán, Méx.</p>
        </div>
        <hr/>
        <div>
          <div className="date-container my-4 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img className="match-icon" src={calendar} alt="fecha"/>
              <h5 className="my-0 ms-3">Fecha:</h5>
            </div>
            <div>
              <p className="my-0">27/07/2021</p>
            </div>
          </div>
          <div className="time-container my-4 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img className="match-icon" src={time} alt="hora"/>
              <h5 className="my-0 ms-3">Horario:</h5>
            </div>
            <div>
              <p className="my-0">10:20 am</p>
            </div>
          </div>
          <div className="genre-container my-4 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img className="match-icon" src={genre} alt="categoria"/>
              <h5 className="my-0 ms-3">Categoria:</h5>
            </div>
            <div>
              <p className="my-0">Femenil</p>
            </div>
          </div>
        </div>
        <UnirseBtn />
      </Card.Body>
    </Card>
    
  )
}

export default DetalleCancha
