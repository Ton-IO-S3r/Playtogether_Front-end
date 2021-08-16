import './equipos.scss'
import JugadorEquipo from '../JugadorEquipo'
import UnirseBtn from '../ActionBtn'

const Equipos = () => {
  return (
    <div className="match-container p-3">
      <h5 className="fs-5 fw-bolder my-4">1 lugar disponible</h5>
      <hr />
      <div>
        <span>Equipo negro</span>
        <span className="fs-5 mx-4"><strong>VS</strong></span>
        <span>Equipo blanco</span>
      </div>
      <div className="teams-container my-4">
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo team="black"/>
          <JugadorEquipo team="white"/>
        </div>
      </div>
      <UnirseBtn action="Unirse" />
    </div>
  )
}

export default Equipos
