import { Container, Button, Col, Carousel, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'
import kitchen from './iron-kitchen.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'

const IndexPage = () => {

    return (
        <>
            <div className='container-fluid' style={{ 'padding': "0" }} >
                <Carousel>
                    <Carousel.Item>
                        <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dzbcqgzcb/image/upload/v1627242527/IronHome/Iron%20Home/1_tqegg6.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dzbcqgzcb/image/upload/v1627242525/IronHome/Iron%20Home/2_whdjup.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dzbcqgzcb/image/upload/v1627242536/IronHome/Iron%20Home/4_x78w4b.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dzbcqgzcb/image/upload/v1627242522/IronHome/Iron%20Home/3_l0gvjk.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container-fluid main-box'>
                <section className='iron-box'>
                    <Row className='row-box'>
                        <Col md={4}>
                            <div className='info-box'>
                                <h6>Apartamentos para IronHackers</h6>
                                <h2>PRESENTAMOS UN NUEVO CONCEPTO DE VIVIENDA</h2>
                                <p>
                                    <b>Iron Home</b> es la primera residecia en Madrid para ironhackers del mundo. Con 123 apartamentos y más de
                                    400 camas. En iron home vivirás una experencia Iron Hack 24/7.
                                </p>
                                <h6>Te invitamos a conocernos!</h6>
                                <h6>#IronHomeExperience</h6>

                            </div>
                        </Col>
                        <Col md={8}>
                            <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                                className="d-block w-100"
                                src={kitchen}
                                alt="Iron Kitchen"
                            />
                        </Col>
                    </Row>
                </section>
            </div>
            <div className='container-fluid service-box'>
                <section className='iron-box'>
                    <Row className='row-box'>
                        <Col md={4}>
                            <div className='info-box'>
                                <h6>Apartamentos para IronHackers</h6>
                                <h2>PRESENTAMOS UN NUEVO CONCEPTO DE VIVIENDA</h2>
                                <p>
                                    <b>Iron Home</b> es la primera residecia en Madrid para ironhackers del mundo. Con 123 apartamentos y más de
                                    400 camas. En iron home vivirás una experencia Iron Hack 24/7.
                                </p>
                                <h6>Te invitamos a conocernos!</h6>
                                <h6>#IronHomeExperience</h6>

                            </div>
                        </Col>
                        <Col md={8}>
                            <img style={{ 'height': "600px", 'objectFit': 'cover' }}
                                className="d-block w-100"
                                src={kitchen}
                                alt="Iron Kitchen"
                            />
                        </Col>
                    </Row>
                </section>
            </div>
            <Container>
                <Row>
                    <br />
                    <div className="col text-center">
                        <h2>Bootstrap 4 counter</h2>
                        <p>counter to count up to a target number</p>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faChevronLeft} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Our Customer</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faChevronLeft} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Our Customer</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faChevronLeft} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Our Customer</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faChevronLeft} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Our Customer</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default IndexPage