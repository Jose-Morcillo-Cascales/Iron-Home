import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import '../../shared/UserNavigation/UserNavigation.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <>
            <footer>
                <Container className="bottom_border">
                    <Row>
                        <Col>
                            <div className='footer-box'>
                                <h5 className="col-color pt2">Acerca de Nosotros</h5>
                                <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </Col>

                        <Col>
                            <div className='footer-box'>
                                <h5 className="col-color pt2">Acceso Rápido</h5>
                                <ul className="footer-ul">
                                    <li><Link className="nav-link" to="/">Home</Link></li>
                                    <li><Link className="nav-link" to="/habitaciones">Habitaciones</Link></li>
                                    <li><Link className="nav-link" to="/habitaciones">Iron Hack</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col className='contact-box'>
                            <div className='footer-box'>
                                <h5 className="col-color pt2">Contacto</h5>
                                <p><FontAwesomeIcon icon={faLocationArrow} className='icon-font' /> En algún lugar de la mancha </p>
                                <p><FontAwesomeIcon icon={faPhone} className='icon-font' />  +34-667253882  </p>
                                <p><FontAwesomeIcon icon={faEnvelope} className='icon-font' /> info@holi.com  </p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <p className="footer-box">Desarrollo por:<strong> Pepe & Lali </strong>|| © Todos los derechos reservados</p>
                    <ul className="social-footer">
                        <li><Link className="nav-link" to=""><FontAwesomeIcon icon={faFacebook} className='icon-font' /></Link></li>
                        <li><Link className="nav-link" to=""><FontAwesomeIcon icon={faInstagram} className='icon-font' /></Link></li>
                        <li><Link className="nav-link" to=""><FontAwesomeIcon icon={faLinkedin} className='icon-font' /></Link></li>
                        <li><Link className="nav-link" to=""><FontAwesomeIcon icon={faTwitter} className='icon-font' /></Link></li>
                    </ul>
                </Container>

            </footer>
        </>
    )
}

export default Footer