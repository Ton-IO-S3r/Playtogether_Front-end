// const { default: MatchResume } = require("components/MatchResume")
import './usermatches.scss'
import MatchResume from "components/MatchResume"

const UserMatches = ({matches, fields, num_matches}) => {
  return (
    <div className="user-matches-container text-center py-4 px-2 mx-auto">
      <div className="d-flex flex-row justify-content-between align-items-center p-3">
        <h5>Partidos jugados:</h5>
        <h4>{num_matches}</h4>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-3">
        <h5>Canchas visitadas:</h5>
        <h4>{fields}</h4>
      </div>
      <hr />
      <div className="matches-list-container">
        {
          matches.map((match) => (
            
            <MatchResume date={match.date} time={match.time} field_name={match.field} category={match.category} match_type={match.match_type}/>
          ))
        }
      </div>
      
      
      
    </div>
  )
}

export default UserMatches
