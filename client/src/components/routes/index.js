import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
        </Switch>
    )
}

export default Routes