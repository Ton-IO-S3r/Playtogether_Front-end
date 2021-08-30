import './equipos.scss'
import JugadorEquipo from '../JugadorEquipo'
import UnirseBtn from '../ActionBtn'
import { useEffect, useState } from 'react'
import Btn from 'components/Buttons/CallActionBtn'
import { AUTH_ID } from 'Constants/API'

const Equipos = (props) => {
  const { field, team } = props.match
  const {onClick,showButton,onClickLeave} = props
  const players = []

  const [teamW, setTeamW] = useState(team[0])
  const [teamB, setTeamB] = useState(team[1])
  const [modalShow, setModalShow] = useState(false);
  // const [teamW, setTeamW] = useState(team[0])
  // const [teamB, setTeamB] = useState(team[1])
  // useEffect(()=>{
  //   setTeamW(team[0])
  //   setTeamB(team[1])
  // },[props.match])

  useEffect(()=>{
    if (team[0].name.includes("a")){
      setTeamW(team[0])
    }else{
      setTeamW(team[1])
    }

    if (team[1].name.includes("b")){
      setTeamB(team[1])
    }else{
      setTeamB(team[0])
    }
      
      
    },[props.match])


    console.log(teamB)
    console.log(teamW)

  const playersByTeam = field.football_type.max_players/2
  
  const setTeamPlayers = (playersList) =>{
    const players=[]
    if(playersList.length > 0 && playersList.length < playersByTeam ){
      playersList.map((team_player)=>{
        console.log(team_player)
        players.push(
          <div className="d-flex flex-row justify-content-around flex-nowrap">
            <JugadorEquipo player_data={team_player} />
          </div>
        )
      })
    }
    for (let i = playersList.length; i < playersByTeam; i++) {
      players.push(
        <div className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo player_data={{}} />
        </div>
      )
      
    }
    return players
    
  }

  const handleLeave = () =>{

  }
  
  return (
    <div className="match-container p-3">
      <h5 className="fs-5 fw-bolder my-4">1 lugar disponible</h5>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <span>Equipo blanco</span>
            {
              setTeamPlayers(teamW.players)
            }
            </div>
          <div className="col-2">
            <span className="fs-5 mx-4"><strong>VS</strong></span>
          </div>
          <div className="col-5">
            <span>Equipo negro</span>
            {
              setTeamPlayers(teamB.players)
            }
          </div>
        </div>
      </div>
      {
        showButton === false ? <Btn text="Unirse" onClick={onClick}/> : <Btn text="Dejar" onClick={onClickLeave}/>
      }
      
      
    </div>
  )
}

export default Equipos
