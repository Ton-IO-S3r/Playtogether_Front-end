import { Collapse, Modal } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './update_admin_modal.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionBtn from 'components/ActionBtn';
import axios from 'axios';
import { useRef } from 'react';
import {AUTH_TOKEN, API_URL, AUTH_ID} from 'Constants/API'
import Toast from 'components/Toast/Toast'
import {notifyWarning} from 'Functions/toastFunc'
import { BeatLoader } from 'react-spinners';
const admin = 
  {
    "username": "",
    "first_name": "",
    "date_joined": "",
    "administrators": {
      "photo":"",
      "field":{
        "name":"",
        "rent_cost":0,
        "address":null,
        "football_type":1,
        "photo":"",
        "services":[],
        "show":false,
        "total_match_history":0,
        "match_history":[],
        "pending_matches":[]
      }
    }
  }

const UpdateAdminModal = ({fieldAdminData,setFieldAdminData, onHide, show, toastParams, setToastParams, profileUpdated, setProfileUpdated}) => {
  const inputAdminFile = useRef()
  const inputFieldFile = useRef()
  const [open, setOpen] = useState(false);
  const [adminData, setAdminData] = useState({...fieldAdminData})
  console.log(adminData)
  useEffect(()=>{
    setAdminData(fieldAdminData)
  },[show])
  // useEffect(() => {
    // const getUserProfileData = async () => {
    //   const dataFromServer = await getUser4Update()
    //   setUserData(dataFromServer.user_data)
    //   setPlayerData(dataFromServer.player_data)
    // } 
    
    // getUserProfileData()
  // }, [])


  // const getUser4Update = async ()=>{
  //   try {
  //     const response = await fetch(`${API_URL}players/update/${AUTH_ID}/`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Authorization': `Token ${AUTH_TOKEN}`,
  //       },
  //     });
  //     const data = await response.json();
  //     return data
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  const [footballTypes,setFootballTypes] = useState([])
  useEffect(()=>{
    const getFieldTypes = async () => {
      const dataFromServer = await getFieldTypesData()
      setFootballTypes(dataFromServer)
    } 
    getFieldTypes()
  },[])

  const getFieldTypesData = async () =>{
    try {
      const response = await axios(`${API_URL}footballtypes/`)
      const data = await response.data;
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  const [services,setServices] = useState([])
  useEffect(()=>{
    const getServicesList = async () => {
      const dataFromServer = await getServicesData()
      setServices(dataFromServer)
    } 
    getServicesList()
  },[])

  const getServicesData = async () =>{
    try {
      const response = await axios(`${API_URL}service/`)
      const data = await response.data;
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  
  
  const [adminImg, setAdminImg] = useState(adminData.administrators.photo)
  useEffect(()=>{
    setAdminImg(adminData.administrators.photo)
  },[adminData])

  const [fieldImg, setFieldImg] = useState(adminData.administrators.field.photo)
  useEffect(()=>{
    setFieldImg(adminData.administrators.field.photo)
  },[adminData])

  // FETCH PARA ACTUALIZAR LOS DATOS DEL USUARIO
  const updateUserProfile = (event) => {
    event.preventDefault();
    setOpen(true)
    const updateProfile = async (id)=>{
      
    //VALIDAR CAMPOS VACIOS
    if (adminData.username === '' || adminData.first_name === ''){
      //ALERTA
      notifyWarning("Por favor no dejes campos vacios")
      setOpen(false)
      return
    }
    if(adminData.administrators.photo[0].size > 1048576){
      notifyWarning("Solo se permite el uso de imagenes menores a 1MB",2000)
      setOpen(false)
      return
    }
    
      const config = {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${AUTH_TOKEN}`
        }
      };
      const url =`${API_URL}admin/update/${id}/`;
      const formdata = new FormData();

      if (adminData.username !== ''){
        formdata.append('user_data.username', adminData.username)
      }
      if (adminData.first_name !== ''){
        formdata.append('user_data.first_name', adminData.first_name)
      }
      if (typeof adminData.administrators.photo[0] === "object") {
        formdata.append('player_data.photo', adminData.administrators.photo[0])
      }
      
      axios
        .patch(url, formdata, config)
        .then((res) =>{
          
          onHide()
          setToastParams({
            type: 'success',
            msg:'¡Tus datos se actualizaron correctamente!',
            time:1000,
            activate: true
          })
          setProfileUpdated(true)
          setOpen(false)
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
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value
    })
  }
  const handlePlayerInputChange = (e) => {
    // if (e.target.name === "position") {
    //   setPlayerData({
    //     ...playerData,
    //     [e.target.name]: parseInt(e.target.value)
    //   })
    // } else{
    //   setPlayerData({
    //     ...playerData,
    //     [e.target.name]: e.target.value
    //   })
    // }
    console.log(e.target)
  }

  const handleAdminImageChange = (e) => {
    // setAdminData({
    //   ...adminData,
    //   [e.target.name]: e.target.files
    // })
    if(e.target.files.length !== 0){
      setAdminImg(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleFieldImageChange = (e) => {
    // setAdminData({
    //   ...adminData,
    //   [e.target.name]: e.target.files
    // })
    if(e.target.files.length !== 0){
      setFieldImg(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleServicesCheckboxItems = (e)=>{
    console.log(e.target)
  }

  return (
    
    <Modal
      show={show}
      onHide={onHide}
      // user_data={props.user_data}
      
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-perfil-admin"
      backdrop="static"
    >
      
      <Modal.Header className="border-0" closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Edita tu perfil y da de alta tu cancha
      </Modal.Title>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
            {/* <hr/> */}
              <Form className="form-user-profile" onSubmit={updateUserProfile}>
                {/* <h5>Datos de usuario</h5> */}
                <Form.Group controlId="formFileSm" className="profile-pic mb-0 d-flex flex-column justify-content-center align-items-center">
                 <div className="avatar my-2" onClick={()=>inputAdminFile.current.click()} style={{backgroundImage: `url(${adminImg})`}}></div>
                 <input type="file" hidden={true} size="sm" ref={inputAdminFile} name="adminData.administrators.photo" className="align-self-center" onChange={handleAdminImageChange}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  {/* <Form.Label className="text-secondary mb-0">Correo electrónico</Form.Label> */}
                  <Form.Control  className="text-muted text-center fst-italic" size="sm" name="username" defaultValue={adminData.username} plaintext readOnly/>
                </Form.Group>
                <Form.Group className="mb-2" >
                  <Form.Label className="text-secondary mb-0 fw-bold">Nombre del administrador:</Form.Label>
                  <Form.Control className="text-success" size="sm" type="text" name="first_name" placeholder="Nombre" defaultValue={adminData.first_name} onChange={handleUserInputChange}/>
                </Form.Group>
                <hr/>
                <div className="field-data-container p-3">
                  <h5>Datos de la cancha</h5>
                  <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <Form.Group controlId="formFileSm" className="field-pic-group mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                      <div className="field-img my-2" onClick={()=>inputFieldFile.current.click()} style={{backgroundImage: `url(${fieldImg})`}}></div>
                      <input type="file" hidden={true} size="sm" ref={inputFieldFile} name="adminData.administrators.field.photo" className="align-self-center" onChange={handleFieldImageChange}/>
                    </Form.Group>
                    <div className="d-flex flex-wrap flex-row justify-content-between align-items-center ms-md- w-100">
                      <Form.Group className="mb-2 w-100" >
                        <Form.Label className="text-secondary mb-0 fw-bold">Calle:</Form.Label>
                        <Form.Control className="text-success" size="sm" type="text" name="street" placeholder="Calle" defaultValue={adminData.administrators.field.address} onChange={handleUserInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-2 w-100" >
                        <Form.Label className="text-secondary mb-0 fw-bold">Número:</Form.Label>
                        <Form.Control className="text-success" size="sm" type="text" name="street_number" placeholder="Número" defaultValue={adminData.administrators.field.address} onChange={handleUserInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-2 w-100" >
                        <Form.Label className="text-secondary mb-0 fw-bold">Municipio/Localidad:</Form.Label>
                        <Form.Control className="text-success" size="sm" type="text" name="town" placeholder="Municipio" defaultValue={adminData.administrators.field.address} onChange={handleUserInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-2 w-100" >
                        <Form.Label className="text-secondary mb-0 fw-bold">Estado:</Form.Label>
                        <Form.Control className="text-success" size="sm" type="text" name="city" placeholder="Estado" defaultValue={adminData.administrators.field.address} onChange={handleUserInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-2" >
                        <Form.Label className="text-secondary mb-0 fw-bold">Costo:</Form.Label>
                        <Form.Control className="text-success" size="sm" type="number" name="rent_cost" placeholder="Precio por partido" defaultValue={adminData.administrators.field.address} onChange={handleUserInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label className="text-secondary mb-0 fw-bold">Tipo de cancha:</Form.Label>
                        <Form.Select size="sm" name="position" defaultValue={0} onChange={handlePlayerInputChange}>
                          <option value='0'>Elige el tipo de cancha...</option>
                          {footballTypes.map((type, index)=>{
                            return (<option key={index.toString()} value={type.id} >{type.name}</option>)
                          })}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-2 w-100" controlId="formG">
                        <Form.Label className="text-secondary mb-1 fw-bold">Servicios:</Form.Label>
                        <div className="mb-3 d-flex flex-wrap justify-content-around w-100">
                          {services.map((item,index)=>(
                            <Form.Check
                              key={index.toString()}
                              inline
                              label={item.service}
                              name="services"
                              type="checkbox"
                              id={`check-${item.service}`}
                              value={item.service}
                              checked={false}
                              onChange={handleServicesCheckboxItems}
                            />
                          ))}
                          
                          {/* <Form.Check
                            inline
                            label="Regaderas"
                            name="services"
                            type="checkbox"
                            id={`check-showers`}
                            value="regaderas"
                            checked={false}
                            onChange={handleServicesCheckboxItems}
                          />
                          <Form.Check
                            inline
                            label="Arbitraje"
                            name="services"
                            type="checkbox"
                            id={`check-referee`}
                            value="arbitraje"
                            checked={false}
                            onChange={handleServicesCheckboxItems}
                          /> */}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                
                
                
                {/* <Form.Group className="mb-2" controlId="formG">
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
                </Form.Group> */}
                <div className="w-100 text-center">
                  <ActionBtn 
                    action="Actualizar" 
                    btn_type="submit" 
                    btn_disable={false} 
                    aria-controls="collapse-loader"
                    aria-expanded={open}
                  />
                  
                </div>
                
              </Form>
              
            </Col>
            
          </Row>
        </Container>
      </Modal.Body>
      <Toast/>
      <Collapse in={open}>
        <div className="loader-container text-center" id="collapse-loader">
          <div className="beatloader-container">
            <BeatLoader />
            <p>Actualizando...</p>
          </div>
        </div>
      </Collapse>
      
      
    </Modal>
  )
}

export default UpdateAdminModal
