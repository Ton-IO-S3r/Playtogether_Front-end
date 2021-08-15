import 'bootstrap/dist/css/bootstrap.min.css';
import './cardperfil.scss'
import gear from 'assets/icons/edit_profile.svg'
import background from 'assets/images/image7.png'
import { Modal } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ActionBtn from 'components/ActionBtn'
// import background from 'assets/images/bruno-aguirre-yJBMbQgw9mg-unsplash.jpg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Edita tu perfil
      </Modal.Title>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer className="justify-content-center w-100">
        <ActionBtn action="Cerrar" onClick={props.onHide}>Close</ActionBtn>
      </Modal.Footer>
    </Modal>
  );
}


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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CardPerfil
