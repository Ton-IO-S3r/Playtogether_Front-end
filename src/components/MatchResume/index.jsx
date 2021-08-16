import React from 'react'
import cancha from 'assets/icons/field_2.svg'
import categoria from 'assets/icons/genre.svg'
import tipo from 'assets/icons/match_type.svg'
import './matchresume.scss'

const MatchResume = ({date, field_name, match_type, category}) => {
  const monthNames = ["ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic"];
  let [year,month,day] = date.split("-")
  let formattedDate = `${day} ${monthNames[parseInt(month)-1]} ${year}`
  return (
    <div className="match-resume-cont d-flex flex-row justify-content-start align-items-center my-2">
      <div className="d-flex align-items-center justify-content-center bg-dark text-warning w-25 date-container py-0">
        <h2 className="text-wrap p-2 m-0 px-0 px-sm-2 fs-5">{`${day} ${monthNames[parseInt(month)-1]}`} <br/> {`${year}`}</h2>
      </div>
      <div className="d-flex flex-column w-75 ms-2 pe-2 justify-content-center match-details-container">
        <div className="d-flex flex-row justify-content-center align-items-center my-1 w-100">
          <img src={cancha} alt="cancha" />
          <h5 className="ms-2 my-0 overflow-hidden field">{field_name}</h5>
        </div>
        <hr className="my-1" />
        <div className="d-flex flex-row justify-content-between align-items-center my-1">
          {/*<div className="time d-flex justify-content-between align-items-center me-3">
            <img src={hora} alt="hora" />
            <h5 className="ms-1 my-0">{time}</h5>
          </div>*/}
          <div className="category d-flex justify-content-center align-items-center me-3 w-50">
            <img src={categoria} alt="categoria" />
            <h5 className="ms-1 my-0">{category}</h5>
          </div> 
          <div className="type d-flex justify-content-center align-items-center me-3 w-50">
            <img src={tipo} alt="tipo-partido" />
            <h5 className="ms-1 my-0">{match_type}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchResume
