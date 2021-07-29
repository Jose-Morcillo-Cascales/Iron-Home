
import { Component } from 'react'
import { Container, Card, Button, Col, Form, FormCheck, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuPurchase from '../../../../services/menu.service'
import FoodDetails from './FoodDetails'
import Spinner from './../../../shared/Spinner/Spinner'
import './FoodCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'

class FoodCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            modal: false
        }
        // this.foodService = new MenuPurchase()
        this.vegetableboolean = elm => !elm ? 'No Vegetariano' : 'Plato vegetariano'
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
                    <Spinner />
                    :
                    <>
                        <Col md={3}>
                            <Form.Group as={Col} controlId="dish">
                                <Card className="food-card">
                                    <Card.Img variant="top" src={this.props.food.image[0]} />
                                    <Card.Body>
                                        <Card.Title>{this.props.food.name}</Card.Title>
                                        <Card.Text>{this.vegetableboolean(this.props.food.vegetarian)}</Card.Text>
                                        <Card.Text><FontAwesomeIcon icon={faConciergeBell} className='icon-font' /> {this.translation(this.props.food.type)}</Card.Text>
                                        <div className='card-choose'>
                                            <Link onClick={() => this.setState({ modal: true })}>Ver detalles</Link>
                                            <FormCheck checked={this.state.checked} value={this.props.food.id} onChange={() => this.changeChecked()} ></FormCheck>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Form.Group>
                        </Col>
                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })} className='details-modal'>
                            <Modal.Body>
                                <FoodDetails food_id={this.props.food._id} key={this.props.food._id} closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>
                    </>
                }

            </>
        )
    }
}


export default FoodCard