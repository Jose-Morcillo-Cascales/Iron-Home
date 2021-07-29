
import { Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './RoomCard.css'

const RoomOptionCard = ({ image, _id, name }) => {
    return (

        <Col>
            <Link className='link-card' to={`/habitaciones/detalles/${_id}`}>
                <Card className='room-card'>
                    <Card.Img variant="top" src={image[0]} />
                    <Card.Body>
                        <Card.Title className='title'>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default RoomOptionCard