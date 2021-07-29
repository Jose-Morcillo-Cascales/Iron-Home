import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mainLogo from './IronHome.png';
import './Navigation.css'


import AuthService from '../../../services/auth.service'


const Navigation = ({ storeUser, loggedUser, hasRoom, roomCheck, showMessage }) => {

    const authserVice = new AuthService()

    const logout = () => {
        authserVice
            .logout()
            .then(() => {
                showMessage('Has cerrado sesión')
                roomCheck()
                storeUser(undefined)
            })
            .catch(err => console.log(err))
    }

    return (

        <Navbar fixed='top' expand="md" id="reload">
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link" to="/"><img src={mainLogo} width="60" height="60" className="d-inline-block align-top" alt="Iron Home logo" />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/habitaciones">Habitaciones</Link>

                        {!loggedUser
                            ?
                            <>
                                <Link className="nav-link" to="/registro">Registrarse</Link>
                                <Link className="nav-link" to="/iniciar-sesion">Acceder</Link>
                            </>
                            :
                            <>
                                {hasRoom
                                    ?
                                    <>

                                        <NavDropdown title="Menús" id="navbarScrollingDropdown">
                                            <NavDropdown.Item><Link className="nav-link" to="/menu">Menús</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link className="nav-link" to="/menu/reservas">Compra</Link></NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown title="Lavanderia" id="navbarScrollingDropdown">
                                            <NavDropdown.Item><Link className="nav-link" to="/lavanderia">Lavanderia</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link className="nav-link" to="/lavanderia/reservas">Compra</Link></NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    null
                                }
                                <NavDropdown title="Perfil" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link className="nav-link" to="/perfil">Perfil</Link></NavDropdown.Item>

                                    {hasRoom ? <NavDropdown.Item><Link className="nav-link" to="/wallet">Mi Wallet</Link></NavDropdown.Item> : null}

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link className="nav-link" to="/"><span className="nav-link" onClick={logout}>Cerrar sesión</span></Link></NavDropdown.Item>
                                </NavDropdown>
                                <span className="nav-link">¡Hola, {loggedUser.name}!</span>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation