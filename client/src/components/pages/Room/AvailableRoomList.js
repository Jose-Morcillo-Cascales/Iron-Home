import { Row, Container, DropdownButton, Dropdown } from "react-bootstrap"
import { Component } from 'react'
import RoomService from '../../../services/room.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'
import AvalaibleRoomCard from "./AvailableRoomCard"
import Spinner from "../../shared/Spinner/Spinner"


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
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    bookRoom = (id, period, capacity) => {

        this.RoomService
            .createBooking(id, period, capacity)
            .then(() => {
                this.props.history.push('/')
                this.props.showMessage('Su habitación ha sido reservada correctamente')
            })
            .catch(err => this.props.showMessage(err.response.data.message))
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
                                <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                            </div>
                        </Row>
                    </Container>

                    <Container>
                        <h1>Reserva tu habitación</h1>
                        <hr></hr>
                        <DropdownButton required title="Periodo" id="dropdown-period" >
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="first" name="first">Primero</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="second" name="second">Segundo</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="third" name="third">Tercer</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fourth" name="fourth">Cuarto</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fifth" name="fifth">Quinto</Dropdown.Item>
                        </DropdownButton>

                        <hr></hr>

                        <h1>Habitaciones Disponibles</h1>

                        <Row xs={1} md={5} className="g-4">
                            {this.state.rooms.map(elm => <AvalaibleRoomCard key={elm._id} {...elm} periodRequest={this.state.periodRequest} bookRoom={this.bookRoom} />)}
                        </Row>
                    </Container>
                </>
                )
        )
    }
}

export default AvalaibleRoom

