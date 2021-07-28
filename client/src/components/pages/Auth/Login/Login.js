import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
import mainLogo from '../../../layout/Navigation/IronHome.png';

import AuthService from '../../../../services/auth.service'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            mail: '',
            pwd: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { mail, pwd } = this.state

        this.authService
            .login(mail, pwd)
            .then(loggedUserfromServer => {
                this.props.roomCheck()
                this.props.storeUser(loggedUserfromServer.data)
                this.props.history.push('/')         // Redirect with RRD props
            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }



    render() {
        return (

            <div className='container-fluid con-login' style={{ 'padding': "0" }} >


                <Row>

                    <Col md={{ span: 4, offset: 4 }}>
                        <div className='Login-Box'>
                            <div className='Logo-Box'>
                                <img className="logo" src={mainLogo} alt="IronHome"></img>
                            </div>
                            <div className='Form-Box'>
                                <h3>Iniciar Sesión</h3>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Group controlId="mail">
                                        <Form.Control type="text" value={this.state.mail} onChange={this.handleInputChange} name="mail" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="pwd">
                                        <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" placeholder="Constraseña" />
                                    </Form.Group>

                                    <Button className='Button-Box' type="submit">Acceder</Button>
                                </Form>
                            </div>
                            <div className='Span-Box'>
                                <span><Link to="/">Registrarse</Link></span>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }
}


export default Login