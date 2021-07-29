import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


const AvalaibleRoomCard = ({ number, bath, price, capacity, type, _id, periodRequest, bookRoom }) => {

    const bathboolean = elm => !elm ? 'si' : 'no'
    const capitalized = string => string.toUpperCase()

    return (

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{capitalized(type)}</Card.Header>
                <Card.Body>
                    <Card.Title>{number}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{price} €</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{capacity}</ListGroupItem>
                    <ListGroupItem>baño {bathboolean(bath)}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => bookRoom(_id, periodRequest, capacity)}>BOOK NOW!</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AvalaibleRoomCard
