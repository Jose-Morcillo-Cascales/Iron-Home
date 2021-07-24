// import './CoastersPage.css'



import Container from 'react-bootstrap/esm/Container'
import FoodList from './FoodList'

const MenuPage = ({ loggedUser }) => {

    return (
        <Container>

            <h1>Comidas caseras</h1>
            <FoodList loggedUser={loggedUser} />

        </Container>
    )
}

export default MenuPage