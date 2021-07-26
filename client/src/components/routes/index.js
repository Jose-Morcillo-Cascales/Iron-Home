import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
import Login from '../pages/Auth/Login/Login'
import FoodDetails from '../pages/Menu/MenuPage/FoodDetails'
import ProfileDetails from '../pages/Profile/ProfilePage/ProfileDetails'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/menu" render={() => <MenuPage loggedUser={loggedUser} />} />
            <Route path="/menu/detalles-comida/:food_id" render={() => <FoodDetails loggedUser={loggedUser} />} />
            <Route path="/perfil" render={() => <ProfileDetails loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes