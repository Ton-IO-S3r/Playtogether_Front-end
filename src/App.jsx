import React from 'react'
//RUTAS
import {BrowserRouter as Router, Switch, Route}   from 'react-router-dom'
//ESTILO BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
//PAGINAS-COMPONENTES
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import PerfilUsuario from 'pages/Perfil';
import VistaPartido from 'pages/VistaPartido'
import BuscarPartido from 'pages/BuscarPartido'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/usuarios/:id" component={PerfilUsuario}/>
          <Route path="/partidos/:id" component={VistaPartido}/>
          <Route path="/partidos/" component={BuscarPartido}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
