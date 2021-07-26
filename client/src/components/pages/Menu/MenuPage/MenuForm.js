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
                date: undefined,
                dish: [],
            },
            modal: false,
            loading: false
        }
        this.MenuPurchase = new MenuPurchase()

    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ menu: { ...this.state.menu, [name]: value } })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.MenuPurchase
            .newMenu(this.state.menu)
            .then(() => {
                this.setState({ menu: { date: undefined, dish: [] } })
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
                    <FoodList />
                    {/* <Form.Group controlId="dish">
                        <Form.Label>Platos de comida</Form.Label>
                        <Form.Control type="text" value={this.state.menu.dish} onChange={this.handleInputChange} name="dish" />
                    </Form.Group> */}

                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Tomando nota' : 'Comprar menu'}
                    </Button>



                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Recibo Menu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <MenuDetails key={menu_id} closeModal={() => this.setState({ modal: false })} /> */}
                        </Modal.Body>
                    </Modal>

                </Form>

            </Container >
        )
    }
}

export default MenuForm