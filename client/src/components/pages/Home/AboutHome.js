import { Row, Col } from 'react-bootstrap';
import kitchen from './iron-kitchen.jpg'


const AboutHome = () => {
    return (
        <>
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
                            <img
                                className="d-block w-100"
                                src={kitchen}
                                alt="Iron Kitchen"
                            />
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    )
}

export default AboutHome