
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import CardPerfil from 'components/CardPerfil';
import UserMatches from 'components/UserMatches';
import avatar from 'assets/images/user4.jpg'
import background from 'assets/images/nathan-rogers-ObhCU6Vhoe8-unsplash.jpg'
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';

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
  
const userProfile = 
  {
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
  

const PerfilUsuario = () => {
  const {id} = useParams();
  const [userData, setUserData] = useState(user);
  const [userProfileData, setUserProfileData] = useState(userProfile);
 
  useEffect(() => {
    const getUserData = async () => {
      const dataFromServer = await getUser()
      setUserData(dataFromServer)
    }
    const getUserProfileData = async () => {
      const dataFromServer = await getUser4Update()
      setUserProfileData(dataFromServer)
    } 
    // setTimeout(() => {
      getUserData()
      getUserProfileData()
    // }, 2000);
    
  }, [])
  const getUser = async ()=>{
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/players/${id}`);
      const data = await response.json();
      
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  const getUser4Update = async ()=>{
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/players/update/${id}`);
      const data = await response.json();
      
      return data
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar />
      <Container fluid={true} className="vista-perfil-container" style={{background:`linear-gradient(129deg, rgba(2,0,36,0.8883928571428571) 0%, rgba(61,99,19,0.5578606442577031) 100%), url(${background}), no-repeat,fixed, center`}}>
        <Container>
        <h1 className="py-3">Perfil de usuario</h1>
        <Row className="gy-3 justify-content-center pb-5">
            <Col sm={12} md={6} lg={5}>
              <CardPerfil 
                avatar={avatar} 
                user_first_name={userData.first_name}
                user_last_name={userData.last_name}
                user_username={userData.username}
                user_position={userData.players.position}
                user_dominant_foot={userData.players.dominant_food}
                user_date_joined={userData.date_joined.split("T")[0].split("-").reverse().join("/")}
                user_to_update = {userProfileData}
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
