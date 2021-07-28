import { Component } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import MenuPurchase from '../../../../services/menu.service'
import FoodList from './FoodList'
import MenuDetails from './MenuDetails'



class MenuForm extends Component {

    constructor() {
        super()
        this.state = {
            menu: {
                date: '',
                dish: [],
            },
            modal: false,
            loading: false,
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
                this.props.history.push('/perfil')
            })
            .catch(err => console.log(err))
    }


    PriceMenu(Alldishes) {
        let finalPrice = Alldishes * 6
        return finalPrice
    }


    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="date">
                        <Form.Label>¿Que dia quiere?</Form.Label>
                        <Form.Control type="date" value={this.state.menu.date} onChange={this.handleInputChange} name="date" />
                    </Form.Group>


                    <Form.Label>Platos del dia</Form.Label>

                    <FoodList match={this.props.match} handleCheckbox={this.handleCheckbox} />


                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Tomando nota' : 'Comprar menu'}
                    </Button>

                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Recibo Menu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MenuDetails menu_id={this.state.menu_id} key={this.state.menu.id} closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>
                    </Modal>

                </Form>
                <h1>{this.PriceMenu(this.state.menu.dish.length)}</h1>
            </Container >
        )
    }
}

export default MenuForm