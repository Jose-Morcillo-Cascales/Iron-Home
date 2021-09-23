import { Col, Container, Row } from "react-bootstrap"
import ProfileDetails from './ProfileDetails'
import ProfileServices from './ProfilesServices'
import UserNavigation from "../../../shared/UserNavigation/UserNavigation"
import './ProfilePage.css'

const ProfilePage = ({ loggedUser, showMessage }) => {

    return (
        <>
            <div className='bg-blue'>
                <UserNavigation color link="/" text='Inicio' />
                <Container className='profile'>
                    <Row>
                        <Col md={6}>
                            <ProfileDetails loggedUser={loggedUser} showMessage={showMessage} />
                        </Col>
                        <Col md={6}>
                            <ProfileServices loggedUser={loggedUser} showMessage={showMessage} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProfilePage