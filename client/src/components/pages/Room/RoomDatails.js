import { Component } from 'react'
import RoomService from '../../../services/room.service'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from "../../shared/Spinner/Spinner"
import UserNavigation from '../../shared/UserNavigation/UserNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faUserFriends, faReceipt, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'
import './RoomDatails.css'

class RoomDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: undefined
        }
        this.RoomService = new RoomService()
    }
    /* loadDetailsRoom() {

    } */

    componentDidMount() {

        const { room_id } = this.props.match.params

        this.RoomService
            .roomDetails(room_id)
            .then(response => this.setState({ rooms: response.data }))
            .catch(err => this.props.showMessage(err.response.data.message))
    }


    render() {

        return (

            <>

                {!this.state.rooms
                    ?
                    <Spinner />
                    :
                    <div className='bg-blue'>
                        <UserNavigation color link="/habitaciones" text='Volver' />
                        <Container fluid className=''>
                            <Row className="room-row-datails">
                                <Col md={6}>
                                    <div className='carousel-card'>
                                        <Carousel fade>
                                            {this.state.rooms.image.map(elm =>
                                                <Carousel.Item key={elm}>
                                                    <img className="d-block w-100" src={elm} alt={elm} />
                                                </Carousel.Item>
                                            )}
                                        </Carousel>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className='room-datails-card'>
                                        <h1>{this.state.rooms.name}</h1>
                                        <p>{this.state.rooms.description}</p>
                                        <div className='room-details-icons'>
                                            <div className='datails-box'>
                                                <FontAwesomeIcon icon={faHouseUser} className='icon-font' />
                                                <p>{this.state.rooms.type}</p>
                                            </div>
                                            <div className='datails-box'>
                                                <FontAwesomeIcon icon={faUserFriends} className='icon-font' />
                                                <p>{this.state.rooms.capacity}</p>
                                            </div>
                                            <div className='datails-box'>
                                                <FontAwesomeIcon icon={faReceipt} className='icon-font' />
                                                <p>{this.state.rooms.price} €</p>
                                            </div>
                                        </div>
                                        {!this.props.hasRoom ? <Link to="/habitaciones/disponibles" className="btn btn-roomd">RESERVAR</Link> : null}

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }

            </>


        )
    }
}


export default RoomDetails