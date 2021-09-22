import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToiletPaperSlash, faUserFriends, faReceipt, faUser, faToilet } from '@fortawesome/free-solid-svg-icons'
import './AvailableRoomCard.css'

const AvailableRoomCard = ({ image, number, bath, price, capacity, type, _id, periodRequest, bookRoom }) => {

    const bathicon = elm => !elm ? <FontAwesomeIcon icon={faToilet} className='icon-font' /> : <FontAwesomeIcon icon={faToiletPaperSlash} className='icon-font' />
    const bathboolean = elm => !elm ? 'si' : 'no'
    const capacityIcon = elm => elm === 1 ? <FontAwesomeIcon icon={faUser} className='icon-font' /> : <FontAwesomeIcon icon={faUserFriends} className='icon-font' />
    // const random = elm => Math.floor(Math.random() * (4 - 1)) 
    const capitalized = string => string.toUpperCase()

    return (
        <Col >
            <Card className='card-box'>
                <Card.Img variant="top" src={image[0]} />
                <Card.Body>
                    <Card.Title className='title'>{capitalized(type)} Nº {number}</Card.Title>
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
                </Card.Body>
                <Button className='btn-card-box' onClick={() => bookRoom(_id, periodRequest, capacity)}>BOOK NOW!</Button>

            </Card>
        </Col>

    )
}

export default AvailableRoomCard
