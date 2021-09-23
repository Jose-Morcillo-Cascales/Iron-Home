import { Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToiletPaperSlash, faUserFriends, faReceipt, faUser, faToilet } from '@fortawesome/free-solid-svg-icons'
import './AvailableRoomCard.css'

const AvailableRoomCard = ({ image, number, bath, price, capacity, type, _id, periodRequest, bookRoom }) => {

    const bathicon = elm => !elm ? <FontAwesomeIcon icon={faToilet} className='icon-font' /> : <FontAwesomeIcon icon={faToiletPaperSlash} className='icon-font' />
    const bathboolean = elm => !elm ? 'si' : 'no'
    const capacityIcon = elm => elm === 1 ? <FontAwesomeIcon icon={faUser} className='icon-font' /> : <FontAwesomeIcon icon={faUserFriends} className='icon-font' />
    const random = () => {
        let randonImage = Math.floor(Math.random() * (5 - 1))
        return image[randonImage]
    }
    const capitalized = string => string.toUpperCase()

    return (
        <Col >
            <Card className='card-box'>
                <Card.Title className='title-card'>{capitalized(type)} Nº {number}</Card.Title>
                <Card.Img variant="top" src={random()} />
                <Card.Body>
                    <div className='card-box-icons'>
                        <div className='card-datails-box'>
                            {bathicon(bath)}
                            <p>{bathboolean(bath)}</p>
                        </div>
                        <div className='card-datails-box'>
                            {capacityIcon(capacity)}
                            <p>{capacity}</p>
                        </div>
                        <div className='card-datails-box'>
                            <FontAwesomeIcon icon={faReceipt} className='icon-font' />
                            <p>{price} €</p>
                        </div>
                    </div>
                    <Button className='btn-card-box' onClick={() => bookRoom(_id, periodRequest, capacity)}>BOOK NOW!</Button>
                </Card.Body>

            </Card>
        </Col>

    )
}

export default AvailableRoomCard
