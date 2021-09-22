import { Row, Container, Col } from "react-bootstrap"
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './RoomOption.css'
import Spinner from "../../shared/Spinner/Spinner"
import RoomService from '../../../services/room.service'
import RoomOptionCard from './RoomCard'
import UserNavigation from "../../shared/UserNavigation/UserNavigation"

class RoomOption extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: undefined
        }
        this.RoomService = new RoomService()
    }


    loadRooms = () => {
        this.RoomService
            .roomOptions()
            .then(response => {
                this.setState({ rooms: response.data })
                console.log(this.props)
            })
            .catch(err => this.props.showMessage(err.response.data.message))
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
                    <div className='bg-color'>
                        <UserNavigation color={false} link="/" text='inicio' />
                        <Container>
                            <Row className='room-row-box'>
                                <Col md={4}>
                                    <div className='book-box'>
                                        <h1>Conoce Nuestras Habitaciones</h1>
                                        {!this.props.hasRoom ? <Link to="/habitaciones/disponibles" className="btn btn-book">RESERVAR</Link> : null}
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
                    </div >
                </>
                )
        )
    }
}

export default RoomOption

