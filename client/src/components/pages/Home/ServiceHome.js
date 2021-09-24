import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faTshirt, faUtensils } from '@fortawesome/free-solid-svg-icons'

const ServiceHome = () => {
    return (
        <>
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
        </>
    )
}

export default ServiceHome