import React from 'react'
//RUTAS
import {BrowserRouter as Router, Switch, Route}   from 'react-router-dom'
//ESTILO BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
//PAGINAS-COMPONENTES
import Landing from 'pages/Landing'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
