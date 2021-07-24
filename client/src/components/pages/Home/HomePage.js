import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>
            <h1>Iron Home</h1>
            <p>Un lugar para Soñar</p>

            <hr></hr>

            <Link to="/montañas-rusas">
                <Button variant="dark" size="lg">Algo pasará aquí</Button>
            </Link>
        </Container>
    )
}

export default IndexPage