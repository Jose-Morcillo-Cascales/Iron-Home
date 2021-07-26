import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const FoodCard = ({ name, vegetarian, type, image, _id }) => {

    const vegetableboolean = elm => !elm ? 'Plato con carne' : 'Plato vegetariano'

    return (

        <Col md={3}>

            <Card className="food-card">
                <Card.Img variant="top" src={image[0]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Vegetariano:{vegetableboolean({ vegetarian })}</Card.Text>
                    <Card.Text>tipo:{type}</Card.Text>
                    <Link to={`/menu/detalles-comida/${_id}`}>
                        <Button variant="dark" block >Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default FoodCard