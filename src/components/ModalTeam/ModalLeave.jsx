import React from 'react'
import { Container, Row, Modal , Form} from 'react-bootstrap'
import Btn from 'components/Buttons/CallActionBtn'
import {API_URL, AUTH_TOKEN} from 'Constants/API'

const ModalLeave = (props) => {

    const {matchId,show,onHide,inTeam} = props
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
            console.log(response)
        }catch (error){
            console.log(error)
        }   
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        const response = await updateMatch(inTeam)
        window.location.reload()
        console.log(response)

    }

console.log(inTeam)

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
            <h1>Deseas abandonar este equipo?</h1>
            <Btn className="mb-4" text="Aabandonar" onClick={handleUpdate}/>
            
            </div>
            
           
            </Row>
        </Container>
      </Modal.Body>
    </Modal>
    )
}

export default ModalLeave
