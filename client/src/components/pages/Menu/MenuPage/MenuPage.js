import MenuForm from './MenuForm'
import UserNavigation from '../../../shared/UserNavigation/UserNavigation'


const MenuPage = ({ loggedUser, match, showMessage, history }) => {

    return (
        <>
            <div className='bg-blue'>
                <UserNavigation color link="/" text='Inicio' />

                <MenuForm history={history} match={match} loggedUser={loggedUser} showMessage={showMessage} />
            </div>
        </>
    )
}

export default MenuPage