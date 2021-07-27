import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuPurchase from '../../../../services/menu.service'
import FoodCard from './FoodCard'

class FoodDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: undefined,
            checked: false
        }
        // this.foodService = new MenuPurchase()
        this.vegetableboolean = elm => !elm ? 'Este plato contiene productos carnicos' : 'Plato vegetariano'
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

        this.state.food.id = this.props.match.params

        this.foodService
            .foodDetails(this.props.id)
            .then(response => this.setState({ food: response.data }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.loadFoodDetails()
    }





    render() {

        return (

            <Container>
                <FoodCard food={this.state.food} />
            </Container>
        )
    }
}


export default FoodDetails
