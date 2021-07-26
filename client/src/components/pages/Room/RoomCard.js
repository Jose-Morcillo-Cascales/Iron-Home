
import { Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const RoomOptionCard = ({ image, _id, name }) => {
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={image[0]} />
                <Card.Body>
                    <Card.Title><Link to={`/habitaciones/detalles/${_id}`}>{name}</Link></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RoomOptionCard