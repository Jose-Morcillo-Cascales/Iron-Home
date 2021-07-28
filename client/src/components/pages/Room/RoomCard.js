
import { Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './RoomCard.css'

const RoomOptionCard = ({ image, _id, name }) => {
    return (

        <Col>
            <Card className='room-card'>
                <Card.Img variant="top" src={image[0]} />
                <Card.Body>
                    <Card.Title className='title'><Link to={`/habitaciones/detalles/${_id}`}>{name}</Link></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RoomOptionCard