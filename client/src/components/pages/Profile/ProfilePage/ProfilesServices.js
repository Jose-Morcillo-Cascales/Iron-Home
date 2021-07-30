import { Row, Container, Tab, Tabs, Col, Button, Card, Accordion } from "react-bootstrap"
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProfileServices.css'

import logoTokens from './IronTokens.png'
import Spinner from "../../../shared/Spinner/Spinner"
import WalletService from "../../../../services/wallet.service"
import MenuPurchase from "../../../../services/menu.service"
import LaundryService from "./../../../../services/laundry.service"


class ProfileServices extends Component {

    constructor() {
        super()
        this.state = {
            menu: undefined,
            wallet: undefined,
            laundry: undefined,
            modal: false
        }
        this.walletService = new WalletService()
        this.menuService = new MenuPurchase()
        this.laundryService = new LaundryService()
    }
    darkChoose = elm => !elm ? 'Ropa oscura' : 'Ropa clara'
    delicateChoose = elm => !elm ? 'Ropa delicada' : 'Ropa no delicada'
    loadWallet = () => {

        this.walletService
            .walletDetails()
            .then(response => {
                this.setState({ wallet: response.data[1], menu: response.data[0], laundry: response.data[2] })

            })

            .catch(err => this.props.showMessage(err.response.data.message))
    }
    deleteLaundry(laundry_id) {

        this.laundryService
            .deleteBooking(laundry_id)
            .then(() => {
                this.props.showMessage('servicio anulado')
                this.loadWallet()
            })
            .catch(err => this.props.showMessage(err.response.data.message))

    }
    deleteMenu(menu_id) {
        this.menuService
            .deleteMenu(menu_id)
            .then(() => {
                this.props.showMessage('servicio anulado')
                this.loadWallet()
            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    toDate = (date) => {
        date = new Date(date).toISOString().slice(0, 10)

        return date
    }

    componentDidMount = () => {
        this.loadWallet()

    }




    render() {

        return (

            !this.state.wallet
                ?
                <Spinner />
                :
                (<>


                    <Container className='Service-con'>
                        <h1 className='tickets-perfil'>Wallet</h1>
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <h4>Laundry Tickets:</h4>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <div className='room-box' style={{ maxHeight: '50vh' }}>
                                                        <Row xs={1} md={4} className="g-4">
                                                            {this.state.laundry.map(elm =>
                                                                <Col>
                                                                    <Card className='profile-card'>
                                                                        <Card.Body>
                                                                            <p><strong>Fecha Servicio: </strong><br></br>
                                                                                {this.toDate(elm.bookingDate)}</p>
                                                                            <p><strong>Cantidad: </strong>{elm.quantity} Tulas</p>
                                                                            <p><strong>Tipo: </strong><br></br>
                                                                                - {this.darkChoose(elm.type.dark)}</p>
                                                                            <p>- {this.delicateChoose(elm.type.delicate)}</p>
                                                                            <Button className='link-perfil' onClick={() => this.deleteLaundry(elm._id)}>Cancelar</Button>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            )}
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <h4>Menú Tickets</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <div className='room-box'>
                                                        <Row xs={1} md={4} className="g-4">
                                                            {this.state.menu.map(elm =>
                                                                <Col>
                                                                    <Card className='profile-card'>
                                                                        <Card.Body>
                                                                            <p><strong>Fecha Servicio: </strong><br></br>
                                                                                {this.toDate(elm.date)}</p>
                                                                            <strong>Platos: </strong>
                                                                            {elm.dish.map(food => <p>- {food.name}</p>)}
                                                                            <Button className='link-perfil' onClick={() => this.deleteMenu(elm._id)}>Cancelar</Button>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            )}
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>


                    </Container >

                </>
                )
        )
    }
}

export default ProfileServices

