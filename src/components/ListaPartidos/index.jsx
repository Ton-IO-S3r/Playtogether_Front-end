import './listapartidos.scss'
import MatchResume from 'components/MatchResume'
import { Link } from 'react-router-dom'

const ListaPartidos = ({games}) => {
  return (
    <div className="list-games mx-auto p-3">
      <h3>Partidos activos</h3>
      <hr />
      <div className="matches-list-container">
        {
          games.map((game, index) => (
            <Link key={index.toString()} id={game.id} to={`partidos/${game.id}`} className="game-link">
              <MatchResume 
                date={game.date} 
                field_name={game.field.name} 
                match_type={game.field.football_type} 
                category={game.category} 
                time={game.time}
              />
            </Link>
            
          ))
        }
      </div>
    </div>
  )
}

export default ListaPartidos
