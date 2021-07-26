import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
import Login from '../pages/Auth/Login/Login'
import RoomOption from '../pages/Room/RoomOption'
import RoomDetails from '../pages/Room/RoomDatails'
import AvalaibleRoomList from '../pages/Room/AvailableRoomList'
import Signup from '../pages/Auth/Signup/Signup'



const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/habitaciones" exact render={() => <RoomOption />} />
            <Route path="/habitaciones/detalles/:room_id" render={props => <RoomDetails {...props} />} />
            <Route path="/habitaciones/disponibles" render={() => loggedUser ? <AvalaibleRoomList loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/menu" exact render={() => <MenuPage loggedUser={loggedUser} />} />
            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/registro" render={props => <Signup {...props} />} />

        </Switch>
    )
}

export default Routes