import 'bootstrap/dist/css/bootstrap.min.css';
import './cardperfil.scss'
import background from 'assets/images/image7.png'
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import ModalPerfil from 'components/PerfilModal'

const CardPerfil = ({avatar, user_first_name, user_last_name, user_username, user_position, user_dominant_foot, user_date_joined}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card-perfil text-center mx-auto d-flex flex-column justify-content-end" style={{backgroundImage: `url(${background})`}}>
      <div className="data-container px-4">
        <div className="head d-flex flex-column align-items-center">
          <div className="avatar mt" style={{backgroundImage: `url(${avatar})`}}></div>
          <div className="edit-profile-icon">
            {/* <a href=""><img src={gear} alt="edit_profile" /></a> */}
            <IconButton onClick={() => setModalShow(true)}>
              <SettingsIcon/>
            </IconButton>
          </div>
          <h5>{user_first_name} {user_last_name}</h5>
          <p>@ {user_username}</p>
        </div>
        <div className="d-flex justify-content-between position-container">
          <p>Posición:</p> <h6 className="text-capitalize">{user_position}</h6>
        </div>
        <div className="d-flex justify-content-between foot-container">
          <p>Perfil:</p> <h6 className="text-capitalize">{user_dominant_foot}</h6>
        </div>
        <p className="date-joined-p">Jugando fútbol desde: <strong>{user_date_joined}</strong></p>
      </div>

      <ModalPerfil
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CardPerfil
