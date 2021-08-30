import './jugadorequipo.scss'
const JugadorEquipo = ({player_data}) => {
  console.log(player_data.photo)
  const user_noPicURL ="https://django-playtogether-media.s3.us-east-2.amazonaws.com/avatar_default.png"
  const user_pic_URL=player_data.photo
  
  if (Object.keys(player_data).length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center jugador">
        <div className="user-img" style={{backgroundImage: `url(${user_noPicURL})`}}></div>
        <h5 className="mt-1 mb-0">Únete</h5> 
      </div>
    )
  }else{
    
    return (
      <div className="d-flex flex-column justify-content-center align-items-center jugador">
        <div className="user-img" style={{backgroundImage: `url(${user_pic_URL})`}}></div>
        <h5 className="mt-1 mb-0">{player_data.user_data.username}</h5>
        <p>{player_data.position}</p>
      </div>
    )
  }
    
}

export default JugadorEquipo
