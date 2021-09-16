import React from 'react'
import {Col, Form,Modal, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {API_URL,ICONS_URL,AUTH_TOKEN,AUTH_ID, imgField, photoAPI} from 'Constants/API'
import './modalFollow.scss'

const ModalFollow = (props) => {
    const {show,followSection,list} = props
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton />
      <Modal.Body>
      <Modal.Title id="contained-modal-title-vcenter" className="text-center  fw-bold mb-4">
        {followSection}
      </Modal.Title>
      <div className="d-flex flex-column">
        {
            list.length > 0 
            ?
            list.map(follower => (
            
            <div className="d-flex align-items-center">
                <div className="user-containerImg">
                <img src={`${photoAPI}user_${follower.id}/avatar`}/>
                </div>
                <p className="m-0 mx-2">@{follower.username}</p>
            </div>
            
            
            ))
            :
            <></>
        }
        
        
      </div>
      </Modal.Body>
     
    </Modal>
        </div>
    )
}

export default ModalFollow
