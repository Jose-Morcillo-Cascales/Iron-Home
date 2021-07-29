import { Container, Row } from "react-bootstrap"
import ProfileDetails from './ProfileDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../../shared/UserNavigation/UserNavigation.css'
import ProfileServices from './ProfilesServices'

const ProfilePage = ({ loggedUser, showMessage }) => {

    return (
        <>
            <Container>
                <Row>
                    <div className='user-navegation'>
                        <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                    </div>
                </Row>
            </Container>
            <Container>

                <ProfileDetails loggedUser={loggedUser} showMessage={showMessage} />
                <ProfileServices loggedUser={loggedUser} showMessage={showMessage} />


            </Container>
        </>
    )
}

export default ProfilePage