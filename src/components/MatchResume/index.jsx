import React from 'react'
import {ReactComponent as CanchaSVG} from 'assets/icons/field_2.svg'
import {ReactComponent as Hora} from 'assets/icons/time.svg'
import {ReactComponent as Categoria} from 'assets/icons/genre.svg'
import {ReactComponent as Tipo} from 'assets/icons/match_type.svg'
import './matchresume.scss'

const MatchResume = ({date, time, field_name, match_type, category}) => {
  const monthNames = ["ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic"];
  let [year,month,day] = date.split("-")
  return (
    <div className="match-resume-cont d-flex flex-row justify-content-start align-items-center my-2">
      <div className="d-flex align-items-center justify-content-center bg-dark text-warning w-25 date-container py-1">
        <h2 className="text-wrap p-2 m-0 px-0 px-sm-2 fs-5">{`${day} ${monthNames[parseInt(month)-1]}`} <br/> {`${year}`}</h2>
      </div>
      <div className="d-flex flex-column w-75 ms-2 pe-2 py-2 justify-content-center match-details-container">
        <div className="d-flex flex-row justify-content-center align-items-center my-1 w-100">
          {/* <img src={cancha} alt="cancha" /> */}
          <CanchaSVG className="icon-cancha"/>
          <h5 className="ms-2 my-0 overflow-hidden field">{field_name}</h5>
        </div>
        <hr className="my-1" />
        <div className="d-flex flex-row justify-content-around align-items-center my-1 w-100">
          {(time !== '' && time !== undefined) ? (<div className="time d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            {/* <img src={hora} alt="hora" /> */}
            <Hora className="icon-cancha"/>
            <h5 className="ms-1 my-0">{time}</h5>
          </div>) : (<></>)}
          <div className="category d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            {/* <img src={categoria} alt="categoria" /> */}
            <Categoria className="icon-cancha"/>
            <h5 className="ms-1 my-0">{category}</h5>
          </div> 
          <div className="type d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            {/* <img src={tipo} alt="tipo-partido" /> */}
            <Tipo className="icon-cancha"/>
            <h5 className="ms-1 my-0">{match_type}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchResume
