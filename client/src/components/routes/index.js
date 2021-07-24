import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/menu" exact render={() => <MenuPage loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes