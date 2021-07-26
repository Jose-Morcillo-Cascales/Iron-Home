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
            loading: false
        }
        this.MenuPurchase = new MenuPurchase()

    }


    handleInputChange = e => {
        console.log(e.target.name)
        const { name, value } = e.target
        this.setState({ menu: { ...this.state.menu, [name]: value } })
        console.log(this.state.menu, 'este es el menu')
    }
    handleCheckbox = newFood => {
        const menuCopy = { ...this.state.menu }
        console.log(menuCopy)
        menuCopy.dish.push(newFood)
        this.setState({ menu: menuCopy })
        console.log(this.state.menu.dish, 'este es el array de platos')
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.MenuPurchase
            .newMenu(this.state.menu.date, this.state.menu.dish)
            .then(() => {
                this.setState({ menu: { date: '', dish: [] } })
            })
            .catch(err => console.log(err))
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

                    <FoodList handleCheckbox={this.handleCheckbox} />


                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Tomando nota' : 'Comprar menu'}
                    </Button>



                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Recibo Menu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MenuDetails menu_id={this.state.menu.id} key={this.state.menu.id} closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>
                    </Modal>

                </Form>

            </Container >
        )
    }
}

export default MenuForm