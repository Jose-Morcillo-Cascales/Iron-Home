import { Col, Carousel, Row } from 'react-bootstrap'
import './HomePage.css'
import kitchen from './iron-kitchen.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faCode, faSadCry, faLaptop, faCoffee, faTshirt, faUtensils } from '@fortawesome/free-solid-svg-icons'
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
                        <h1>Nuestros Servicios</h1>
                        <Col md={4}>
                            <div className='service-box'>
                                <div className='icon-service'>
                                    <FontAwesomeIcon icon={faWallet} className='icon-font' />
                                </div>
                                <div className='text-service'>
                                    <h2>Tokens</h2>
                                    <p>
                                        <b>Iron Home</b> es la primera residecia en Madrid para ironhackers del mundo. Con 123 apartamentos y más de
                                        400 camas. En iron home vivirás una experencia Iron Hack 24/7.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='service-box'>
                                <div className='icon-service'>
                                    <FontAwesomeIcon icon={faUtensils} className='icon-font' />
                                </div>
                                <div className='text-service'>
                                    <h2>Menús</h2>
                                    <p>
                                        <b>Iron Home</b> es la primera residecia en Madrid para ironhackers del mundo. Con 123 apartamentos y más de
                                        400 camas. En iron home vivirás una experencia Iron Hack 24/7.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='service-box'>
                                <div className='icon-service'>
                                    <FontAwesomeIcon icon={faTshirt} className='icon-font' />
                                </div>
                                <div className='text-service'>
                                    <h2>Lavandería</h2>
                                    <p>
                                        <b>Iron Home</b> es la primera residecia en Madrid para ironhackers del mundo. Con 123 apartamentos y más de
                                        400 camas. En iron home vivirás una experencia Iron Hack 24/7.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
            <div className='container-fluid client-box'>
                <Row>
                    <br />
                    <div className="counter-box">
                        <h1>Experiencia Iron Home</h1>
                        <p>Donde dormir está subestimado</p>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faCode} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Usuarios</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faSadCry} className='icon-font' />
                            <h2 className="count-title" >30000</h2>
                            <p className="count-text ">Lágrimas Derramadas</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faLaptop} className='icon-font' />
                            <h2 className="count-title" >3500</h2>
                            <p className="count-text ">Proyectos Completos</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <FontAwesomeIcon icon={faCoffee} className='icon-font' />
                            <h2 className="count-title" >100000</h2>
                            <p className="count-text ">Cafés Bebidos</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default IndexPage