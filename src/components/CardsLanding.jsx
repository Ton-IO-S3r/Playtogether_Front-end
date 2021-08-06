import React, { Fragment } from 'react'
// import find_games from '../assets/img/find_games.png'

const CardLanding = (props) => {
    const {imagen, texto} = props
    return (
        <Fragment>
            
                <div className="col col-md-4 col-lg-4  d-flex mt-4 flex-column justify-content-between align-items-center card-landing">
                    <img className="mt-3" src={imagen} alt='...'/>
                    <h2 className="justify-content-center align-self-center mb-3">{texto}</h2>
                </div>
            
            
        </Fragment>
    )
}

export default CardLanding
