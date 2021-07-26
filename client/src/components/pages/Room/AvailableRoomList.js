import { Row, Container, DropdownButton, Dropdown } from "react-bootstrap"
import { Component } from 'react'
import RoomService from './../../../services/room.services'

class AvalaibleRoom extends Component {

    constructor() {
        super()
        this.state = {
            list: undefined,
            rooms: undefined
        }
        this.RoomService = new RoomService()
    }


    loadRooms = () => {

        this.RoomService
            .availableRoomList()
            .then(response => this.setState({ rooms: response.data, list: response.data }))
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
            console.log(room)
        })
        this.setState({ rooms: roomArray })
    }



    render() {

        return (

            !this.state.rooms
                ?
                <h3>CARGANDO...</h3>
                :
                (<>
                    <Container>
                        <h1>Reserva tu habitación</h1>
                        <hr></hr>

                        <DropdownButton title="Periodo" id="dropdown-period" >
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="first" name="first">Primero</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="second" name="second">Segundo</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="third" name="third">Tercer</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fourth" name="fourth">Cuarto</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.periodRoom(e)} value="fifth" name="fifth">Quinto</Dropdown.Item>
                        </DropdownButton>
                        <hr></hr>

                        <h1>Habitaciones Disponibles</h1>

                        <Row xs={1} md={2} className="g-4">
                            {this.state.rooms.map(elm => console.log(elm))}
                        </Row>
                    </Container>
                </>
                )
        )
    }
}

export default AvalaibleRoom

