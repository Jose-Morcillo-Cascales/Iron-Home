import Container from 'react-bootstrap/esm/Container'
import ProfileDetails from './ProfileDetails'
import ProfileWallet from './ProfileWallet'


const ProfilePage = ({ loggedUser }) => {

    return (
        <Container>

            <ProfileDetails loggedUser={loggedUser} />
            <ProfileWallet loggedUser={loggedUser} />


        </Container>
    )
}

export default ProfilePage