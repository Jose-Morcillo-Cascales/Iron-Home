import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Auth/Login/Login'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} />} />
        </Switch>
    )
}

export default Routes