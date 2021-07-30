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
import './WalletDatails.css'



class WalletDetails extends Component {

    constructor(props) {
        super(props)
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
            .catch(err => this.props.showMessage(err.response.data.message))
    }

    toDate = (date) => {
        date = new Date(date).toISOString().slice(0, 10)

        return date
    }

    addTokens = () => {

        this.WalletService
            .editWallet()
            .then(() => this.props.history.push('/perfil'))
            .catch(err => this.props.showMessage(err.response.data.message))
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

                    <Container className='wallet-box'>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Mi Wallet">
                                <Row>
                                    <Col md={8}>
                                        <div>
                                            <h1>Iron Wallet</h1>
                                            <h4>Titular:</h4>
                                            <p>{this.props.loggedUser.name}</p>
                                            <h4>Nº Wallet:</h4>
                                            <p>{this.state.wallet._id}</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='iron-token'>
                                            <div className='saldo'>
                                                <h4>Saldo Dispoble:</h4>
                                                <h2>{this.state.wallet.balance} </h2>
                                            </div>
                                            <img className="logo-tokens" src={logoTokens} alt="IronTokens"></img>
                                        </div>
                                        <Button onClick={() => this.setState({ modal: true })} className='Button-Box' >Cargar Tokens</Button>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Movimientos">
                                <Row>
                                    <h2 className='gastos'>Gastos Laundry:</h2>
                                    <Col md={12}>
                                        <div className='room-box' style={{ maxHeight: '50vh' }}>
                                            <Row xs={1} md={4} className="g-4">
                                                {this.state.laundry.map(elm =>
                                                    <Col>
                                                        <Card className='wallet-card'>
                                                            <Card.Body>
                                                                <p><strong>Fecha Compra: </strong><br></br>
                                                                    {this.toDate(elm.createdAt)}</p>
                                                                <p><strong>Cantidad: </strong>{elm.quantity}</p>
                                                                <p><strong>Total: </strong>{elm.total} <span>Tokens</span></p>
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
                                    <h2 className='gastos'>Gastos Menú</h2>
                                    <Col>
                                        <div className='room-box'>
                                            <Row xs={1} md={4} className="g-4">
                                                {this.state.menu.map(elm =>
                                                    <Col>
                                                        <Card className='wallet-card'>
                                                            <Card.Body>
                                                                <p><strong>Fecha Compra: </strong><br></br>
                                                                    {this.toDate(elm.createdAt)}</p>
                                                                <p><strong>Cantidad: </strong>{elm.quantity}</p>
                                                                <p><strong>Total: </strong>{elm.total} <span>Tokens</span></p>
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
                            <AddTokens wallet={this.state.wallet} refreshWallet={this.loadWallet} closeModal={() => this.setState({ modal: false })} showMessage={this.props.showMessage} />
                        </Modal.Body>
                    </Modal>
                </>
                )
        )
    }
}

export default WalletDetails

