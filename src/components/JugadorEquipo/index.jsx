import avatar from 'assets/user_avatar.png'
const JugadorEquipo = (team) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center jugador">
      <img src={avatar} alt="player1" />
      <h5 className="mt-1 mb-0">Jugador 1</h5>
      <p>Posicion</p>

    </div>
  )
}

export default JugadorEquipo
