
import { Component } from 'react'
import { Container, Card, Button, Col, Form, FormCheck, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuPurchase from '../../../../services/menu.service'
import FoodDetails from './FoodDetails'


class FoodCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            modal: false
        }
        // this.foodService = new MenuPurchase()
        this.vegetableboolean = elm => !elm ? 'Este plato contiene productos carnicos' : 'Plato vegetariano'
        this.translation = type => {

            switch (type) {
                case 'first':
                    return 'Primero'
                case 'second':
                    return 'Segundo'
                case 'dessert':
                    return 'Postre'

            }

        }

    }

    changeChecked() {

        this.setState({ checked: !this.state.checked })
        console.log(this.props.food._id)
        console.log(this.state.checked)
        const id = this.props.food._id
        this.props.handleCheckbox(id, !this.state.checked)

    }


    render() {

        return (

            <>

                {!this.props.food
                    ?
                    <h3>Cargando</h3>
                    :
                    <Col md={4}>
                        <Form.Group as={Col} controlId="dish">
                            <Card className="food-card">
                                <Card.Img variant="top" src={this.props.food.image[0]} />
                                <Card.Body>
                                    <Card.Title>{this.props.food.name}</Card.Title>
                                    <Card.Text>{this.vegetableboolean(this.props.food.vegetarian)}</Card.Text>
                                    <Card.Text>{this.translation(this.props.food.type)}</Card.Text>
                                    <Link onClick={() => this.setState({ modal: true })}>Ver detalles</Link>
                                    <FormCheck checked={this.state.checked} value={this.props.food.id} onChange={() => this.changeChecked()} ></FormCheck>
                                </Card.Body>
                            </Card>
                        </Form.Group>
                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Body>
                                <FoodDetails food_id={this.props.food._id} key={this.props.food._id} closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>
                    </Col>
                }

            </>
        )
    }
}


export default FoodCard