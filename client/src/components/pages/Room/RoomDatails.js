import { Component } from 'react'
import RoomService from '../../../services/room.service'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from "../../shared/Spinner/Spinner"
import './RoomDatails.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faUserFriends, faReceipt, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'

class RoomDetails extends Component {

    constructor() {
        super()
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

            <Container>

                {!this.state.rooms
                    ?
                    <Spinner />
                    :
                    <>
                        <Container>
                            <Row>
                                <div className='user-navegation'>
                                    <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/habitaciones">Volver</a></span>
                                </div>
                            </Row>
                        </Container>
                        <Container fluid className='datails-card'>
                            <Row className="row-datails">
                                <Col md={6}>
                                    <div className='carousel-card'>
                                        <Carousel>
                                            {this.state.rooms.image.map(elm =>
                                                <Carousel.Item key={elm}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={elm}
                                                        alt={elm}
                                                        style={{ width: '100%' }}
                                                    />
                                                </Carousel.Item>
                                            )}
                                        </Carousel>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className='datails-card'>
                                        <h1>{this.state.rooms.name}</h1>
                                        <p className='p-datails'>{this.state.rooms.description}</p>
                                        <hr></hr>
                                        <div className='details-icons'>
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
                                                <p>{this.state.rooms.price}</p>
                                            </div>
                                        </div>
                                        <Link to="/habitaciones/disponibles" className="btn btn-datail">Reservar</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </>
                }

            </Container>

        )
    }
}


export default RoomDetails