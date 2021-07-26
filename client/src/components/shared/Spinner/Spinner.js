import { Container, Row } from 'react-bootstrap'
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className='container-fluid' style={{ 'padding': "0" }} >

            <Row className="justify-content-md-center mt-5">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={10000}
                />
            </Row>
        </div>
    )
}

export default Spinner