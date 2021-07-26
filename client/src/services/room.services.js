import axios from 'axios'

class RoomService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/room',
            withCredentials: true
        })
    }

    availableRoomList = () => this.app.get('/available/rooms')
    createBooking = (room_id, period_request, capacity_room) => this.app.post(`/bookingRoom?room_id=${room_id}&period_request=${period_request}&capacity_rooms=${capacity_room}`)
    roomDetails = (room_id) => this.app.get(`/datails/${room_id}`)
    roomOptions = () => this.app.get('/roomOptions')


}

export default RoomService