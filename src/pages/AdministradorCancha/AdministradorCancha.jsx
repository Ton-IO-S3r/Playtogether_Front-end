
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin_cancha.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import {AUTH_TOKEN, API_URL, BACKGROUNDS_URL, AUTH_STAFF, AUTH_ID} from 'Constants/API'
import Toast from 'components/Toast/Toast';
import { notifySuccess, notifyWarning } from 'Functions/toastFunc';
import Loading from 'components/LoadingPage/Loading'
import CardAdmin from 'components/CardAdmin';
import CanchaAdmin from 'components/CanchaAdmin';
import AdminGames from 'components/AdminGames/AdminGames';


const admin = 
  {
    "username": "",
    "first_name": "",
    "date_joined": "",
    "managers": {
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

const AdministradorCancha = () => {
  const {id} = useParams();
  const [fieldAdminData, setFieldAdminData] = useState(admin);
  // const [profileUpdated,setProfileUpdated] = useState(false);
  // const [userCreatedMatch , setUserCreatedMatch] = useState({})
  // const [totalMatchCreated, setTotalMatchCreated] = useState({})
  
  useEffect(() => {
    const getFieldAdminData = async () => {
      const dataFromServer = await getFieldAdmin()
      setFieldAdminData(dataFromServer)
      console.log(dataFromServer)
    }
    console.log(AUTH_STAFF)
    getFieldAdminData()
    
  // },[profileUpdated,id])
  },[])
  const getFieldAdmin = async () => {
    try {
      const response = await fetch(`${API_URL}field_manager/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${AUTH_TOKEN}`,
        },
      });
      const data = await response.json();
      
      return data
      
    } catch (error) {
      console.log(error);
    }
  }

  //SE DECLARAN PARAMETROS INCIALES PARA LA ACTIVACION DEL TOAST
  const [toastParams, setToastParams] = useState({
    type:'success',
    msg:"",
    time: 0,
    activate:false
  })
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (toastParams.activate && toastParams.type === 'success') {
      notifySuccess(toastParams.msg, toastParams.time)
    }
    if (toastParams.activate && toastParams.type === 'warning') {
      notifyWarning(toastParams.msg, toastParams.time)
    }
  }, [toastParams])


  return (
    <>
      <Navbar />
      <Container fluid={true} className="vista-perfil-container pt-2 pb-4" style={{background:`linear-gradient(129deg, rgba(2,0,36,0.8883928571428571) 0%, rgba(61,99,19,0.5578606442577031) 100%), url(${BACKGROUNDS_URL}background_6.jpg), no-repeat,fixed, center`}}>
        <Container>
          <Row className="gy-3 justify-content-center pb-5">
            {id === AUTH_ID ?
              <>
                <h1 className="py-3 mb-2 title-page tracking-in-contract-bck-top">Administrador de cancha</h1>
                <p className="mt-4 p-create"></p>
                <Col sm={12} md={5} lg={4} className="p-0 p-md-1 p-lg-3">
                  <CardAdmin 
                    fieldAdminData={fieldAdminData}
                    setFieldAdminData={fieldAdminData}
                    toastParams={toastParams}
                    setToastParams = {setToastParams}
                    modalShow = {modalShow}
                    setModalShow = {setModalShow}
                  />
                  <hr/>
                  <CanchaAdmin 
                    name={fieldAdminData.managers.field.name}
                    cost={fieldAdminData.managers.field.rent_cost}
                    address={fieldAdminData.managers.field.address}
                    type={fieldAdminData.managers.field.football_type}
                    img={fieldAdminData.managers.field.photo}
                    services={fieldAdminData.managers.field.services}
                    setModalShow={setModalShow}
                  />
                </Col>
                <Col sm={12} md={7} lg={8} className="p-0 p-md-1 p-lg-3">
                  <AdminGames field={fieldAdminData.managers.field} />
                </Col>
              </>
            :
              <>
                <Col sm={12} md={7} lg={7} className="p-0 p-md-1 p-lg-3">
                  <h1 className="d-block my-5 py-5 h-75">No tienes permiso para acceder a esta página</h1>
                </Col>
              </>

            }
          </Row>
        </Container>
      </Container>
      <Footer/>
    </> 
    
  )
}



export default AdministradorCancha
