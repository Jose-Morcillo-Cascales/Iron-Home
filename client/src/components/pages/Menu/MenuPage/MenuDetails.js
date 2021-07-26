import { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MenuPurchase from '../../../../services/menu.service'

class MenuDetails extends Component {

    constructor() {
        super()
        this.state = {
            menu: undefined
        }
        this.menuService = new MenuPurchase()
    }

    loadMenuDetails() {
        console.log(this.props)
        const { menu_id } = this.props.menu_id

        this.menuService
            .menuDetails(menu_id)
            .then(response => this.setState({ menu: response.data }))
            .catch(err => console.log(err))

    }
    /*  deleteMenu() {
         const { menu_id } = this.props.match.query
         this.menuService
             .deleteMenu(menu_id)
             .then(response => response)
             .catch(err => console.log(err))
     } */

    componentDidMount() {
        this.loadMenuDetails()
    }


    render() {

        return (

            <Container>

                {!this.state.menu
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={4}>
                            <h1>Menu</h1>
                            <p>{this.state.menu.date}</p>
                            <p>{this.state.menu.dish.map(elm => elm.name)}</p>
                            <Button className="btn btn-dark">Cancelar menu</Button>

                        </Col>
                    </Row>

                }

            </Container>
        )
    }
}


export default MenuDetails