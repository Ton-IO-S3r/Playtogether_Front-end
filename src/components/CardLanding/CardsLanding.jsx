import React, { Fragment } from 'react'
// import find_games from '../assets/img/find_games.png'
import './cardLanding.scss'

const CardLanding = (props) => {
    const {image, text, className} = props
    return (
        <Fragment>
            
                <div className={`col col-md-4 col-lg-4  d-flex mt-4 mx-md-2 mx-lg-4 mx-xl-5 flex-column justify-content-between align-items-center card-landing ${className}`}>
                    <img className="mt-3" src={image} alt='...'/>
                    <h2 className="justify-content-center align-self-center mb-3">{text}</h2>
                </div>
            
            
        </Fragment>
    )
}

export default CardLanding
