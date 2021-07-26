import Container from 'react-bootstrap/esm/Container'
import ProfileDetails from './ProfileDetails'


const ProfilePage = ({ loggedUser }) => {

    return (
        <Container>

            <ProfileDetails loggedUser={loggedUser} />



        </Container>
    )
}

export default ProfilePage