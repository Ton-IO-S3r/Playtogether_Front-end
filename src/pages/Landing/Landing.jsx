import React, { Fragment } from 'react'
//COMPONENTES
import Hero from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import CardsLanding from 'components/CardLanding/CardsLanding'
//RECURSOS
import find_games from 'assets/images/find_games.png'
import perfil_example from 'assets/icons/perfil_example.svg'
import meet_people from 'assets/icons/meet_people.svg'

const Landing = () => {
    return (
    <Fragment>
    <Hero/>
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-3 mb-3">
          <CardsLanding image={find_games} text="Juega en donde quieras y cuando quieras."/>
         
          <CardsLanding image={perfil_example} text="Genera tu perfil y crea partidos."/>
          
          <CardsLanding image={meet_people} text="Conoce personas que comparten tu pasión por el fútbol."/>   
        </div>
      </div>
    </div>
    <Footer mt="mt-5"/>
    </Fragment>
    
    )
}

export default Landing
