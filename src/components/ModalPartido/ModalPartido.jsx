import {React, useState,useEffect, useRef} from 'react'
import {Col, Form,Modal, Row } from 'react-bootstrap';

//API
import {API_URL,ICONS_URL,AUTH_TOKEN, imgField} from 'Constants/API'
import MatchResume from 'components/MatchResume'
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
  const [idMatch, setId] = useState("")
  let i=0

  //VARIABLES
 
  const date = `${startDate.getDate()}-${(startDate.getMonth() + 1)}-${startDate.getFullYear()}`
  // const [date, setDate] = useState(formattedDateModel)
  
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

  const handleIdMatch = (e) =>{
    e.preventDefault()

    setId("5")
  }
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
  console.log(idMatch)
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
        Selecciona alguno de los partidos disponibles
      </Modal.Title>
      <div>
        <Row>
          <Col lg="5" className="col-img p-0 p-md-3 ">
          <div className="card-modal">
            <div className="mt-2 img-modal">
              <img src={`${imgField}_${id}/img`}/>
            </div>
            <div className="p-3">
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
                  <span className="my-1 mx-2 fw-light fs-6">Precio /<br/>Cancha</span>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                <img src={`${ICONS_URL}location.svg`}/>
                <p className="mb-0 address">{field.address}</p>
              </div>
            </div>
          </div>
          </Col>
          <Col lg="7" className="p-0 p-md-3">
         
        {/* <Form>
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
        </Form> */}
        <div className="d-flex flex-column mt-5 mt-md-0 card-modal px-2 pt-2">
        <h5 className="text-center mt-1 fw-bold" style={{color:"#32A77A"}}>Partidos disponibles: 8</h5>
        <p className="text-secondary fst-italic indication">Da click para elegir el partido.</p>
        <div className="match-list-modal mb-4">
        
        <div onClick={handleIdMatch}>
        <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
        </div>
              
              <div onClick={()=>(setId("9"))}>
              <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
              </div>
              
              <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
              <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
              <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
              <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
               <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
               <MatchResume 
                date={"10/11/2021"} 
                field_name={"Fucho"} 
                match_type={"4vs4"} 
                category={"femenil"} 
                time={"18:00"}
                
              />
           
     
        </div>
        <Btn text="Organizar" className=" mb-1"/>
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
