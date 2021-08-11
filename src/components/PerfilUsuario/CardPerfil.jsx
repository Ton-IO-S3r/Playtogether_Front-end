import 'bootstrap/dist/css/bootstrap.min.css';
import './cardperfil.scss'
import gear from 'assets/icons/edit_profile.svg'
import background from 'assets/images/image7.png'
// import background from 'assets/images/bruno-aguirre-yJBMbQgw9mg-unsplash.jpg'

const CardPerfil = ({avatar, user}) => {
  return (
    <div className="card-perfil text-center mt-5 mx-auto d-flex flex-column justify-content-end" style={{backgroundImage: `url(${background})`}}>
      
      <div className="data-container px-4">
        <div className="head d-flex flex-column align-items-center">
          <div className="avatar mt" style={{backgroundImage: `url(${avatar})`}}></div>
          <div className="edit-profile-icon">
            <a href=""><img src={gear} alt="edit_profile" /></a>
          </div>
          <h5>{user.first_name} {user.last_name}</h5>
          <p>@ {user.username}</p>
        </div>
        <div className="d-flex justify-content-between position-container">
          <p>Posición:</p> <h6 className="text-capitalize">{user.players.position}</h6>
        </div>
        <div className="d-flex justify-content-between foot-container">
          <p>Perfil:</p> <h6 className="text-capitalize">{user.players.dominant_foot}</h6>
        </div>
        <p className="date-joined-p">Jugando fútbol desde: <strong>{user.date_joined}</strong></p>
      </div>
    </div>
  )
}

export default CardPerfil
