import { Row, Container, Tab, Tabs, Col, Button, Modal, Card } from "react-bootstrap"
import { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'
import logoTokens from './IronTokens.png'
import Spinner from "../../shared/Spinner/Spinner"
import WalletService from "../../../services/wallet.service"
import AddTokens from "./AddTokens"



class WalletDetails extends Component {

    constructor() {
        super()
        this.state = {
            menu: undefined,
            wallet: undefined,
            laundry: undefined,
            modal: false
        }
        this.walletService = new WalletService()
    }


    loadWallet = () => {

        this.walletService
            .walletDetails()
            .then(response => this.setState({ wallet: response.data[1], menu: response.data[0], laundry: response.data[2] }))
            .catch(err => console.log(err))
    }

    toDate = (date) => {
        date = new Date(date).toISOString().slice(0, 10)
        console.log(date)
        return date
    }

    addTokens = () => {

        this.RoomService
            .editWallet()
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
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
                    <Container>
                        <Row>
                            <div className='user-navegation'>
                                <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                            </div>
                        </Row>
                    </Container>

                    <Container>
                        <h1>Wallet</h1>
                        <hr></hr>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Mi Wallet">
                                <Row>
                                    <Col md={8}>
                                        {/* <img className="logo-tokens" src={logoTokens} alt="IronTokens"></img> */}
                                        <h1>Iron Wallet</h1>
                                        <h4>Titular:</h4>
                                        <p>{this.props.loggedUser.name}</p>
                                        <h4>Nº Wallet:</h4>
                                        <p>{this.state.wallet._id}</p>
                                    </Col>
                                    <Col md={4}>
                                        <h4>Saldo Dispoble:</h4>
                                        <p>{this.state.wallet.balance} </p>
                                        <Button onClick={() => this.setState({ modal: true })} className='Button-Box' >Cargar Tokens</Button>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Movimientos">
                                <h1>Gastos</h1>
                                <Row>
                                    <h4>Laundry Tickets:</h4>
                                    <Col md={12}>
                                        <div className='room-box' style={{ maxHeight: '50vh', overflow: 'scroll' }}>

                                            <Row xs={1} md={4} className="g-4">

                                                {this.state.laundry.map(elm =>
                                                    // console.log(elm)
                                                    <Col>
                                                        <Card className='room-card'>
                                                            <Card.Body>
                                                                <p>{this.toDate(elm.createdAt)}</p>
                                                                <p>{elm.quantity}</p>
                                                                <p>{elm.total}</p>

                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <h4>Menú Tickets</h4>
                                    <Col>
                                        <div className='room-box'>

                                            <Row xs={1} md={4} className="g-4">

                                                {this.state.menu.map(elm =>
                                                    // console.log(elm)
                                                    <Col>
                                                        <Card className='room-card'>
                                                            <Card.Body>
                                                                <p>{this.toDate(elm.createdAt)}</p>
                                                                <p>{elm.quantity}</p>
                                                                <p>{elm.total}</p>

                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )}
                                            </Row>
                                        </div>

                                    </Col>
                                </Row>
                            </Tab >
                        </Tabs >
                    </Container >
                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Cargar Tokens</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddTokens wallet={this.state.wallet} refreshWallet={this.loadWallet} closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>
                    </Modal>
                </>
                )
        )
    }
}

export default WalletDetails

