import React from 'react'
import Card from 'react-bootstrap/Card'
import Btn from 'components/Buttons/CallActionBtn'
import img from 'assets/images/vienna-reyes-Zs_o1IjVPt4-unsplash.jpg'

const cardCancha = (props) => {
    const {style,img,name,address,onClick} = props
    return (
        <>
            
            <Card className={style}>
                <Card.Img className="card-img" variant="top" src={img} alt="..."/>
                <Card.Body className="d-flex flex-column card-body">
                    <Card.Title>{name}</Card.Title>
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
