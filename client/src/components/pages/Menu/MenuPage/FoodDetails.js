import { Component } from 'react'
import { Container, Row, Col, Button, Carousel, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuPurchase from '../../../../services/menu.service'
import Spinner from './../../../shared/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faCarrot, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import './FoodDetails'

class FoodDetails extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            food: undefined,
            modal: false
        }
        this.foodService = new MenuPurchase()
        this.vegetableboolean = elm => !elm ? 'No vegetariano' : 'Plato vegetariano'
        this.translation = type => {

            switch (type) {
                case 'first':
                    return 'Primero'
                case 'second':
                    return 'Segundo'
                case 'dessert':
                    return 'Postre'


            }

        }
    }

    loadFoodDetails() {

        this.foodService
            .foodDetails(this.props.food_id)
            .then(response => this.setState({ food: response.data }))
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    componentDidMount() {
        this.loadFoodDetails()
    }

    render() {

        return (

            <Container>

                {!this.state.food
                    ?
                    <Spinner />
                    :
                    <>
                        <Container fluid className='datails-card '>
                            <Row className="justify-content-center align-items-center" style={{ padding: '2em 0em 3em' }}>
                                <Col md={6}>
                                    <div className='carousel-card'>
                                        <Carousel>
                                            {this.state.food.image.map(elm =>
                                                <Carousel.Item key={elm}>
                                                    <img className="d-block w-100" src={elm} alt={elm} style={{ width: '100%' }} />
                                                </Carousel.Item>
                                            )}
                                        </Carousel>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='datails-card'>
                                        <h1>{this.state.food.name}</h1>
                                        <p className='p-datails'>{this.state.food.description}</p>
                                        <p>{this.state.food.ingredients}</p>
                                        <hr></hr>
                                        <div className='details-icons'>
                                            <div className='datails-box'>
                                                <FontAwesomeIcon icon={faCarrot} className='icon-font' />
                                                <p>{this.vegetableboolean(this.state.food.vegetarian)}</p>
                                            </div>
                                            <div className='datails-box'>
                                                <FontAwesomeIcon icon={faConciergeBell} className='icon-font' />
                                                <p>{this.translation(this.state.food.type)}</p>
                                            </div>
                                        </div>
                                        {/* <Button className="btn btn-datail" onClick={() => this.props.closeModal()} >Close</Button> */}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        {/* <Row className="justify-content-around">
                            <Col md={6}>
                                <h1>{this.state.food.name}</h1>
                                <p>{this.state.food.description}</p>
                                <p>{this.state.food.ingredients}</p>

                                <hr></hr>

                                <p>{this.vegetableboolean(this.state.food.vegetarian)}</p>
                                <p>{this.translation(this.state.food.type)}</p>

                                <hr></hr>

                                <Button onClick={() => this.props.closeModal()} />

                            </Col>

                            <Col md={4}>
                                <img src={this.state.food.image[0]} alt={this.state.food.title} style={{ width: '100%' }} />
                                <img src={this.state.food.image[1]} alt={this.state.food.title} style={{ width: '100%' }} />
                            </Col>
                        </Row>*/}
                    </>
                }

            </Container>
        )
    }
}


export default FoodDetails
