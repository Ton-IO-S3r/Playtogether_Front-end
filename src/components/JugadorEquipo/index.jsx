import { photoAPI } from 'Constants/API'
import './jugadorequipo.scss'
import noPlayer from 'assets/images/avatar_default.png'
const JugadorEquipo = ({player_data}) => {
  console.log(player_data)

  if (Object.keys(player_data).length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center jugador">
        <div className="user-img" style={{backgroundImage: `url(${noPlayer})`}}></div>
        <h5 className="mt-1 mb-0">Únete</h5>
      </div>
    )
  }else{
    return (
      <div className="d-flex flex-column justify-content-center align-items-center jugador">
        <div className="user-img" style={{backgroundImage: `url(${photoAPI}${player_data.id}/avatar)`}}></div>
        <h5 className="mt-1 mb-0">{player_data.user_data.username}</h5>
        <p>{player_data.position}</p>
      </div>
    )
  }
    
}

export default JugadorEquipo
