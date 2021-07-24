import { Component } from 'react'
import { Row } from 'react-bootstrap'      // Button, Modal 
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
                    {/* {this.props.loggedUser && <Button onClick={() => this.setState({ modal: true })} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva montaña</Button>} */}

                    <Row>
                        {this.state.foods.map(elm => <FoodCard key={elm._id} {...elm} />)}
                    </Row>
                    {/* 
                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Nueva Montaña rusa</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CoasterForm refreshCoasters={this.loadCoasters} closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>
                    </Modal> */}
                </>
                )
        )
    }
}

export default FoodList