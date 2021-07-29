import { Col, Row, Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './LaundryLanding.css'
import step1 from './1-steps.png'
import step2 from './2-steps.png'
import step3 from './3-steps.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
            <Container fluid>
                <section>
                    <Row className='step-row-box'>
                        <Col md={4} className='step-text-box'>
                            <h1>¿Cómo Funciona?</h1>
                            <Link to="/lavanderia/reservas" className="btn btn-book">Reservar</Link>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={4} className='col-stetps'>
                                    <div className='steps-box'>
                                        <div>
                                            <img
                                                className='number-box'
                                                src={step1}
                                                alt="step1"
                                            />
                                        </div>
                                        <div className='text-steps'>
                                            <h2>Tulas</h2>
                                            <p>
                                                Una <strong>Tula </strong> son 25 prendas, cada tula son 8 <strong>IronTokens </strong>elige la cantidad de tulas que quieres lavar.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='col-stetps'>
                                    <div className='steps-box'>
                                        <div>
                                            <img className='number-box' src={step2} alt="step1" />
                                        </div>
                                        <div className='text-steps'>
                                            <h2>Fecha</h2>
                                            <p>
                                                Seleciona el <b>día</b> en el que quieres que recojan tu tula.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='col-stetps'>
                                    <div className='steps-box'>
                                        <div>
                                            <img
                                                className='number-box'
                                                src={step3}
                                                alt="step1"
                                            />
                                        </div>
                                        <div className='text-steps'>
                                            <h2>Paga</h2>
                                            <p>
                                                Paga con <b>IronTokens</b> el servicio. Recuerda que simpre puedes recargar más.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default LaundryLanding