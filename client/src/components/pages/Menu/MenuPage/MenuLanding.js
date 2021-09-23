import { Col, Row, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './MenuLanding.css'
import step1 from './1-steps.png'
import step2 from './2-steps.png'
import step3 from './3-steps.png'
import '../../../shared/UserNavigation/UserNavigation.css'
import UserNavigation from "../../../shared/UserNavigation/UserNavigation"

const MenuLanding = () => {
    return (
        <>
            <div className='bg-color'>
                <UserNavigation color={false} link="/" text='Inicio' />

                <Container fluid>
                    <section>
                        <Row className='step-row-box'>
                            <Col md={4} className='step-text-box'>
                                <h1>¿Hambre?</h1>
                                <Link to="/menu/reservas" className="btn btn-menu-book">¡A COMER!</Link>
                            </Col>
                            <Col md={8}>

                                <Row className='steps'>
                                    <Col md={4} className='col-stetps'>
                                        <div className='steps-box'>
                                            <div>
                                                <img className='number-box' src={step1} alt="step1" />
                                            </div>
                                            <div className='text-steps'>
                                                <h2>Menú</h2>
                                                <p>
                                                    Un <strong>Menú </strong> puede contener todos los platos que quieras, cada plato son 6 <strong>IronTokens </strong>.
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
                                                    Seleciona el <b>día</b> en el que quieras que te preparen tu Menú y los <b>platos</b>.
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
            </div>
        </>
    )
}

export default MenuLanding