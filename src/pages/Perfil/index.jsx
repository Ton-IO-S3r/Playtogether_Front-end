
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import CardPerfil from 'components/CardPerfil';
import UserMatches from 'components/UserMatches';
import background from 'assets/images/nathan-rogers-ObhCU6Vhoe8-unsplash.jpg'
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import Toast from "react-bootstrap/Toast";
import ToastContainer from 'react-bootstrap/ToastContainer'
import {AUTH_TOKEN,photoAPI,AUTH_ID} from 'Constants/API'
const user = 
  {
    "username": "",
    "first_name": "",
    "last_name": "",
    "date_joined": "",
    "players": {
        "dominant_foot": "",
        "position": "",
        "matches": [],
        "matches_count": 0,
        "fields_count": 0
    }
  }

const PerfilUsuario = () => {
  const BACKGROUND_IMG_URL = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/images/nathan-rogers-ObhCU6Vhoe8-unsplash.jpg"
  
  const {id} = useParams();
  const profileImgURL = `https://django-playtogether-media.s3.us-east-2.amazonaws.com/user_${id}/avatar`
  const [userData, setUserData] = useState(user);
  const [profileUpdated,setProfileUpdated] = useState(false);
  const [toastContent, setToastContent] = useState({
    theme: "warning",
    message: ""
  })
  useEffect(() => {
    const getUserData = async () => {
      const dataFromServer = await getUser()
      setUserData(dataFromServer)
    }
    
    getUserData()
  },[profileUpdated])

  const [showProfileUpdateToast, setShowProfileUpdateToast] = useState(false);
  const toggleShowProfileUpdateToast = () => setShowProfileUpdateToast(!showProfileUpdateToast);  
  
  
  

  const getUser = async ()=>{
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/players/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${AUTH_TOKEN}`,
        },
      });
      const data = await response.json();
      
      return data
      
    } catch (error) {
      console.log(AUTH_TOKEN)
      console.log(error);
    }
  }

  
  return (
    <>
      <Navbar />
      <Container fluid={true} className="vista-perfil-container py-5" style={{background:`linear-gradient(129deg, rgba(2,0,36,0.8883928571428571) 0%, rgba(61,99,19,0.5578606442577031) 100%), url(${BACKGROUND_IMG_URL}), no-repeat,fixed, center`}}>
        <ToastContainer position="top-end" className="p-3">
          <Toast show={showProfileUpdateToast} onClose={toggleShowProfileUpdateToast} bg={toastContent.theme} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">Playtogether</strong>
            </Toast.Header>
            <Toast.Body>{toastContent.message}</Toast.Body>
          </Toast>
        </ToastContainer>
        
        <Container>
        <h1 className="py-3 mb-5">Perfil de usuario</h1>
        <Row className="gy-5 justify-content-center pb-5">
            <Col sm={12} md={6} lg={5}>
              <CardPerfil 
                avatar={`${photoAPI}${AUTH_ID}/avatar`} 
                user_first_name={userData.first_name}
                user_last_name={userData.last_name}
                user_username={userData.username}
                user_position={userData.players.position}
                user_dominant_foot={userData.players.dominant_food}
                user_date_joined={userData.date_joined.split("T")[0].split("-").reverse().join("/")}
                toast_data={{
                  showProfileUpdateToast, 
                  setShowProfileUpdateToast,
                  toastContent,
                  setToastContent
                }}
                profileUpdated = {profileUpdated}
                setProfileUpdated = {setProfileUpdated}
                
              />
            </Col>
            <Col sm={12} md={6} lg={5}>
              <UserMatches matches={userData.players.matches} fields={userData.players.fields_count} num_matches={userData.players.matches_count}/>
            </Col>
        </Row>
        </Container>
      </Container>
      <Footer/>
    </>
  )
}



export default PerfilUsuario
