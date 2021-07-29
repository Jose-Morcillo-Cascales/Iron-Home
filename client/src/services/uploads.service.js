import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/upload`,
            withCredentials: true
        })
    }

    uploadImage = imageForm => this.app.post('/image', imageForm)
}

export default UploadsService
