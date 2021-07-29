import { Row, Container, DropdownButton, Dropdown, Col } from "react-bootstrap"
import { Component } from 'react'
import RoomService from '../../../services/room.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'
import AvalaibleRoomCard from "./AvailableRoomCard"
import Spinner from "../../shared/Spinner/Spinner"
import './AvalaibleRoomList.css'



class AvalaibleRoom extends Component {

    constructor() {
        super()
        this.state = {
            list: undefined,
            rooms: undefined,
            periodRequest: undefined
        }
        this.RoomService = new RoomService()
    }


    loadRooms = () => {

        this.RoomService
            .availableRoomList()
            .then(response => this.setState({ rooms: response.data, list: response.data }))
            .catch(err => console.log(err))
    }

    bookRoom = (id, period, capacity) => {

        this.RoomService
            .createBooking(id, period, capacity)
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadRooms()
    }

    periodRoom(e) {
        const selectedOption = e.target.name
        const roomArray = []
        const roomListCopy = [...this.state.list]
        roomListCopy.forEach(room => {
            let keys = Object.keys(room.period)
            keys.forEach(key => {
                if (key === selectedOption && room.period[selectedOption]) {
                    roomArray.push(room)
                }
            })
        })
        this.setState({ rooms: roomArray, periodRequest: selectedOption })
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
                                <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/habitaciones">Volver</a></span>
                            </div>
                        </Row>
                    </Container>

                    <Container>
                        <section>
                            <Row>
                                <Col md={6}>
                                    <h1>Reserva tu habitación</h1>
                                </Col>
                                <Col md={6}>
                                    <DropdownButton title="Periodo" id="dropdown-period" >
                                        <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="first" name="first">Primero</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="second" name="second">Segundo</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="third" name="third">Tercer</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fourth" name="fourth">Cuarto</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fifth" name="fifth">Quinto</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <hr></hr>
                            </Row>
                        </section>
                        <section className='room-cards'>
                            <h1>Habitaciones Disponibles</h1>

                            <Row xs={1} md={4} className="g-4">
                                {this.state.rooms.map(elm => <AvalaibleRoomCard key={elm._id} {...elm} periodRequest={this.state.periodRequest} bookRoom={this.bookRoom} />)}
                            </Row>
                        </section>
                    </Container>
                </>
                )
        )
    }
}

export default AvalaibleRoom

