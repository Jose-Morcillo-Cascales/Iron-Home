import { Component } from 'react'
import RoomService from '../../../services/room.service'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from "../../shared/Spinner/Spinner"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'

class RoomDetails extends Component {

    constructor() {
        super()
        this.state = {
            rooms: undefined
        }
        this.RoomService = new RoomService()
    }


    componentDidMount() {

        const { room_id } = this.props.match.params

        this.RoomService
            .roomDetails(room_id)
            .then(response => this.setState({ rooms: response.data }))
            .catch(err => console.log(err))
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
                                    <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                                </div>
                            </Row>
                        </Container>
                        <Row className="justify-content-around">
                            <Col md={6}>
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
                            </Col>

                            <Col md={4}>
                                <h1>{this.state.rooms.name}</h1>
                                <p>{this.state.rooms.description}</p>

                                <hr></hr>

                                <p>Tipo: {this.state.rooms.type}</p>
                                <p>Capacidad: {this.state.rooms.capacity}</p>
                                <p>Precio: {this.state.rooms.price} €</p>
                            </Col>
                        </Row>
                    </>
                }

            </Container>

        )
    }
}


export default RoomDetails