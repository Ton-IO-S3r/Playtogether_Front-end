import './equipos.scss'
import JugadorEquipo from '../JugadorEquipo'
import UnirseBtn from '../ActionBtn'
import Btn from 'components/Buttons/CallActionBtn'
const Equipos = (props) => {
  const {typeMatch, onClick } = props
  const players = []

  if (typeMatch === 1){
    for (let i = 1 ; i<=10 ; i++){
      players.push( <div className="d-flex flex-row justify-content-around flex-nowrap">
      <JugadorEquipo team="black"/>
      <JugadorEquipo team="white"/>
    </div>)
    }
  }else if (typeMatch === 2){
    for (let i = 1 ; i<=8 ; i++){
      players.push( <div className="d-flex flex-row justify-content-around flex-nowrap">
      <JugadorEquipo team="black"/>
      <JugadorEquipo team="white"/>
    </div>)
    }
  }else if (typeMatch === 3){
    for (let i = 1 ; i<=14 ; i++){
      players.push( <div className="d-flex flex-row justify-content-around flex-nowrap">
      <JugadorEquipo team="black"/>
      <JugadorEquipo team="white"/>
    </div>)
    }
  }

  


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
        {players}
      </div>
      <Btn text="Unirse" onClick={onClick}/>
    </div>
  )
}

export default Equipos
