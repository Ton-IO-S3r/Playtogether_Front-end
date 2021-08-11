import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import CardPerfil from 'components/PerfilUsuario/CardPerfil';
import { useState } from 'react';
import avatar from 'assets/user_avatar2.jpg'

function App() {
  const [user, setUser] = useState(
    {
      "username": "ferdi1",
      "first_name": "fe",
      "last_name": "bracho",
      "date_joined": "2021-08-08",
      "players": {
          "dominant_foot": "derecho",
          "position": "Delantero",
          "matches": [
              {
                  "field": "sEZ",
                  "date": "2020-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-02-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-02-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10"
              },
              {
                  "field": "fb99",
                  "date": "2021-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10"
              },
              {
                  "field": "fb99",
                  "date": "2021-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10"
              },
              {
                  "field": "sEZ",
                  "date": "2022-08-10"
              }
          ],
          "matches_count": 11,
          "fields_count": 2
      }
    })
  return (
    <div className="App">
      <Header/>
      <CardPerfil avatar={avatar} user={user}/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
