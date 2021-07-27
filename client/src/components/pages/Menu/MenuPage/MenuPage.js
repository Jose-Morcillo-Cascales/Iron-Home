// import './CoastersPage.css'
import Container from 'react-bootstrap/esm/Container'
import MenuForm from './MenuForm'

const MenuPage = ({ loggedUser, match }) => {

    return (
        <Container>
            <MenuForm match={match} loggedUser={loggedUser} />
        </Container>
    )
}

export default MenuPage