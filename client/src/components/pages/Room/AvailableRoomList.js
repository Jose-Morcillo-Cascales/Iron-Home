import { Row, Container, DropdownButton, Dropdown, Col, Form, Button, ButtonGroup } from "react-bootstrap"
import { Component } from 'react'
import RoomService from '../../../services/room.service'
import AvalaibleRoomCard from "./AvailableRoomCard"
import Spinner from "../../shared/Spinner/Spinner"
import './AvalaibleRoomList.css'
import UserNavigation from "../../shared/UserNavigation/UserNavigation"


class AvalaibleRoom extends Component {

    constructor() {
        super()
        this.state = {
            list: undefined,
            rooms: undefined,
            query: undefined,
            periodRequest: undefined,
            periodSelected: false,
            checkBath: false,
            colorBath: 'red',
            double: false,
            single: false
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

    language = lang => {
        switch (lang) {
            case "first":
                return 'PRIMERO'
                break
            case "second":
                return 'SEGUNDO'
                break
            case "third":
                return 'TERCERO'
                break
            case "fourth":
                return 'CUARTO'
                break
            case "fifth":
                return 'QUINTO'
                break
            default:
                return ' '
                break
        }

    }

    periodRoom = (e) => {
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
        this.setState({ query: roomArray, periodRequest: this.language(selectedOption), periodSelected: true })
    }

    changeCheckBath = () => {
        this.setState({ checkBath: !this.state.checkBath })
    }

    changeCheckDouble = () => {
        this.setState({ double: !this.state.double })
        !this.state.double ? this.setState({ single: false }) : this.setState({ single: this.state.single })

    }

    changeCheckSingle = () => {
        this.setState({ single: !this.state.single })
        !this.state.single ? this.setState({ double: false }) : this.setState({ double: this.state.double })
    }

    typeRoom = () => {
        if (this.state.double)
            return 'DOBLE'
        else if (this.state.single)
            return 'INDIVIDUAL'
    }


    handleCheckbox = () => {

        const roomListCopy = [...this.state.query]

        if (this.state.checkBath && this.state.single) {
            const SingBathRooms = roomListCopy.filter(rooms => !rooms.bath && rooms.capacity === 1 ? rooms : null)
            this.setState({ query: SingBathRooms.slice(0, 2) })
        } else if (!this.state.checkBath && this.state.single) {
            const SingNoBathRooms = roomListCopy.filter(rooms => rooms.bath && rooms.capacity === 1 ? rooms : null)
            this.setState({ query: SingNoBathRooms.slice(0, 2) })
        } else if (this.state.checkBath && this.state.double) {
            const DouBathRooms = roomListCopy.filter(rooms => !rooms.bath && rooms.capacity === 2 ? rooms : null)
            this.setState({ query: DouBathRooms.slice(0, 2) })
        } else if (!this.state.checkBath && this.state.double) {
            const DouNoBathRoomsbathRooms = roomListCopy.filter(rooms => rooms.bath && rooms.capacity === 2 ? rooms : null)
            this.setState({ query: DouNoBathRoomsbathRooms.slice(0, 2) })
        } else {
            this.setState({ query: roomListCopy.slice(0, 10) })
        }
    }

    removeFilters(e) {
        e.preventDefault()
        this.setState({
            query: undefined, periodSelected: false, periodRequest: undefined, checkBath: false, double: false, single: false
        })
    }

    buttonDisabled = () => {
        if (!this.state.single || !this.state.double)
            if (!this.state.periodSelected)
                return true
            else return false
    }
    changeBoolean = boolean => boolean ? 'SI' : 'NO'



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
                    <div className='bg-color room-list'>
                        <UserNavigation color={false} link="/habitaciones" text='Volver' />
                        <Container >
                            <section >
                                <Row className='period-box'>
                                    <h2>Elige Habitación</h2>
                                    <Col md={6} className='rg-col'>
                                        <div className='room-option'>
                                            <h5>1. Elige tu periodo de estadia</h5>
                                            <DropdownButton title="Periodo" id="dropdown-period" className='period-link' >
                                                <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="first" name="first">Primero Ago-Oct</Dropdown.Item>
                                                <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="second" name="second">Segundo Oct-Dic</Dropdown.Item>
                                                <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="third" name="third">Tercer Ene-Mrz</Dropdown.Item>
                                                <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fourth" name="fourth">Cuarto Mrz-May</Dropdown.Item>
                                                <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fifth" name="fifth">Quinto May-Ago</Dropdown.Item>
                                            </DropdownButton>
                                            <h5>2. Selecciona tipo de habitación</h5>
                                            <div className='g-buttons'>
                                                <Button className={`${this.state.checkBath ? "btn-opt-sel" : "btn-opt-no"} btn-opt`} onClick={() => this.changeCheckBath()} >Baño?</Button>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button className={`${this.state.single ? "btn-opt-sel" : "btn-opt-no"} btn-opt`} onClick={() => this.changeCheckSingle()}>Individual</Button>
                                                    <Button className={`${this.state.double ? "btn-opt-sel" : "btn-opt-no"} btn-opt`} onClick={() => this.changeCheckDouble()}>Doble</Button>
                                                </ButtonGroup>
                                            </div>
                                            <Button className='btn-search' onClick={() => this.handleCheckbox()} disabled={this.buttonDisabled()}>Buscar</Button>
                                            <Button className='btn-remove' onClick={e => this.removeFilters(e)} >Quitar Filtros</Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='select-option'>
                                            <h4>Opciones Selecionadas </h4>
                                            <div className='info-room'>
                                                <h5>Periodo:</h5>
                                                <p>{this.state.periodRequest}</p>
                                                <h5>Habitación con baño:</h5>
                                                <p>{this.changeBoolean(this.state.checkBath)}</p>
                                                <h5>Tipo de habitación:</h5>
                                                <p>{this.typeRoom()}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                            <section className='room-cards'>
                                <h1>Habitaciones Disponibles</h1>

                                <Row xs={1} md={3} className="g-4">
                                    {!this.state.query ? <Spinner /> : this.state.query.map(elm => <AvalaibleRoomCard key={elm._id} {...elm} periodRequest={this.state.periodRequest} bookRoom={this.bookRoom} />)}
                                </Row>
                            </section>
                        </Container>
                    </div>
                </>
                )
        )
    }
}

export default AvalaibleRoom

