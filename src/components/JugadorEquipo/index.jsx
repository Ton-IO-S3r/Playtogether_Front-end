import avatar from 'assets/images/user_avatar2.jpg'
import './jugadorequipo.scss'
const JugadorEquipo = (team) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center jugador">
      {/* <img className="user-img" src={avatar} alt="player1" /> */}
      <div className="user-img" style={{backgroundImage: `url(${avatar})`}}></div>
      <h5 className="mt-1 mb-0">Jugador 1</h5>
      <p>Posicion</p>

    </div>
  )
}

export default JugadorEquipo
