import { Component } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import ProfileService from '../../../../services/profile.service'



class ProfileService extends Component {

    constructor() {
        super()
        this.state = {
            profile: {
                name: '',
                lastName: '',
                DNI: '',
                phone: '',
                image: '',
            },
            modal: false,
            loading: false
        }
        this.profileservice = new ProfileService()

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

                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Tomando nota' : 'Comprar menu'}
                    </Button>

                </Form>

            </Container >
        )
    }
}

export default ProfileService