import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
import Login from '../pages/Auth/Login/Login'
import RoomOption from '../pages/Room/RoomOption'
import RoomDetails from '../pages/Room/RoomDatails'
import AvalaibleRoomList from '../pages/Room/AvailableRoomList'
import Signup from '../pages/Auth/Signup/Signup'

import ProfileDetails from '../pages/Profile/ProfilePage/ProfileDetails'
import ProfileForm from '../pages/Profile/ProfilePage/ProfileForm'
import ProfileWallet from '../pages/Profile/ProfilePage/ProfileWallet'
import FoodDetails from '../pages/Menu/MenuPage/FoodDetails'

import MenuForm from '../pages/Menu/MenuPage/MenuForm'
import MenuDetails from '../pages/Menu/MenuPage/MenuDetails'

import LaundryLanding from '../pages/Laundry/LaundryLanding'
import LaundryBooking from '../pages/Laundry/LaundryBooking'
import Spinner from '../shared/Spinner/Spinner'




const Routes = ({ storeUser, loggedUser, roomCheck, showMessage }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/servicios" exact render={() => <Spinner />} />


            <Route path="/habitaciones" exact render={() => <RoomOption />} />
            <Route path="/habitaciones/detalles/:room_id" render={props => <RoomDetails {...props} />} />
            <Route path="/habitaciones/disponibles" render={props => loggedUser ? <AvalaibleRoomList loggedUser={loggedUser}  {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/lavanderia" exact render={props => loggedUser ? <LaundryLanding loggedUser={loggedUser}  {...props} /> : <Redirect to="/iniciar-sesion" />} />
            <Route path="/lavanderia/reservas" render={props => loggedUser ? <LaundryBooking loggedUser={loggedUser}  {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />



            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} roomCheck={roomCheck} showMessage={showMessage} />} />
            <Route path="/registro" render={props => <Signup {...props} storeUser={storeUser} />} />

            <Route path="/menu" exact render={(props) => <MenuPage {...props} loggedUser={loggedUser} />} />

            <Route path="/menu/detalles-comida/:food_id" render={props => <FoodDetails loggedUser={loggedUser} {...props} />} />
            <Route path="/menu/crear" render={() => <MenuForm loggedUser={loggedUser} />} />
            <Route path="/menu/detalles-menu/:menu_id" render={props => <MenuDetails loggedUser={loggedUser} {...props} />} />

            <Route path="/perfil" render={() => <ProfileDetails loggedUser={loggedUser} />} />
            <Route path="/perfil/editar?user_id=user_id" render={props => <ProfileForm loggedUser={loggedUser} {...props} />} />
            <Route path="/perfil/wallet" render={() => <ProfileWallet loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes