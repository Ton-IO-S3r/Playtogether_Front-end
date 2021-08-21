import { Modal } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './perfilmodal.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionBtn from 'components/ActionBtn';
import axios from 'axios';

const PerfilModal = (props) => {
  const id = useParams();
  const [userId, setUserId] = useState(null) 
  const [userData, setUserData] = useState({
    first_name_form: props.user_data.first_name,
    last_name_form: props.user_data.last_name,
    username_form: props.user_data.username,
    nationality_form:props.player_data.nationality,
    email_form:props.user_data.email,
    genre_form: props.player_data.gender,
    position_form: props.player_data.position,
    photo_form: props.player_data.photo
  })

  useEffect(() => {
    setUserData({
      first_name_form: props.user_data.first_name,
      last_name_form: props.user_data.last_name,
      username_form: props.user_data.username,
      nationality_form:props.player_data.nationality,
      email_form:props.user_data.email,
      genre_form: props.player_data.gender,
      position_form: props.player_data.position,
      photo_form: props.player_data.photo
    })
    setUserId(id)
    console.log(userId)
  }, [])

  const updateUserProfile = (event) => {
    event.preventDefault();
    const updateProfile = async (id)=>{

      const  data_to_update = {
        user_data:{
          username: userData.username_form,
          first_name: userData.first_name_form,
          last_name: userData.last_name_form,
          email: userData.email_form
        },
        player_data:{
          gender: userData.genre_form,
          nationality: userData.nationality_form,
          position: userData.position_form,
          photo: userData.photo_form
        }
      }
      
      const config = {headers: { 'Content-Type': 'multipart/form-data'}};
      const url ='http://127.0.0.1:8000/api/players/update/6';
      const formdata = new FormData();
      formdata.append('user_data.username', userData.username_form)
      formdata.append('user_data.first_name', userData.first_name_form)
      formdata.append('user_data.last_name', userData.last_name_form)
      
      formdata.append('player_data.gender', userData.genre_form)
      formdata.append('player_data.nationality', userData.nationality_form)
      formdata.append('player_data.position', userData.position_form)
      formdata.append('player_data.photo', userData.photo_form[0])
      
      axios
        .patch(url, formdata, config)
        .then((res) =>{
          console.log(res.data)
        })
        .catch((error) => console.log(error)
      );
        
    }
    updateProfile(userId)
  }

  
  
  
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e) => {
    console.log(e.target.name,e.target.files)
    setUserData({
      ...userData,
      [e.target.name]: e.target.files
    })
  }


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-perfil-usuario"
    >
      <Modal.Header className="border-0" closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Edita tu perfil
      </Modal.Title>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              {/* <div className="profile-pic d-flex flex-column justify-content -center align-items-center">
                <div className="avatar my-2" style={{backgroundImage: `url(${avatar})`}}></div>
                  <p>Edita tu foto de perfil</p>
                <input type="file" size="sm" className="align-self-center" />
              </div> */}
              <Form className="form-user-profile" onSubmit={updateUserProfile}>
                <Form.Group controlId="formFileSm" className="mb-3 profile-pic d-flex flex-column justify-content -center align-items-center">
                 <div className="avatar my-2" style={{backgroundImage: `url(${props.player_data.photo})`}}></div>
                 <input type="file" size="sm" name="photo_form" className="align-self-center" onChange={handleImageChange}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nombre</Form.Label>
                  <Form.Control size="sm" type="text" name="first_name_form" placeholder="Nombre" defaultValue={props.user_data.first_name} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Apellido</Form.Label>
                  <Form.Control size="sm" type="text" name="last_name_form" placeholder="Apellido" defaultValue={props.user_data.last_name} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nombre de usuario</Form.Label>
                  <Form.Control size="sm" type="text" name="username_form" placeholder="Nombre de usuario" defaultValue={props.user_data.username} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Correo electrónico</Form.Label>
                  <Form.Control size="sm" name="email_form" defaultValue={props.user_data.email} plaintext readOnly/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="mb-0">Nacionalidad</Form.Label>
                  <Form.Control size="sm" type="text" name="nationality_form" placeholder="Nacionalidad" defaultValue={props.player_data.nationality} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formG">
                  <Form.Label className="mb-0">Género:</Form.Label>
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="Masculino"
                      name="genre_form"
                      type="radio"
                      id={`radio-male`}
                      value="masculino"
                      checked={userData.gender === "masculino"}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      label="Femenino"
                      name="genre_form"
                      type="radio"
                      id={`radio-female`}
                      value="femenino"
                      checked={userData.gender === "femenino"}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="mb-0">Posición:</Form.Label>
                  <Form.Select size="sm" name="position_form" defaultValue={props.player_data.position} onChange={handleInputChange}>
                    <option value="1">Delantero</option>
                    <option value="2">Portero</option>
                    <option value="3">Defensa</option>
                    <option value="4">Medio Campo</option>
                  </Form.Select>
                </Form.Group>
                <div className="w-100 text-center">
                  <ActionBtn action="Actualizar" btn_type="submit" btn_disable={false} />
                </div>
                
              </Form>
              
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default PerfilModal
