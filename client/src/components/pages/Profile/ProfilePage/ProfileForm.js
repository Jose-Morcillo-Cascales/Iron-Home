import { Component } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import ProfileService from '../../../../services/profile.service'
import UploadsService from '../../../../services/uploads.service'


class ProfileForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: {
                name: props.profile.name,
                lastName: props.profile.lastName,
                DNI: props.profile.DNI,
                phone: props.profile.phone,
                image: props.profile.image,

            },
            modal: false,
            loading: false
        }
        this.profileservice = new ProfileService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ profile: { ...this.state.profile, [name]: value } })
    }

    handleFormSubmit = e => {

        e.preventDefault()
        this.profileservice
            .editProfile(this.state.profile)
            .then((response) => {
                this.setState({ profile: response })
                this.props.closeModal()
                this.props.refreshProfile()
                this.props.showMessage('Perfil editado correctamente')


            })
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    loading: false,
                    profile: { ...this.state.profile, image: response.data.cloudinary_url }
                })

            })
            .catch(err => this.props.showMessage(err.response.data.message))

    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" value={this.state.profile.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" value={this.state.profile.lastName} onChange={this.handleInputChange} name="lastName" />
                    </Form.Group>

                    <Form.Group controlId="DNI">
                        <Form.Label>DNI:</Form.Label>
                        <Form.Control type="text" value={this.state.profile.DNI} onChange={this.handleInputChange} name="DNI" />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="text" value={this.state.profile.phone} onChange={this.handleInputChange} name="phone" />
                    </Form.Group>
                    <Form.Group controlId="mail">

                        <Form.Control hidden type="text" value={this.props.profile.mail} name="mail" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Imagen (file) </Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>


                    <Button onClick={() => this.setState({ modal: true })} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Subiendo imagen' : 'Editar'}
                    </Button>

                </Form>

            </Container >
        )
    }
}

export default ProfileForm