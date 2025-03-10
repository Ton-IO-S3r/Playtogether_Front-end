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
import CreateGame from 'pages/CreateGame/CreateGame'
import 'rsuite/lib/styles/index.less';
import BuscarPartido from 'pages/BuscarPartido'
import SignUp from 'pages/Sign-up/SignUp'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'
import AdministradorCancha from 'pages/AdministradorCancha'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <ProtectedRoute  path="/usuarios/:id" component={PerfilUsuario}/>
            <ProtectedRoute  path="/admin/:id" component={AdministradorCancha}/>
            <Route path="/partidos/:id" component={VistaPartido}/>
            <Route path="/partidos/" component={BuscarPartido}/>
            <ProtectedRoute path="/crear-partido/" component={CreateGame}/>
            <Route path="/unirse/" component={SignUp}/>
          </Switch>
        </Router>
        
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
