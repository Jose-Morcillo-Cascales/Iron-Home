import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry, faLaptop, faCoffee, faCode } from '@fortawesome/free-solid-svg-icons'

const ExperienceHome = () => {
    return (
        <>
            <div className='container-fluid client-box'>
                <Row>
                    <br />
                    <div className="counter-box">
                        <h1>Experiencia Iron Home</h1>
                        <p>Donde dormir está subestimado</p>
                    </div>
                </Row>
                <Row xs={1} className='exp-row'>
                    <Col md={2}>
                        <div className="counter">
                            <FontAwesomeIcon icon={faCode} className='icon-font' />
                            <h2 className="count-title" >1500</h2>
                            <p className="count-text ">Usuarios</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="counter">
                            <FontAwesomeIcon icon={faSadCry} className='icon-font' />
                            <h2 className="count-title" >30000</h2>
                            <p className="count-text ">Lágrimas Derramadas</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="counter">
                            <FontAwesomeIcon icon={faLaptop} className='icon-font' />
                            <h2 className="count-title" >3500</h2>
                            <p className="count-text ">Proyectos Completos</p>
                        </div>
                    </Col>
                    <Col md={2}>
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

export default ExperienceHome