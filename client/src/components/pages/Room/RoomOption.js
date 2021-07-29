import { Row, Container, Col } from "react-bootstrap"
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './RoomOption.css'
import '../../shared/UserNavigation/UserNavigation.css'

import Spinner from "../../shared/Spinner/Spinner"


import RoomService from '../../../services/room.service'
import RoomOptionCard from './RoomCard'

class RoomOption extends Component {

    constructor() {
        super()
        this.state = {
            rooms: undefined
        }
        this.RoomService = new RoomService()
    }


    loadRooms = () => {
        this.RoomService
            .roomOptions()
            .then(response => {
                console.log(response.data)
                this.setState({ rooms: response.data })
            })
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadRooms()
    }


    render() {

        return (

            !this.state.rooms
                ?
                <Spinner />
                :
                (<>
                    <Container>
                        <Row>
                            <div className='user-navegation'>
                                <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                            </div>
                        </Row>
                    </Container>
                    <Container>
                        <Row className='row-box'>
                            <Col md={4}>
                                <div className='book-box'>
                                    <h1>Conoce Nuestras Habitaciones</h1>
                                    <Link to="/habitaciones/disponibles" className="btn btn-book">Reservar</Link>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='room-box'>
                                    <Row xs={1} md={2} className="g-4">
                                        {this.state.rooms.map(elm => <RoomOptionCard key={elm._id} {...elm} />)}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </>
                )
        )
    }
}

export default RoomOption

