import { Container, Row } from 'react-bootstrap'
import MenuForm from './MenuForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../../shared/UserNavigation/UserNavigation.css'



const MenuPage = ({ loggedUser, match, showMessage, history }) => {

    return (
        <>
            <Container>
                <Row>
                    <div className='user-navegation'>
                        <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                    </div>
                </Row>
            </Container>
            <Container fluid>
                <MenuForm history={history} match={match} loggedUser={loggedUser} showMessage={showMessage} />
            </Container>
        </>
    )
}

export default MenuPage