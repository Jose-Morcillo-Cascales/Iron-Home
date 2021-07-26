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
        this.setState({ profile: { ...this.state.profile, [name]: value } })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.profileservice
            .newMenu(this.state.profile)
            .then(() => {
                this.setState({
                    menu: {
                        name: '',
                        lastName: '',
                        DNI: '',
                        phone: '',
                        image: '',
                    }
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" value={this.state.menu.date} onChange={this.handleInputChange} name="name" />
                    </Form.Group>
                    <Form.Group controlId="lasName">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" value={this.state.menu.date} onChange={this.handleInputChange} name="lasName" />
                    </Form.Group>

                    <Form.Group controlId="DNI">
                        <Form.Label>DNI:</Form.Label>
                        <Form.Control type="text" value={this.state.menu.date} onChange={this.handleInputChange} name="DNI" />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="text" value={this.state.menu.phone} onChange={this.handleInputChange} name="phone" />
                    </Form.Group>


                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Editando' : 'Editar'}
                    </Button>

                </Form>

            </Container >
        )
    }
}

export default ProfileService