import { Component } from 'react'
import { Form, Button, Container, Modal, Col, Row } from 'react-bootstrap'
import MenuPurchase from '../../../../services/menu.service'
import FoodList from './FoodList'
import './MenuForm.css'
import logoTokens from './IronTokens.png'



class MenuForm extends Component {

    constructor() {
        super()
        this.state = {
            menu: {
                date: '',
                dish: [],
            },
            modal: false,
            menu_id: ''

        }
        this.MenuPurchase = new MenuPurchase()

    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ menu: { ...this.state.menu, [name]: value } })
    }

    handleCheckbox = (id, checked) => {
        console.log('esto me llega', id, checked)

        const menuCopy = { ...this.state.menu }
        if (checked === true) {
            menuCopy.dish.push(id)
        }
        if (checked === false) {
            menuCopy.dish.splice(menuCopy.dish.indexOf(id), 1)
        }
        this.setState({ menu: menuCopy })
        console.log(menuCopy)

    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.MenuPurchase
            .newMenu(this.state.menu.date, this.state.menu.dish)
            .then(() => {
                this.setState({ menu: { date: '', dish: [] } })
                this.props.showMessage('Compra realizada')
                this.props.history.push('/wallet')
            })
            .catch(err => console.log(err))
    }


    PriceMenu(Alldishes) {
        let finalPrice = Alldishes * 6
        return finalPrice
    }


    render() {
        return (
            <>
                <Row>
                    <div className='form-contain'>
                        <Form onSubmit={this.handleFormSubmit}>
                            <h1>Reservar Menú</h1>
                            <Form.Group controlId="date">
                                <Row className='row-menu'>
                                    <Form.Label>1. ¿Qué día quiere?</Form.Label>
                                    <Col>
                                        <Form.Control type="date" value={this.state.menu.date} onChange={this.handleInputChange} name="date" />
                                    </Col >
                                    <Col>
                                        <Button className='Button-Box' type="submit" disabled={this.state.loading}>
                                            {this.state.loading ? 'Tomando nota' : 'Comprar menú'}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Label>2. Elija los platos</Form.Label>
                            <FoodList match={this.props.match} handleCheckbox={this.handleCheckbox} />
                        </Form>
                    </div>
                </Row>
                <Row className='ticket-row'>
                    <div className='ticket-box ticket-menu'>
                        <div className='logo-ticket'>
                            <img src={logoTokens} alt="IronToken"></img>
                        </div>
                        <h1>Tu Compra</h1>
                        <p><strong>Cantidad:</strong> </p>
                        <h6><strong>Precio:</strong> 8 Tokens/Tula</h6>
                        <hr></hr>
                        <h3><strong>Total:</strong> {this.PriceMenu(this.state.menu.dish.length)}  </h3>
                    </div>
                </Row>
            </>
        )
    }
}

export default MenuForm