import { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'      // Button, Modal
/* 
import CoasterForm from '../CoasterForm/CoasterForm' */
import MenuPurchase from '../../../../services/menu.service'
import FoodCard from './FoodCard'

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
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadFoods()
    }


    render() {

        return (

            !this.state.foods
                ?
                <h3>CARGANDO...</h3>
                :
                (<>

                    <Row>
                        {this.state.foods.map(elm => <FoodCard key={elm._id} {...elm} handleCheckbox={this.props.handleCheckbox} />)}

                    </Row>




                </>
                )
        )
    }
}

export default FoodList