import axios from 'axios'

class LibraryService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/library',
            withCredentials: true
        })
    }

    libraryList = date_requested => this.app.get(`/${date_requested}`)
    bookingLibrary = (init_date, library_id) => this.app.get('/bookingLibrary', { init_date, library_id })
}

export default LibraryService