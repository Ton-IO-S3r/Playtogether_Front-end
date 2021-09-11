import {React, useState, useEffect} from 'react'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import Card from 'components/Cards/cardCancha'
import Carousel, { consts } from 'react-elastic-carousel';
import { Col, Container, Row } from 'react-bootstrap'
import ModalPartido from 'components/ModalPartido/ModalPartido'
import './createGame.scss'
import {API_URL, BACKGROUNDS_URL, imgField} from 'Constants/API'

const CreateGame = (props) => {
  //CONSTANTES
    const [modalShow, setModalShow] = useState(false);
    const [id,setId] = useState()
    const [fields,setFields] = useState([])
  
    //BREKAPOINT PARA EL CARROUSEL
 const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 800, itemsToShow: 3},
      { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 4 },
      { width: 1750, itemsToShow: 6 },
    ]

  //FUNCION QUE CAMBIA EL TIPO DE FLECHA
  const myArrow=({ type, onClick, isEdge }) =>{
      const pointer = type === consts.PREV ? <div className="arrow-button"><svg className="mt-1 mx-1" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.82007 0.801296C8.11213 0.800763 8.39518 0.895701 8.62007 1.06963C8.74664 1.16757 8.85127 1.28785 8.92796 1.42359C9.00465 1.55933 9.05189 1.70785 9.06699 1.86066C9.08208 2.01347 9.06473 2.16755 9.01592 2.31409C8.96712 2.46063 8.88782 2.59674 8.78257 2.71463L3.18257 8.96796L8.58257 15.233C8.6864 15.3523 8.76394 15.4896 8.81073 15.637C8.85752 15.7844 8.87263 15.939 8.85521 16.0918C8.83779 16.2447 8.78816 16.3928 8.7092 16.5278C8.63023 16.6627 8.52347 16.7817 8.39507 16.878C8.26573 16.9842 8.11428 17.0643 7.9502 17.1133C7.78612 17.1623 7.61296 17.1791 7.4416 17.1626C7.27023 17.1462 7.10436 17.0969 6.95438 17.0178C6.8044 16.9387 6.67356 16.8315 6.57007 16.703L0.53257 9.70296C0.348718 9.4942 0.248211 9.23235 0.248211 8.96213C0.248211 8.6919 0.348718 8.43005 0.53257 8.22129L6.78257 1.2213C6.90796 1.08011 7.06725 0.968502 7.24752 0.895528C7.42778 0.822555 7.62393 0.79027 7.82007 0.801296Z" fill="white"/>
      </svg></div>
       : <div className="arrow-button"><svg className="mt-1 mx-1" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 17.1667C1.20794 17.1672 0.924892 17.0723 0.700002 16.8983C0.573429 16.8004 0.468802 16.6801 0.392112 16.5444C0.315422 16.4086 0.268177 16.2601 0.253082 16.1073C0.237987 15.9545 0.25534 15.8004 0.304145 15.6539C0.352951 15.5073 0.43225 15.3712 0.537502 15.2533L6.1375 9L0.737503 2.735C0.633671 2.61567 0.556131 2.47835 0.509341 2.33096C0.462552 2.18356 0.447434 2.02899 0.464858 1.87612C0.482282 1.72326 0.531903 1.57511 0.610871 1.4402C0.689838 1.30529 0.796594 1.18628 0.925003 1.09C1.05434 0.983793 1.20579 0.90368 1.36987 0.854693C1.53395 0.805706 1.7071 0.788902 1.87847 0.805334C2.04984 0.821766 2.21571 0.871081 2.36569 0.950183C2.51567 1.02929 2.64651 1.13647 2.75 1.265L8.7875 8.265C8.97135 8.47376 9.07186 8.73561 9.07186 9.00584C9.07186 9.27606 8.97135 9.53791 8.7875 9.74667L2.5375 16.7467C2.41211 16.8879 2.25281 16.9995 2.07255 17.0724C1.89229 17.1454 1.69614 17.1777 1.5 17.1667Z" fill="white"/>
      </svg></div>
      return (
        <button className="arrow-carousel" onClick={onClick} disabled={isEdge}>
          {pointer}
        </button>
      )
    }

  //GET A PARA OBTENER EL LISTADO DE CANCHAS
    const getFields = async () => {
      try {
        const response = await fetch(`${API_URL}fields/`);
        const data = await response.json();
        setFields(data)
      } catch (error) {
        console.log(error);
      }
    };

  //ABRIR EL MODAL RELACIONADO CON LA CANCHA, SE ENVIA COMO PARAMETRO EL ID
    const handleModal = (id) => {
      setModalShow(true)
      setId(id)
    } 

  //SE PREVIENE EL RENDERIZADO
    useEffect(()=>{
      getFields()
  },[])

    return (
        <div>
        <Nav/>
        <Container fluid className="container-create" style={{background:`linear-gradient(129deg, rgba(2,0,36,0.8883928571428571) 0%, rgba(61,99,19,0.5578606442577031) 100%), url(${BACKGROUNDS_URL}background_5_mobile.jpeg), no-repeat,fixed,center`}}>
            {/* <Row> */}
                <Container>
                    <Row>
                    
                      <h1 className="py-3 h1-create-game title-page">Organiza tu partido</h1>
                      <p className="mt-4 p-create">Comienza seleccionando alguna de nuestras canchas</p>
                      <Col md="1" lg="1" xl="1" className="d-none d-md-block"></Col>
                      <Col md="10" lg="10" xl="10">
                      
                      <Carousel className="carrousel-create" breakPoints={breakPoints} renderArrow={myArrow}  >
                      {/* enableAutoPlay autoPlaySpeed={5000} */}
                      

                      {fields.map(item => (
                        <Card key={item.id} card_style="mx-md-3" img={`${imgField}_${item.id}/img`} name={item.name} address={item.address} onClick={()=>handleModal(item.id)}/>
                      ))}
                      </Carousel>    
                      </Col>
                      <Col md="1" lg="1" xl="1" className="d-none d-md-block"></Col>
                      
                    </Row>
                </Container>
            {/* </Row> */}
        </Container>
            <Footer/>
            <ModalPartido show={modalShow} onHide={() => setModalShow(false)} id={id}/>
        </div>
    )
}

export default CreateGame
