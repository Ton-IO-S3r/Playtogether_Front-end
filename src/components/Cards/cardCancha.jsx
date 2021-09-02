import React from 'react'
import Card from 'react-bootstrap/Card'
import Btn from 'components/Buttons/CallActionBtn'

const cardCancha = (props) => {
    const {card_style,img,name,address,onClick} = props
    return (
        <>
            
            <Card className={card_style}>
                <Card.Img className="card-img" variant="top" src={img} alt="..."/>
                <Card.Body className="d-flex flex-column card-body">
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text>
                        {address}
                    </Card.Text>
                    <Btn text="Elegir" onClick={onClick}/>
                </Card.Body>
            </Card>

            
        </>
    )
}

export default cardCancha
