import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const FoodCard = ({ title, vegetarian, type, imageUrl, food_id }) => {
    return (

        <Col md={3}>

            <Card className="food-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Vegetariano:{vegetarian}</Card.Text>
                    <Card.Text>tipo:{type}</Card.Text>
                    <Link to={`/menu/detalle/${food_id}`}>
                        <Button variant="dark" block >Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default FoodCard