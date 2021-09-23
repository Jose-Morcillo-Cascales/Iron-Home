import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
import Login from '../pages/Auth/Login/Login'
import RoomOption from '../pages/Room/RoomOption'
import RoomDetails from '../pages/Room/RoomDatails'
import AvalaibleRoomList from '../pages/Room/AvailableRoomList'
import Signup from '../pages/Auth/Signup/Signup'

import ProfileForm from '../pages/Profile/ProfilePage/ProfileForm'


import MenuDetails from '../pages/Menu/MenuPage/MenuDetails'

import LaundryLanding from '../pages/Laundry/LaundryLanding'
import LaundryBooking from '../pages/Laundry/LaundryBooking'
import Spinner from '../shared/Spinner/Spinner'
import WalletDetails from '../pages/Wallet/WalletDatails'
import ProfilePage from '../pages/Profile/ProfilePage/ProfilePage'
import MenuLanding from './../pages/Menu/MenuPage/MenuLanding'



const Routes = ({ storeUser, loggedUser, roomCheck, showMessage, hasRoom }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/servicios" exact render={() => <Spinner />} />

            <Route path="/habitaciones" exact render={(props) => <RoomOption roomCheck={roomCheck} hasRoom={hasRoom} />} />
            <Route path="/habitaciones/detalles/:room_id" render={props => <RoomDetails {...props} hasRoom={hasRoom} />} />
            <Route path="/habitaciones/disponibles" render={props => loggedUser ? <AvalaibleRoomList loggedUser={loggedUser}  {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/lavanderia" exact render={props => loggedUser ? <LaundryLanding loggedUser={loggedUser}  {...props} /> : <Redirect to="/iniciar-sesion" />} />
            <Route path="/lavanderia/reservas" render={props => loggedUser ? <LaundryBooking loggedUser={loggedUser}  {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/wallet" render={props => loggedUser ? <WalletDetails loggedUser={loggedUser}  {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />


            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} roomCheck={roomCheck} showMessage={showMessage} />} />
            <Route path="/registro" render={props => <Signup {...props} storeUser={storeUser} showMessage={showMessage} />} />

            <Route path="/menu/reservas" exact render={(props) => loggedUser ? <MenuPage {...props} loggedUser={loggedUser} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />
            <Route path="/menu" exact render={props => loggedUser ? <MenuLanding loggedUser={loggedUser}  {...props} /> : <Redirect to="/iniciar-sesion" />} />



            <Route path="/menu/detalles-menu/:menu_id" render={(props) => loggedUser ? <MenuDetails loggedUser={loggedUser} {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/perfil" render={(props) => loggedUser ? <ProfilePage loggedUser={loggedUser} {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />
            <Route path="/perfil/editar?user_id=user_id" render={(props) => loggedUser ? <ProfileForm loggedUser={loggedUser} {...props} showMessage={showMessage} /> : <Redirect to="/iniciar-sesion" />} />

        </Switch>
    )
}

export default Routes