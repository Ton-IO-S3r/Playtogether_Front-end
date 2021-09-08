import { Modal } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './perfilmodal.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionBtn from 'components/ActionBtn';
import axios from 'axios';
import { useRef } from 'react';
import {AUTH_TOKEN, API_URL, AUTH_ID} from 'Constants/API'
import Toast from 'components/Toast/Toast'
import {notifyWarning} from 'Functions/toastFunc'
const userProfile = {
  "user_data": {
      "username": "test",
      "first_name": "",
      "last_name": "",
      "email": ""
  },
  "player_data": {
      "photo": "",
      "gender": "",
      "nationality": "",
      "position": 1
  }
}

const PerfilModal = (props) => {
  const inputFile = useRef()
  
  const [userData, setUserData] = useState(userProfile.user_data)
  const [playerData, setPlayerData] = useState(userProfile.player_data)
  useEffect(() => {
    const getUserProfileData = async () => {
      const dataFromServer = await getUser4Update()
      setUserData(dataFromServer.user_data)
      setPlayerData(dataFromServer.player_data)
    } 
    
    getUserProfileData()
  }, [])


  const getUser4Update = async ()=>{
    try {
      const response = await fetch(`${API_URL}players/update/${AUTH_ID}/`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Token ${AUTH_TOKEN}`,
        },
      });
      const data = await response.json();
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  
  const [positions,setPositions] = useState([])
  useEffect(()=>{
    const getPositionsData = async () => {
      const dataFromServer = await getPlayerPositions()
      setPositions(dataFromServer)
    } 
    getPositionsData()
  },[])

  const getPlayerPositions = async () =>{
    try {
      const response = await axios(`${API_URL}players/position/`)
      const data = await response.data;
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  
  const [profileImg, setProfileImg] = useState(playerData.photo)
  useEffect(()=>{
    setProfileImg(playerData.photo)
  },[playerData])

  // FETCH PARA ACTUALIZAR LOS DATOS DEL USUARIO
  const updateUserProfile = (event) => {
    event.preventDefault();
    const updateProfile = async (id)=>{
      
    //VALIDAR CAMPOS VACIOS
    if (userData.username === '' || userData.first_name === '' || userData.last_name === '' || userData.email === ''){
      //ALERTA
      notifyWarning("Por favor no dejes campos vacios")
      return
    }
    if(playerData.photo[0].size > 1048576){
      notifyWarning("Solo se permite el uso de imagenes menores a 1MB",2000)
      return
    }
    
      const config = {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${AUTH_TOKEN}`
        }
      };
      const url =`${API_URL}players/update/${id}/`;
      const formdata = new FormData();

      if (userData.username !== ''){
        formdata.append('user_data.username', userData.username)
      }
      if (userData.first_name !== ''){
        formdata.append('user_data.first_name', userData.first_name)
      }
      if (userData.last_name !== ''){
        formdata.append('user_data.last_name', userData.last_name)
      }
      if (playerData.gender !== ''){
        formdata.append('player_data.gender', playerData.gender)
      }
      if (playerData.nationality !== ''){
        formdata.append('player_data.nationality', playerData.nationality)
      }
      if (playerData.position !== ''){
        formdata.append('player_data.position', playerData.position)
      }
      if (typeof playerData.photo[0] === "object") {
        formdata.append('player_data.photo', playerData.photo[0])
      }

      axios
        .patch(url, formdata, config)
        .then((res) =>{
          
          props.onHide()
          props.setToastParams({
            type: 'success',
            msg:'¡Tu perfil se actualizó correctamente!',
            time:1000,
            activate: true
          })
          props.setProfileUpdated(true)
          // notifySuccess("¡Tu perfil se actualizó correctamente!",2000)
          window.location.reload()
          
        })
        .catch((error) => {
          if (error.response.data[0] === "Ese nombre de usuario ya fue tomado. Intenta nuevamente!"){
            //ALERTA
            notifyWarning(error.response.data[0])
          }
        });
      
      
    }
    updateProfile(AUTH_ID)
  }

  
  
  
  const handleUserInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handlePlayerInputChange = (e) => {
    if (e.target.name === "position") {
      setPlayerData({
        ...playerData,
        [e.target.name]: parseInt(e.target.value)
      })
    } else{
      setPlayerData({
        ...playerData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleImageChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.files
    })
    setProfileImg(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      user_data={props.user_data}
      player_data={props.player_data}
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
              <Form className="form-user-profile" onSubmit={updateUserProfile}>
                <Form.Group controlId="formFileSm" className="profile-pic mb-3 d-flex flex-column justify-content -center align-items-center">
                 <div className="avatar my-2" onClick={()=>inputFile.current.click()} style={{backgroundImage: `url(${profileImg})`}}></div>
                 <input type="file" hidden={true} size="sm" ref={inputFile} name="photo" className="align-self-center" onChange={handleImageChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  {/* <Form.Label className="text-secondary mb-0">Correo electrónico</Form.Label> */}
                  <Form.Control  className="text-muted text-center fst-italic" size="sm" name="email" defaultValue={userData.email} plaintext readOnly/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="text-secondary mb-0">Nombre</Form.Label>
                  <Form.Control className="text-success" size="sm" type="text" name="first_name" placeholder="Nombre" defaultValue={userData.first_name} onChange={handleUserInputChange}/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="text-secondary mb-0">Apellido</Form.Label>
                  <Form.Control className="text-success" size="sm" type="text" name="last_name" placeholder="Apellido" defaultValue={userData.last_name} onChange={handleUserInputChange}/>
                </Form.Group>
                {/* <Form.Group className="mb-2" >
                  <Form.Label className="text-secondary mb-0">Nombre de usuario</Form.Label>
                  <Form.Control className="text-success" size="sm" type="text" name="username" placeholder="Nombre de usuario" defaultValue={userData.username} onChange={handleUserInputChange}/>
                </Form.Group> */}
                {/* <Form.Group className="mb-2" >
                  <Form.Label className="text-secondary mb-0">Nacionalidad</Form.Label>
                  <Form.Control className="text-success" size="sm" type="text" name="nationality" placeholder="Nacionalidad" defaultValue={playerData.nationality} onChange={handlePlayerInputChange}/>
                </Form.Group> */}
                <Form.Group className="mb-2" controlId="formG">
                  <Form.Label className="text-secondary mb-0">Género:</Form.Label>
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="Masculino"
                      name="gender"
                      type="radio"
                      id={`radio-male`}
                      value="masculino"
                      checked={playerData.gender === "masculino"}
                      onChange={handlePlayerInputChange}
                    />
                    <Form.Check
                      inline
                      label="Femenino"
                      name="gender"
                      type="radio"
                      id={`radio-female`}
                      value="femenino"
                      checked={playerData.gender === "femenino"}
                      onChange={handlePlayerInputChange}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="text-secondary mb-0">Posición:</Form.Label>
                  <Form.Select size="sm" name="position" defaultValue={playerData.position} onChange={handlePlayerInputChange}>
                    {positions.map((position, index)=>{
                      return (<option key={index.toString()} value={position.id}>{position.position_name}</option>)
                    })}
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
      <Toast/>
    </Modal>
  )
}

export default PerfilModal
