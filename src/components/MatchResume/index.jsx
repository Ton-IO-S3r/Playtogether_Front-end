import React from 'react'
import './matchresume.scss'

const MatchResume = ({date, time, field_name, match_type, category}) => {
  const ICON_ASSETS_URL = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons"
  
  const monthNames = ["ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic"];
  let [year,month,day] = date.split("-")
  return (
    <div className="match-resume-cont d-flex justify-content-start align-items-center mt-2 mb-3 mx-auto">
      <div className="d-flex align-items-center justify-content-center  w-25 date-container py-1">
        <h2 className="text-wrap text-center p-2 m-0 px-0 px-sm-2 fs-5">{`${day} ${monthNames[parseInt(month)-1]}`} <br/> {`${year}`}</h2>
      </div>
      <div className="d-flex flex-column w-75 ms-2 pe-2 justify-content-center match-details-container">
        <div className="d-flex flex-row justify-content-center align-items-center mt-3 mb-1 w-100">
          <img src={`${ICON_ASSETS_URL}/field_2.svg`} alt="tipo-partido" className="icons-cancha field" />
          <h5 className="ms-2 my-0 overflow-hidden field">{field_name}</h5>
        </div>
        <hr className="my-1" />
        <div className="d-flex flex-row justify-content-around align-items-center my-1 w-100">
          {(time !== '' && time !== undefined) ? (<div className="time d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            <img src={`${ICON_ASSETS_URL}/time.svg`} alt="tipo-partido" className="icons-cancha time mb-1" />
            <h5 className="my-0">{time}</h5>
          </div>) : (<></>)}
          <div className="category d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            <img src={`${ICON_ASSETS_URL}/genre.svg`} alt="tipo-partido" className="icons-cancha category mb-1" />
            <h5 className="my-0">{category}</h5>
          </div> 
          <div className="type d-flex flex-column justify-content-center align-items-center me-1 flex-wrap">
            <img src={`${ICON_ASSETS_URL}/match_type.svg`} alt="tipo-partido" className="icons-cancha type mb-1" />
            <h5 className="my-0">{match_type}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchResume
