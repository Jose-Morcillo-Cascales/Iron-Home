import axios from 'axios'

class LaundryService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/laundry`,
            withCredentials: true
        })
    }

    bookingLaundry = booking => this.app.post('/bookingService', booking)
    deleteBooking = service_id => this.app.delete(`/deleteBooking?service_id=${service_id}`)
}

export default LaundryService