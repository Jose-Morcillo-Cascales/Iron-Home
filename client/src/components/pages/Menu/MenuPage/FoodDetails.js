import { Component } from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import MenuPurchase from '../../../../services/menu.service'
import Spinner from './../../../shared/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faCarrot } from '@fortawesome/free-solid-svg-icons'
import './FoodDetails.css'

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
                default:
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
                        <Container fluid className='food-details-modal'>
                            <Row className="justify-content-center align-items-center" >
                                <div className='carousel-card-menu'>
                                    <Carousel fade>
                                        {this.state.food.image.map(elm =>
                                            <Carousel.Item key={elm}>
                                                <img className="d-block w-100" src={elm} alt={elm} style={{ width: '100%' }} />
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </div>
                            </Row>
                            <Row className="justify-content-center align-items-center">
                                <div className='details-card-menu'>
                                    <h1>{this.state.food.name}</h1>
                                    <p className='p-datails'>{this.state.food.description}</p>
                                    <p>{this.state.food.ingredients}</p>
                                    <div className='details-icons-menu'>
                                        <div className='datails-box-menu'>
                                            <FontAwesomeIcon icon={faCarrot} className='icon-font' />
                                            <p>{this.vegetableboolean(this.state.food.vegetarian)}</p>
                                        </div>
                                        <div className='datails-box-menu'>
                                            <FontAwesomeIcon icon={faConciergeBell} className='icon-font' />
                                            <p>{this.translation(this.state.food.type)}</p>
                                        </div>
                                    </div>
                                    {/* <Button className="btn btn-datail" onClick={() => this.props.closeModal()} >Close</Button> */}
                                </div>
                            </Row>
                        </Container>
                    </>
                }

            </Container>
        )
    }
}


export default FoodDetails
