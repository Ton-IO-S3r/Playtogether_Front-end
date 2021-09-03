import './listapartidos.scss'
import MatchResume from 'components/MatchResume'
import { Link } from 'react-router-dom'

const ListaPartidos = ({games, total}) => {
  return (
    <div className="list-games mx-auto p-3">
      <div className="d-flex flex-row justify-content-around align-items-center p-3 ">
        <h5>Partidos activos encontrados:</h5>
        <h4 className="mx-3">{total}</h4>
      </div>
      <hr />
      <div className="matches-list-container">
        {
          games.length>0 ? (games.map((game, index) => (
            <Link key={index.toString()} id={game.id} to={`/partidos/${game.id}`} className="game-link">
              <MatchResume 
                date={game.date} 
                field_name={game.field.name} 
                match_type={game.field.football_type} 
                category={game.category} 
                time={game.time}
              />
            </Link>
            
          ))): (<></>)
        }
      </div>
    </div>
  )
}

export default ListaPartidos
