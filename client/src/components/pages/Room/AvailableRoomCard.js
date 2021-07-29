import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './AvalaibleRoomCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToiletPaper, faToiletPaperSlash, faUserFriends, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons'


const AvalaibleRoomCard = ({ number, bath, price, capacity, type, _id, periodRequest, bookRoom }) => {

    const bathicon = elm => !elm ? <FontAwesomeIcon icon={faToiletPaper} className='icon-font' /> : <FontAwesomeIcon icon={faToiletPaperSlash} className='icon-font' />
    const bathboolean = elm => !elm ? 'si' : 'no'
    const capacityIcon = elm => elm === 1 ? <FontAwesomeIcon icon={faUser} className='icon-font' /> : <FontAwesomeIcon icon={faUserFriends} className='icon-font' />

    const capitalized = string => string.toUpperCase()

    return (

        <Col>
            <div className='card-box'>
                <h4>{capitalized(type)} Nº {number}</h4>
                <hr></hr>
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
                <hr></hr>
                <Button className='btn-card-box' onClick={() => bookRoom(_id, periodRequest, capacity)}>BOOK NOW!</Button>
            </div>
        </Col>
    )
}

export default AvalaibleRoomCard