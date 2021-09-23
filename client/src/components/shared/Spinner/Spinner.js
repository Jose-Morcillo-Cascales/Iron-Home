import { Col, Row } from 'react-bootstrap'
import Loader from "react-loader-spinner"
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='container-fluid cont-spinner'>

            <Row className='align-items-center'>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className='Spinner-Box'>
                        <Loader
                            type="Circles"
                            color="#2dc5fa"
                            height={60}
                            width={60}
                            timeout={40000}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Spinner