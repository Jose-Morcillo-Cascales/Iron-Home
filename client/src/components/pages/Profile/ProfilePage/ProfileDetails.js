import { Component } from 'react'
import { Container, Row, Col, Card, Image, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileForm from './ProfileForm'
import ProfileService from './../../../../services/profile.service'
import Spinner from './../../../shared/Spinner/Spinner'
import './ProfileDetails.css'


class ProfileDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: undefined,
            modal: false,
            wallet: undefined
        }
        this.profileService = new ProfileService()

    }

    loadProfileDetails() {

        this.profileService
            .profile(this.state)
            .then(response => {
                this.setState({ profile: response.data })

            })
            .catch(err => this.props.showMessage(err.response.data.message))

    }

    loadWalletBalance = () => {
        this.profileService
            .profileWallet()
            .then(response => {
                this.setState({ wallet: response.data.balance })

            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    componentDidMount() {
        this.loadProfileDetails()
        this.loadWalletBalance()
    }


    render() {

        return (

            <Container>

                {!this.state.profile
                    ?
                    <Spinner />
                    :
                    <>
                        <Row className="row-datails">

                            <Col md={6}>
                                <Image className="d-block w-100" style={{ width: '100%' }} alt={this.state.profile.image} src={this.state.profile.image} />
                            </Col>
                            <Col md={4}>
                                <div className='datails-card'>
                                    <h3>{this.state.profile.name} {this.state.profile.lastName}</h3>

                                    <p className='p-datails'>DNI:{this.state.profile.DNI}</p>
                                    <p className='p-datails'>Email:{this.state.profile.mail}</p>
                                    <p className='p-datails'>Teléfono:{this.state.profile.phone}</p>
                                    {/* <p className='p-datails'>{this.state.profile.role}</p> */}

                                    <Link className="btn btn-datail" onClick={() => this.setState({ modal: true })}>Editar perfil</Link>

                                </div>
                            </Col>

                            <Card className="food-card">

                                <Card.Body>
                                    <Card.Title>{this.state.wallet}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Row>

                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Body>
                                <ProfileForm refreshProfile={() => this.loadProfileDetails()} profile={this.state.profile} key={this.state.profile._id} closeModal={() => this.setState({ modal: false })} showMessage={this.props.showMessage} />
                            </Modal.Body>
                        </Modal>
                    </>
                }

            </Container>
        )
    }
}


export default ProfileDetails