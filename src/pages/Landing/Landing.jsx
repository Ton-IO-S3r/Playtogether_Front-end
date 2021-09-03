import React, { Fragment } from 'react'
//COMPONENTES
import Hero from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import CardsLanding from 'components/CardLanding/CardsLanding'
//RECURSOS
import find_games from 'assets/images/find_games.png'
import perfil_example from 'assets/icons/perfil_example.svg'
import meet_people from 'assets/icons/meet_people.svg'
import page from 'assets/images/pagina.gif'
import pageMobile from 'assets/images/manos.gif'
import './landing.scss'
const Landing = () => {
    return (
    <Fragment>
    <Hero/>
    <div className="d-flex justify-content-center mt-5 mb-5 align-items-center landing-text">
       
        <p className="mt-2  px-4 px-lg-0"><strong>PlayTogether!</strong>Surgió de la necesidad de relacionarse y unir personas a través del deporte, facilitando el acceso a partidos y a la creación de estos.</p>
        
        </div>
    <div className="container-fluid container-text p-3 pb-4">
    
      <div className="container">
      
        <div className="row  mt-lg-5 mb-lg-5 ">
        
        
        <h1 className="cards-title">Crea tu cuenta y accede a veneficios.</h1>
        <CardsLanding className="transition-card" image={find_games} text="Encuentra partidos cerca de ti y conoce gente"/>
         
         <CardsLanding image={perfil_example} text="Unete y podras crear partidos e invitar a tus amigos"/>
         
         <CardsLanding image={meet_people} text="Accede a los perfiles de las personas con las que jugaste"/>  
           
        </div>
        
      </div>
    </div>
    <div className="container-fluid  p-3 pb-4">
    
      <div className="container">
      
        <div className="row  mt-lg-5 mb-lg-5 ">
        <h1 className="cards-title">Plataforma web intuitiva y disponible desde tu celular.</h1>
        <div className="col-12 mt-4  img-page">
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <img src={page}/>
            <div className="d-flex justify-content-center align-items-center card-text">
              <p>Navega por los diferentes menu y busca la cancha y el partido ideal</p>
            </div>
          </div>
        </div>

        <div className="col-12  img-page">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="order-2  d-flex justify-content-center align-items-center card-text">
              <p>Accede desde tu celular y arma partidos <br/> con tus amigos</p>
            </div>
            <img className="order-lg-2" src={pageMobile}/>
            
          </div>
        </div>
        
           
        </div>
        
      </div>
    </div>
   
    
    <Footer mt="mt-5"/>
    </Fragment>
    
    )
}

export default Landing
