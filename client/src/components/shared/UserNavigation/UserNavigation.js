import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './UserNavigation.css'

const UserNavigation = (props) => {
    return (
        <Container>
            <Row>
                <div className={`${props.color ? "color-w" : "color-b"} user-navegation`}>
                    <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href={props.link}>{props.text}</a></span>
                </div>
            </Row>
        </Container>
    )
}

export default UserNavigation