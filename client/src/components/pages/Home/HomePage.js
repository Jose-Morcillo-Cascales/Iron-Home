import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>
            <h1>Bievenid@ a Coasters App!</h1>
            <p>Una MERN Stack sobre montañas rusas</p>

            <hr></hr>

            <Link to="/montañas-rusas">
                <Button variant="dark" size="lg">Ver montañas rusas</Button>
            </Link>
        </Container>
    )
}

export default IndexPage