import {React, useState,useEffect, useRef} from 'react'
import {Form,Modal } from 'react-bootstrap';
//elementos del FORM
import Divider from '@material-ui/core/Divider';
import DatePicker,{registerLocale} from "react-datepicker";
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import Btn from 'components/Buttons/CallActionBtn'
import location from 'assets/icons/location.svg'
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './ModalPartido.scss'
import 'rc-time-picker/assets/index.css';
registerLocale("es", es)


const ModalPartido = (props) => {
  //CONSTANTES
  const {id,show} = props
  const [field,setField] = useState({})
  const [icons,setIncons] = useState(null)
  const [gender, setGender] = useState("masculino")
  const [services, setServices] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment())

  //VARIABLES
  let formattedDateModel = `${startDate.getDate()}-${(startDate.getMonth() + 1)}-${startDate.getFullYear()}`
  const [date, setDate] = useState(formattedDateModel)
 
  const gameDate = useRef()
  //API
  const API_URL = "http://localhost:8000/api/";

  //RETRIEVE FIELD
  const getFieldDetail = async () => {
    try {
      const response = await fetch(`${API_URL}fields/${id}/`);
      const field = await response.json();
      console.log(field)
      setField(field)
      setServices(field.services)
    } catch (error) {
      console.log(error);
    }
  };
  

const handleValueTime = (time) =>{
    setTime(time && time.format('HH:mm'));
  };

//POST PARTIDO

const createGame = async(field,date,time,category)=> {
  try{
    const response = await fetch(`${API_URL}matches/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        field,
        date,
        time,
        
        
      }),
    });
    if (response.ok === true){
      console.log("Partido creado con exito")
    }else{
      console.log("mal")
    }
    return await response.json();
    
  } catch (error){
    console.log(error)
  }
}

const handleSubmit = async(e) => {
  e.preventDefault();
  //INPUTS

  //VALIDAR CAMPOS VACIOS
  // if (date === '' || time === ''){
  //   //CAMBAIR EL ESATDO DEL CAMPO VACIO CON UNA ALERTA
  //   setCampoVacio("Campos obligatorios")
  //   return
  // }
    // console.log(await JSON.stringify(username,password))
    // console.log(await loginUser(username,password))

    //Se pasan los valores de los inputs a la funcion del POST
   const response = await createGame(id,date,time,gender);
   if (response){
    console.log("bien")
   }else{
     console.log("mal")
   }
   
    

  }


  useEffect(async ()=>{
    await getFieldDetail()
    if (show){
     await getFieldDetail()
  }
},[show])


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
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        Crear Partido
      </Modal.Title>
      <div>
        <div className="mt-2 img-modal">
          <img src={field.photo}/>
        </div>
        <h1 className="text-center fs-5 mt-2 fw-bold">{field.name}</h1>
        <div className="d-flex justify-content-around flex-wrap">
          {services.map(item=>(<p className="p-services">{item}</p>))}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="create-type fw-bold">{field.football_type}</h2>
          <div className= "d-flex flex-row justify-content-center align-items-center bg-dark text-warning price-container">
              <h2 className="my-1 mx-1 ">{`$${field.rent_cost}`}</h2>
              <span className="my-1 mx-2 fw-light fs-6">Precio /<br/>Jugador</span>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center mt-3 mb-3">
          <img src={location}/>
          <p className="mb-0 address">{field.address}</p>
        </div>
        <Divider className="mb-4" variant="middle"/>


        
        <Form>
            <Form.Group className="mb-3 d-flex flex-column" controlId="createGame">
            <div className="d-flex align-items-center mb-3">
              <Form.Label className="me-2">Fecha: </Form.Label>
              <DatePicker ref={gameDate} className="form-control" dateFormat="dd-MMMM-yyyy" selected={startDate} locale="es" onChange={(date) => setStartDate(date)} minDate={new Date()}/>  
            </div>
            <div className="d-flex align-items-center mb-4">
              <Form.Label className="me-3">Hora: </Form.Label>
              <TimePicker disabledHours={() => [0, 1, 2, 3, 4, 5]} showSecond={false} minuteStep={30} hideDisabledOptions onChange={handleValueTime}/>
            </div>
            <div className="d-flex align-items-center create-check justify-content-between" onChange={(e)=>{setGender(e.target.value)}}>
            <Form.Check value="masculino" as='input' label="Masculino" name="gender" type="radio" id="masc" checked={gender === "masculino" ? true : false}/>
            <Form.Check value="femenino" as='input' label="Femenino" name="gender" type="radio" id="fem" checked={gender === "femenino" ? true : false}/>
            <Form.Check value="mixto" as='input' label="Mixto" name="gender" type="radio" id="mix" checked={gender === "mixto" ? true : false}/>

            </div>
            <Btn text="Crear" onClick={handleSubmit}/>
            </Form.Group>
        </Form>
        
        
      </div>

     
        

      </Modal.Body>
     
    </Modal>
        </div>
    )
}

export default ModalPartido
