import { Container, Button, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            <Container>
                <Col>


                </Col>
            </Container>
        </>
    )
}

export default IndexPage