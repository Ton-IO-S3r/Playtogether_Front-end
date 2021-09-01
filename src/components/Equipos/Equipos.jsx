import './equipos.scss'
import JugadorEquipo from '../JugadorEquipo'
import { useEffect, useState } from 'react'
import Btn from 'components/Buttons/CallActionBtn'
import { isAuthenticated } from 'Constants/API'

const Equipos = (props) => {
  const { field, team } = props.match
  const {onClick,showButton,onClickLeave,isActivate,teamsFull, inTeam} = props

  const [teamW, setTeamW] = useState(team[0])
  const [teamB, setTeamB] = useState(team[1])
  // const [modalShow, setModalShow] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState(0)

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
    setAvailablePlaces(field.football_type.max_players - team[0].players.length - team[1].players.length)
  },[props.match])

  const playersByTeam = field.football_type.max_players/2

  const setTeamPlayers = (playersList) =>{
    const players=[]
    if(playersList.length > 0 && playersList.length < playersByTeam ){
      playersList.map((team_player, index)=>{
        players.push(
          <div key={index.toString()} className="d-flex flex-row justify-content-around flex-nowrap">
            <JugadorEquipo player_data={team_player} />
          </div>
        )
        return players
      })
      
    }
    for (let i = playersList.length; i < playersByTeam; i++) {
      players.push(
        <div key={i.toString()} className="d-flex flex-row justify-content-around flex-nowrap">
          <JugadorEquipo player_data={{}} />
        </div>
      )
      
    }
    return players
    
  }

  return (
    <div className="match-container p-3">
      <h5 className="fs-5 fw-bolder my-4">
      {`${availablePlaces === 0 ? 'Partido lleno': (`${availablePlaces} ${availablePlaces !== 1 ? 'lugares disponibles':'lugar disponible'}`) }`}
      </h5>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <span className="team-name">Equipo blanco</span>
            {
              setTeamPlayers(teamW.players)
            }
            </div>
          <div className="col-2">
            <span className="fs-5 mx-4"><strong>VS</strong></span>
          </div>
          <div className="col-5">
            <span className="team-name">Equipo negro</span>
            {
              setTeamPlayers(teamB.players)
            }
          </div>
        </div>
      </div>

      {/* {
        isActivate === false ? (<div className="alert alert-warning">Partido finalizado</div>) 
        : (teamsFull === true && inTeam !== "" ? (!isAuthenticated ? (<Btn className="mb-3" text="Unirse" onClick={()=>{window.location.href = `/login`;}}/>) 
        
        : 
          (
          showButton === false ? <Btn text="Unirse" onClick={onClick}/> : <Btn text="Dejar" onClick={onClickLeave}/>
          )) 
        :
        (
          teamsFull === true && !inTeam !== ""  ? <div className="alert alert-success" >Partido lleno</div> : (<Btn className="mb-3" text="Unirse" onClick={()=>{window.location.href = `/login`;}}/>) 
        )
        
         )
        
      } */}

      {
        isActivate === false ? (<div className="alert alert-warning">Partido finalizado</div>) 
        : 
        (teamsFull === true && inTeam !== "" ? ( !isAuthenticated ? (<Btn className="mb-3" text="Unirse" onClick={()=>{window.location.href = `/login`;}}/>) : (showButton === false ? <Btn text="Unirse" onClick={onClick}/> : <Btn text="Dejar" onClick={onClickLeave}/>)) 
        :
        (teamsFull === true && !inTeam !== ""  ? <div className="alert alert-success" >Partido lleno</div> : ( !isAuthenticated ? (<Btn className="mb-3" text="Unirse" onClick={()=>{window.location.href = `/login`;}}/>) : (showButton === false ? <Btn text="Unirse" onClick={onClick}/> : <Btn text="Dejar" onClick={onClickLeave}/>)) )
        )
      } 

      
    </div>
  )
}

export default Equipos
