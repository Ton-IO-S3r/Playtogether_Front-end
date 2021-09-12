import { Card, Col, Row } from 'react-bootstrap'
import Btn from 'components/Buttons/CallActionBtn'
import './cancha_admin.scss'
import { ICONS_URL, photoAPI } from 'Constants/API'
import ToogleBtn from 'components/ToogleBtn/ToogleBtn'


const CanchaAdmin = ({name,cost,address,type,img,services}) => {
  
  
  
  return (
    <>
      <Card >
          <Row className="g-0">
            <Col sm={12}>
              <Card.Header className="text-start pt-3">
                <img className="img-fluid rounded-top card-img-bottom field-img" src={`${photoAPI}default_field.png`} alt="..."/>
                {name === "" ? 
                  (<></>)
                :
                  <>
                    <Card.Text className="activate-field-msg text-success mb-0">
                      Habilita tu cancha para que los jugadores puedan organizar partidos en ella. 
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="mx-2">Off</span>
                      <ToogleBtn />
                      <span className="mx-2">On</span>
                    </div>
                  </>
                  
                }
              </Card.Header>
            </Col>

            <Col sm={12}>
              
              
              <Card.Body className="d-flex flex-column justify-content-start card-body">
                  {name === '' || name === null ?
                    <>
                      <h5> Aun no das de alta tu cancha.</h5>
                      <p>
                        <button type="button" className="btn btn-link py-0 ps-0 pe-1 link-success shadow-none">
                          Edita tu perfil
                        </button>
                        para agregarla.
                      </p>
                    </>
                    
                    
                    :
                    
                    <>
                      <Card.Title className="fw-bold" >{name}</Card.Title>
                      <Card.Text className="text-truncate">
                          {address}
                      </Card.Text>
                      <Card.Text className="text-truncate fw-bold">
                          {cost}
                      </Card.Text>
                      <Card.Text className="text-truncate">
                          {type}
                      </Card.Text>
                      <Card.Text className="text-truncate">
                      {services.map(item=>(
                        <div className="d-flex flex-column flex-wrap justify-content-center align-items-center icon-container">
                          <img className="match-icon mb-1" src={`${ICONS_URL}${item.toLowerCase()}.svg`} alt="arbitraje" />
                          <p className="p-services mx-1">{item}</p>
                        </div>
                      ))}
                      </Card.Text>
                    </>
                  }
                  
              </Card.Body>
            </Col>
            
          </Row>
          
      </Card>
    </>
  )
}

export default CanchaAdmin
