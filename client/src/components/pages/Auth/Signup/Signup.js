import { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Signup.css'
import mainLogo from '../../../layout/Navigation/IronHome.png';
import AuthService from '../../../../services/auth.service'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            mail: '',
            pwd: '',
            name: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { mail, pwd, name } = this.state

        this.authService
            .signup(mail, pwd, name)
            .then(loggedUserfromServer => {
                this.props.storeUser(loggedUserfromServer.data)
                this.props.showMessage('Usuario creado')
                this.props.history.push('/iniciar-sesion')
            })
            .catch(err => this.props.showMessage(err.response.data.message))
    }



    render() {
        return (

            <div className='container-fluid con-signup' style={{ 'padding': "0" }} >


                <Row>

                    <Col md={{ span: 4, offset: 4 }}>
                        <div className='Login-Box'>
                            <div className='Logo-Box'>
                                <img className="logo" src={mainLogo} alt="IronHome"></img>
                            </div>
                            <div className='Form-Box'>
                                <h3>Registrarse</h3>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" placeholder="Nombre" />
                                    </Form.Group>
                                    <Form.Group controlId="mail">
                                        <Form.Control type="text" value={this.state.mail} onChange={this.handleInputChange} name="mail" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="pwd">
                                        <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" placeholder="Constraseña" />
                                    </Form.Group>

                                    <Button className='Button-Box' type="submit">Registrarse</Button>
                                </Form>
                            </div>
                            <div className='Span-Box'>
                                <span><Link to="/iniciar-sesion">Login</Link></span>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }
}


export default Signup