import React, { Fragment } from 'react'
import './card.scss'

const Card = (props) => {
    const {content,className} = props
    return (
        <div className={`card-pt d-flex ${className}`}>  
        {content}   
        </div>
            
        
    )
}

export default Card
