import { Component } from 'react'
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileForm from './ProfileForm'
import ProfileService from './../../../../services/profile.service'
import Spinner from './../../../shared/Spinner/Spinner'

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
            .then(response => {
                this.setState({ profile: response.data })
                console.log(this.state.profile)
            })
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
                    <Spinner />
                    :
                    <>
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
                                <Link onClick={() => this.setState({ modal: true })}>Editar perfil</Link>


                            </Col>
                        </Row>

                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Body>
                                <ProfileForm profile_id={this.state.profile._id} key={this.state.profile._id} closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>
                    </>
                }

            </Container>
        )
    }
}
// menu_id = { this.state.menu_id }

export default ProfileDetails