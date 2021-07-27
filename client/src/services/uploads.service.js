import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/upload',
            withCredentials: true
        })
    }

    uploadImage = imageForm => this.app.post('/image', imageForm)
}

export default UploadsService