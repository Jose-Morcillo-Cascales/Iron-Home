import { Component } from 'react'
import RoomService from './../../../services/room.services'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <Carousel>
                                {this.state.rooms.image.map(elm =>
                                    <Carousel.Item key={elm._id}>
                                        <img
                                            className="d-block w-100"
                                            src={elm.image}
                                            alt={elm._id}
                                            style={{ width: '100%' }}
                                        />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                            <hr></hr>

                            <Link to="/habitaciones" className="btn btn-primary">Volver</Link>

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
                }

            </Container>
        )
    }
}


export default RoomDetails