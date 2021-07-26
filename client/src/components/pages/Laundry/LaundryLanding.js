import { Col, Card, Row, Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './LaundryLanding.css'
import '../../shared/UserNavigation/UserNavigation.css'


const LaundryLanding = () => {
    return (
        <>
            <Container>
                <Row>
                    <div className='user-navegation'>
                        <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <div class="serviceBox">
                            <div class="service-icon">
                                <span><i class="fa fa-globe"></i></span>
                            </div>
                            <h3 class="title">Web Design</h3>
                            <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div class="serviceBox">
                            <div class="service-icon">
                                <span><i class="fa fa-globe"></i></span>
                            </div>
                            <h3 class="title">Web Design</h3>
                            <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div class="serviceBox">
                            <div class="service-icon">
                                <span><i class="fa fa-globe"></i></span>
                            </div>
                            <h3 class="title">Web Design</h3>
                            <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className='user-navegation'>
                        <Link to={`/montañas-rusas/detalle/`}>
                            <Button variant="dark" block >Ver detalles</Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default LaundryLanding