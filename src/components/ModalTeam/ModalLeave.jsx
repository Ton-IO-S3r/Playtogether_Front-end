import React from 'react'
import { Container, Row, Modal} from 'react-bootstrap'
import Btn from 'components/Buttons/CallActionBtn'
import {API_URL, AUTH_TOKEN} from 'Constants/API'
import './ModalTeam.scss'
import Toast from 'components/Toast/Toast'
import {notifyWarning} from 'Functions/toastFunc'

const ModalLeave = (props) => {

    //PROPIEDADES DEL COMPONENTE
    const {matchId,show,onHide,inTeam} = props

    //FETCH HACIA LA IP PARA ABANDONAR EL PARTIDO
    const updateMatch = async (name) =>{
        try{
            const response = await fetch(`${API_URL}matches/${matchId}/`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${AUTH_TOKEN}`,
                },
                body: JSON.stringify({
                        "team": [
                            {
                                "name": name
                            }
                        ]
                })
            })
        }catch (error){
            console.log(error)
        }   
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        const response = await updateMatch(inTeam)
        notifyWarning("Abandonaste el Partido")
        setTimeout(function(){window.location.reload()} , 750); 

    }

    return (
        <Modal
    //   {...props}
    show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Abandonar Equipo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-0 p-md-1">
        <Container>
            <Row>
            <div className="d-flex flex-column">
            <h1 className="text-leave">¿Seguro que deseas abandonar el partido?</h1>
            <Btn className="mb-4" text="Abandonar" style={{backgroundColor: "transparent",color: "#28804B"}} onClick={handleUpdate}/>
            
            </div>
            
           
            </Row>
        </Container>
      </Modal.Body>
      <Toast/>
    </Modal>
    )
}

export default ModalLeave
