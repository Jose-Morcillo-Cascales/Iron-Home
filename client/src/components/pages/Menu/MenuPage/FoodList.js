import { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'      // Button, Modal
import MenuPurchase from '../../../../services/menu.service'
import FoodCard from './FoodCard'
import Spinner from './../../../shared/Spinner/Spinner'

class FoodList extends Component {

    constructor() {
        super()
        this.state = {
            foods: undefined,
            // modal: false
        }
        this.MenuPurchase = new MenuPurchase()
    }


    loadFoods = () => {
        this.MenuPurchase
            .foodList()
            .then(response => this.setState({ foods: response.data }))
            .catch(err => this.props.showMessage(err.response.data.message))
    }


    componentDidMount = () => {
        this.loadFoods()
    }


    render() {

        return (

            !this.state.foods
                ?
                <Spinner />
                :
                (<>

                    <Row md={2}>
                        {this.state.foods.map(elm => <FoodCard handleCheckbox={this.props.handleCheckbox} food={elm} key={elm._id} {...elm._id} />)}
                    </Row>




                </>
                )
        )
    }
}

export default FoodList