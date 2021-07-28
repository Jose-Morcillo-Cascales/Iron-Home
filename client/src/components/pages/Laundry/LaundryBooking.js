import { Row, Container, Form, Button, Col } from "react-bootstrap"
import { Component } from 'react'
import LaundryService from '../../../services/laundry.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'


class LaundryBooking extends Component {

    constructor() {
        super()
        this.state = {
            bookingDate: '',
            quantity: '',
            dark: false,
            delicate: false,
            user: '',
        }
        this.laundryService = new LaundryService()
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.handleUser()
        this.totalService()

        this.setState({ [name]: value })

    }


    totalService = (tulaQuantity) => {
        let totalCount = tulaQuantity * 8
        return totalCount

    }

    handleUser = () => {
        const userId = this.props.loggedUser._id
        this.setState({ user: userId })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.laundryService
            .bookingLaundry(this.state)
            .then(() => {
                this.props.showMessage('Compra realizada')
                this.setState({ bookingDate: '', dark: false, delicate: false, quantity: '', total: 0 })
                this.props.history.push('/perfil')
            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    render() {

        return (

            <>
                <Container>
                    <Row>
                        <div className='user-navegation'>
                            <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                        </div>
                    </Row>
                </Container>

                <Container>

                    <h1>Reservar Servicio</h1>
                    <Row xs={1} md={6} className="g-4">

                        <Col md={6}>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group controlId="date">
                                    <Form.Label>¿Cuándo quieres tu servicio?</Form.Label>
                                    <Form.Control type="date" value={this.state.bookingDate} onChange={this.handleInputChange} name="bookingDate" />
                                </Form.Group>
                                <Form.Group controlId="quantity">
                                    <Form.Label>¿Cuantas tulas desea contratar?</Form.Label>
                                    <Form.Control type="number" value={this.state.quantity} onChange={this.handleInputChange} name="quantity" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="dark">
                                    <Form.Check type="checkbox" label="Dark" value={this.state.dark} onChange={this.handleInputChange} name="dark" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="delicate">
                                    <Form.Check type="checkbox" label="Delicate" value={this.state.delicate} onChange={this.handleInputChange} name="delicate" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h1>Tu Compra</h1>
                                <p><strong>Cantidad:</strong> {this.state.quantity}</p>
                                <p><strong>Precio:</strong> 8 TOKENS/Tula</p>
                                <hr></hr>
                                <h4><strong>Total:</strong>{this.totalService(this.state.quantity)} </h4>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </>
        )

    }
}

export default LaundryBooking

