import Navbar from './components/Navbar'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.css'
import CardsLanding from './components/CardsLanding'
import find_games from './assets/images/find_games.png'
import perfil_example from './assets/images/perfil_example.png'
import meet_people from './assets/images/meet_people.png'


function App() {
  return (
    <div className="App">
    <header>
    <Navbar/>
    <Hero/>
    </header>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <CardsLanding imagen={find_games} texto="Juega en donde quieras y cuando quieras."/>
          <CardsLanding imagen={perfil_example} texto="Genera tu perfil y crea partidos."/>
          <CardsLanding imagen={meet_people} texto="Conoce personas que comparten tu pasión por el fútbol."/>   
        </div>
      </div>
    </div>
    
      
    </div>
  );
}

export default App;
