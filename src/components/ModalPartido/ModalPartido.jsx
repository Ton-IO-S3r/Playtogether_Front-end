import {React, useState,useEffect, useRef} from 'react'
import {Col, Form,Modal, Row } from 'react-bootstrap';

//API
import {API_URL,ICONS_URL,AUTH_TOKEN} from 'Constants/API'
//elementos del FORM
import Divider from '@material-ui/core/Divider';
import DatePicker,{registerLocale} from "react-datepicker";
import TimePicker from 'rc-time-picker';
import moment from 'moment';
//NOTIFICACIONES
import Toast from 'components/Toast/Toast'
import {notifyWarning,notifySuccess} from 'Functions/toastFunc'
import 'react-toastify/dist/ReactToastify.css'
import Btn from 'components/Buttons/CallActionBtn'
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './ModalPartido.scss'
import 'rc-time-picker/assets/index.css';
registerLocale("es", es)


const ModalPartido = (props) => {
  //CONSTANTES
  const {id,show} = props
  const [field,setField] = useState({"football_type":{
    "name":""
  }})
  const [gender, setGender] = useState("varonil")
  const [services, setServices] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment())

  //VARIABLES
 
  const date = `${startDate.getDate()}-${(startDate.getMonth() + 1)}-${startDate.getFullYear()}`
  // const [date, setDate] = useState(formattedDateModel)
  
  const imgField = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/field"
  const gameDate = useRef()
  const timeRef = useRef()

  //RETRIEVE FIELD
  

  //POST PARTIDO
  const createGame = async(field,date,time,category)=> {
    try{
      const response = await fetch(`${API_URL}matches/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Token ${AUTH_TOKEN}`
        },
        body: JSON.stringify({
          field,
          date,
          time,
          category
          
        }),
      });
      if (response.ok === true){
        
        
        
      }else{
        notifyWarning("No se creo el partido con los datos proporcionados")
      }
      return await response.json();
      
    } catch (error){
      console.log(error)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    //INPUTS
    //Se pasan los valores de los inputs a la funcion del POST
    const response = await createGame(id,date,time,gender);
   
    if (response[0] === "Ese horario en la cancha seleccionada ya esta ocupado, selecciona otro horario!"){
        notifyWarning("Fecha No disponible, elige otra")
    }else{
      notifySuccess("Partido creado con exito",1000)
        setTimeout(function(){window.location.href=`/partidos/${response.id}`} , 1000); 
      }

  }

  //ESTABLECER HORA
  const handleValueTime = (time) =>{
    setTime(time && time.format('HH:mm'));
  };

  useEffect(()=>{
    const getFieldDetail = async () => {
      try {
        const response = await fetch(`${API_URL}fields/${id}/`);
        const field = await response.json();
        
        setField(field)
        console.log(field.football_type)
        setServices(field.services)
      } catch (error) {
        console.log(error);
      }
    }
    getFieldDetail()
    if (show){
      getFieldDetail()
    }
  },[show])
  // useEffect(async ()=>{
  //   await getFieldDetail()
  //   if (show){
  //    await getFieldDetail()
  //   }
  // },[show])

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
      <Modal.Title id="contained-modal-title-vcenter" className="text-center mb-4">
        Crear Partido
      </Modal.Title>
      <div>
        <Row>
          <Col lg="5" className="col-img  ">
          <div className="mt-2 img-modal">
          <img src={`${imgField}_${id}/img`}/>
        </div>
        
          </Col>
          <Col lg="7">
          <h1 className="text-center fs-5 mt-2 mb-4 fw-bold">{field.name}</h1>
        <div className="d-flex justify-content-around flex-wrap mt-5">
          {services.map(item=>(
                <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
                  <img className="match-icon mb-1" src={`${ICONS_URL}${item.toLowerCase()}.svg`} alt="arbitraje" />
                  <p className="p-services mx-1">{item}</p>
                </div>
              ))}
        </div>
        <div className="d-flex justify-content-between justify-content-md-around align-items-center mt-3 mb-3">
          <h2 className="create-type fw-bold">{field.football_type.name}</h2> 
          <div className= "d-flex flex-row justify-content-center align-items-center price-container">
              <h2 className="my-1 mx-1 ">{`$${field.rent_cost}`}</h2>
              <span className="my-1 mx-2 fw-light fs-6">Precio /<br/>Jugador</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <img src="https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons/location.svg"/>
          <p className="mb-0 address">{field.address}</p>
        </div>
        <Divider className="mb-4" variant="middle"/>
          <div>
        <Form>
            <Form.Group className="mb-3 d-flex flex-column" controlId="createGame">
            <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-3">
              <Form.Label className="me-2">Fecha: </Form.Label>
              <DatePicker disabledKeyboardNavigation  ref={gameDate} className="form-control"  dateFormat="dd-MMMM-yyyy" selected={startDate} locale="es" onChange={(date) => {setStartDate(date)}} minDate={new Date()} />  
            </div>
            <div className="d-flex align-items-center mb-4">
              <Form.Label className="me-3">Hora: </Form.Label>
              <TimePicker ref={timeRef} placeholder="--:--" disabledHours={() => [0, 1, 2, 3, 4, 5]} showSecond={false} minuteStep={30} hideDisabledOptions onChange={handleValueTime}/>
            </div>
            </div>
            
            <div className="d-flex align-items-center create-check justify-content-between justify-content-md-around" onChange={(e)=>{setGender(e.target.value)}}>
            <Form.Check value="varonil" as='input' label="Varonil" name="gender" type="radio" id="masc" checked={gender === "varonil" ? true : false}/>
            <Form.Check value="femenil" as='input' label="Femenil" name="gender" type="radio" id="fem" checked={gender === "femenil" ? true : false}/>
            <Form.Check value="mixto" as='input' label="Mixto" name="gender" type="radio" id="mix" checked={gender === "mixto" ? true : false}/>

            </div>
            <Btn text="Crear" onClick={handleSubmit}/>
            </Form.Group>
        </Form>
        </div>
          </Col>
        </Row>
        
      </div>

     
        
      <Toast/>
      </Modal.Body>
     
    </Modal>
        </div>

        
    )
}

export default ModalPartido
