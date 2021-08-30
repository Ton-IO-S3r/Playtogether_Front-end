import {React, useState} from 'react'
import { Container, Row, Modal , Form} from 'react-bootstrap'
import Btn from 'components/Buttons/CallActionBtn'
import './ModalTeam.scss'
import {API_URL, AUTH_TOKEN} from 'Constants/API'
import ModalLeave from 'components/ModalTeam/ModalLeave'

const ModalTeam = (props) => {
    const {matchId,nameBlack,nameWhite,show,onHide} = props
    const teamBlack = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons/teamBlack.svg"
    const teamWhite = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons/teamWhite.svg"
    const [team, setTeam] = useState(nameBlack)
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

        const response = await updateMatch(team)
        
        window.location.reload()
        console.log(response)

    }
    return (
        <>
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
          Elige tu Equipo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-0 p-md-1">
        <Container>
            <Row>
            <div className="d-flex flex-column">
            <div className="d-flex align-items-center create-check justify-content-between justify-content-md-around mt-5 mb-4" onChange={(e)=>{setTeam(e.target.value)}} >
                <div className="d-flex align-items-center" >
                    <Form.Check value={nameBlack} as='input' name="team" type="radio" id="black" checked={team === nameBlack ? true : false} />
                    <img className="me-2" src={teamBlack}/>
                    <p className="m-0 fw-bold team">Negro</p>
                </div>
            
                <div className="d-flex align-items-center">
                    <Form.Check value={nameWhite} as='input' name="team" type="radio" id="black"  checked={team === nameWhite ? true : false}/>
                    <img className="me-2" src={teamWhite}/>
                    <p className="m-0  fw-bold team">Blanco</p>
                </div>
            
            </div>
            <Btn className="mb-4" text="Unirse" onClick={handleUpdate}/>
            </div>
            
           
            </Row>
        </Container>
      </Modal.Body>
    </Modal>
    </>
    )
}

export default ModalTeam
