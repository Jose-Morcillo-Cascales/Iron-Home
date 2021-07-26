import { Form, Col, Card, Button, FormCheck } from "react-bootstrap"
import { Link } from 'react-router-dom'

const FoodCard = ({ name, vegetarian, type, image, _id, handleCheckbox }) => {

    const vegetableboolean = elm => !elm ? 'Este plato contiene productos carnicos' : 'Plato vegetariano'
    const translation = (type) => {

        switch (type) {
            case 'first':
                return 'Primero'
            case 'second':
                return 'Segundo'
            case 'dessert':
                return 'Postre'
        }
    }

    return (


        <Form.Group as={Col} controlId="dish">

            <Card className="food-card">
                <Card.Img variant="top" src={image[0]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{vegetableboolean(vegetarian)}</Card.Text>
                    <Card.Text>{translation(type)}</Card.Text>
                    <Link to={`/menu/detalles-comida/${_id}`}>
                        <Button variant="dark" block >Ver detalles</Button>
                    </Link>
                    <FormCheck value={_id} name='dish' onChange={() => handleCheckbox(_id)}></FormCheck>
                </Card.Body>
            </Card>
        </Form.Group>

    )
}

export default FoodCard