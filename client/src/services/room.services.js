import axios from 'axios'

class Room {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/room',
            withCredentials: true
        })
    }

    availableRoomList = (period_request) => this.app.get(`/${period_request}`)
    createBooking = (room_id, period_request, capacity_room) => this.app.post(`/bookingRoom?room_id=${room_id}&period_request=${period_request}&capacity_room =${capacity_room}`)
    roomDetails = (room_id) => this.app.get(`/${room_id}`)

}

export default Room