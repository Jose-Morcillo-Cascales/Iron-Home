import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mainLogo from './IronHome.png';

import AuthService from '../../../services/auth.service'

const Navigation = ({ storeUser, loggedUser }) => {

    const authserVice = new AuthService()

    const logout = () => {
        authserVice
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (

        <Navbar bg="light" variant="light" expand="md" style={{ marginBottom: '30px' }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={mainLogo} width="60" height="60" className="d-inline-block align-top" alt="Iron Home logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/montañas-rusas">Servicios</Link>

                        {!loggedUser
                            ?
                            <>
                                <Link className="nav-link" to="/registro">Registrarse</Link>
                                <Link className="nav-link" to="/iniciar-sesion">Acceder</Link>
                            </>
                            :
                            <>
                                <Link className="nav-link" to="/mi-perfil">Menús</Link>
                                <Link className="nav-link" to="/mi-perfil">Lavanderia</Link>
                                <Link className="nav-link" to="/mi-perfil">Biblioteca</Link>
                                <NavDropdown title="Perfil" id="navbarScrollingDropdown">
                                    <Link className="nav-link" to="/mi-perfil">Perfil</Link>

                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <span className="nav-link" onClick={logout}>Cerrar sesión</span>

                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>

                            </>
                        }

                        <span className="nav-link">¡Hola, {loggedUser ? loggedUser.username : 'invitad@'}!</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation