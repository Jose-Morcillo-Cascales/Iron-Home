import { Row, Container, Form, Button, Col } from "react-bootstrap"
import { Component } from 'react'
import LaundryService from '../../../services/laundry.service'
import './LaundryBooking.css'
import logoTokens from './IronTokens.png'

import UserNavigation from "../../shared/UserNavigation/UserNavigation"


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
                this.props.history.push('/wallet')
            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    render() {

        return (

            <>
                <div className='bg-blue'>

                    <UserNavigation color link="/" text='Inicio' />

                    <Container fluid>
                        <Row xs={1} md={6} className="row-reservation">
                            <Col md={6}>
                                <diV className='form-laundry'>
                                    <Form onSubmit={this.handleFormSubmit}>
                                        <h1>Reservar Servicio</h1>
                                        <Form.Group controlId="date">
                                            <Form.Label>¿Cuándo quieres tu servicio?</Form.Label>
                                            <Form.Control type="date" value={this.state.bookingDate} onChange={this.handleInputChange} name="bookingDate" />
                                        </Form.Group>
                                        <Form.Group controlId="quantity">
                                            <Form.Label>¿Cuántas tulas desea contratar?</Form.Label>
                                            <Form.Control type="number" value={this.state.quantity} onChange={this.handleInputChange} name="quantity" />
                                        </Form.Group>
                                        <Form.Group className="choose-option" controlId="dark">
                                            <Form.Check type="checkbox" label="Dark" value={this.state.dark} onChange={this.handleInputChange} name="dark" />
                                            <Form.Check type="checkbox" label="Delicate" value={this.state.delicate} onChange={this.handleInputChange} name="delicate" />
                                        </Form.Group>
                                        <Button className='btn-roomd' type="submit">ENVIAR</Button>
                                    </Form>
                                </diV>
                            </Col>
                            <Col md={6}>
                                <div className='ticket-menu'>
                                    <div className='ticket-title-menu' >
                                        <img className='logo-ticket-menu' src={logoTokens} alt="IronToken"></img>
                                        <h2>Tu Compra</h2>
                                    </div>
                                    <div className='ticket-body-menu'>
                                        <p><strong>CANTIDAD:</strong> </p>
                                        <p><strong>PRECIO:</strong> <b>8</b> Tokens / Tula</p>
                                        <h3><strong>TOTAL:</strong> {this.totalService(this.state.quantity)}  </h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )

    }
}

export default LaundryBooking

