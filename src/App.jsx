import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import CardPerfil from 'components/CardPerfil';
import { useState } from 'react';
import avatar from 'assets/user3.jpg'
import VistaPartido from 'components/VistaPartido';
import UserMatches from 'components/UserMatches';
import VistaPerfil from 'components/VistaPerfil';

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
                  "field": "Deportivo Santa Cruz Meyehualco",
                  "date": "2020-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-02-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-02-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "fb99",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "fb99",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2021-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              },
              {
                  "field": "sEZ",
                  "date": "2022-08-10",
                  "time": "5:00 pm",
                  "match_type": "7 vs 7",
                  "category": "Varonil"
              }
          ],
          "matches_count": 11,
          "fields_count": 2
      }
    })
  return (
    <div className="App">
      <Header/>
      <VistaPartido/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
