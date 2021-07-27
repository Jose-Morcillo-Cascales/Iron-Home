import { Component } from 'react'
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileService from './../../../../services/profile.service'

class ProfileDetails extends Component {

    constructor() {
        super()
        this.state = {
            profile: undefined,
            modal: false
        }
        this.profileService = new ProfileService()
    }

    loadProfileDetails() {

        this.profileService
            .profile()
            .then(response => this.setState({ profile: response.data }))
            .catch(err => console.log(err))

    }

    componentDidMount() {
        this.loadProfileDetails()
    }


    render() {

        return (

            <Container>

                {!this.state.profile
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">

                        <Col md={4}>
                            <Image src={this.state.profile.image} />
                        </Col>

                        <Col md={4}>

                            <h1>{this.state.profile.name}{this.state.profile.surname}</h1>
                            <h5>{this.state.profile.DNI}</h5>
                            <ul>
                                <li>{this.state.profile.mail}</li>
                                <li>{this.state.profile.phone}</li>
                                <li>{this.state.profile.role}</li>
                            </ul>
                            <Link to={`/perfil/edit?user_id=${this.state.profile.id}`} >
                                <Button className="btn btn-dark">Editar perfil</Button>
                            </Link>


                        </Col>
                    </Row>
                }
                {/*  <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                    <Modal.Header>
                        <Modal.Title>Recibo Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MenuDetails key={this.state.profile.id} closeModal={() => this.setState({ modal: false })} />
                    </Modal.Body>
                </Modal>
 */}
            </Container>
        )
    }
}
// menu_id = { this.state.menu_id }

export default ProfileDetails