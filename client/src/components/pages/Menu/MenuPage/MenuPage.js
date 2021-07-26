// import './CoastersPage.css'
import Container from 'react-bootstrap/esm/Container'
import MenuForm from './MenuForm'

const MenuPage = ({ loggedUser }) => {

    return (
        <Container>


            <MenuForm loggedUser={loggedUser} />


        </Container>
    )
}

export default MenuPage