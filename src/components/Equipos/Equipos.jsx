import './equipos.scss'
import JugadorEquipo from '../JugadorEquipo'
import UnirseBtn from '../ActionBtn'
import { useState } from 'react'

const Equipos = (props) => {
  const {typeMatch, teams, maxPlayers } = props
  const players = []

  const [teamW, setTeamW] = useState(teams[0])
  const [teamB, setTeamB] = useState(teams[1])
  console.log(teamW)
  const playersByTeam = maxPlayers/2
  
  const setTeamWPlayers = (playersList) =>{
    const players=[]
    if(playersList.length > 0 && playersList.length < playersByTeam ){
      playersList.map((team_player)=>{
        console.log(team_player)
        players.push(
          <div className="d-flex flex-row justify-content-around flex-nowrap">
            <JugadorEquipo team="white" player_gender={team_player}/>
          </div>
        )
      })
    }
    for (let i = playersList.length; i < playersByTeam; i++) {
      players.push(
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <p>Lugar Disponible</p>  
        </div>
      )
      
    }
    console.log(players)
    return players
    
  }
  // if (typeMatch === 1){
  //   for (let i = 1 ; i<=10 ; i++){
  //     players.push( 
  //       <div className="d-flex flex-row justify-content-around flex-nowrap">
  //         <JugadorEquipo team="black"/>
  //         <JugadorEquipo team="white"/>
  //       </div>
  //     )
  //   }
  // }else if (typeMatch === 2){
  //   for (let i = 1 ; i<=8 ; i++){
  //     players.push(
  //       <div className="d-flex flex-row justify-content-around flex-nowrap">
  //         <JugadorEquipo team="black"/>
  //         <JugadorEquipo team="white"/>
  //       </div>
  //     )
  //   }
  // }else if (typeMatch === 3){
  //   for (let i = 1 ; i<=14 ; i++){
  //     players.push(
  //       <div className="d-flex flex-row justify-content-around flex-nowrap">
  //         <JugadorEquipo team="black"/>
  //         <JugadorEquipo team="white"/>
  //       </div>
  //     )
  //   }
  // }

  


  return (
    <div className="match-container p-3">
      <h5 className="fs-5 fw-bolder my-4">1 lugar disponible</h5>
      <hr />
      {/* <div>
        <span>Equipo negro</span>
        
        <span>Equipo blanco</span>
      </div>
      <div className="teams-container my-4">
        
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-5">
          <span>Equipo negro</span>
          {
            setTeamWPlayers(teamW.players)
          }
          </div>
          <div className="col-2">
            <span className="fs-5 mx-4"><strong>VS</strong></span>
          </div>
          <div className="col-5">

          </div>
        </div>
      </div>

      <UnirseBtn action="Unirse" />
    </div>
  )
}

export default Equipos
