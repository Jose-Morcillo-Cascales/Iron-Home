import axios from 'axios'

class ProfileService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    profile = () => this.app.get('/')
    profileWallet = () => this.app.get('/wallet')
    editProfile = (Profile) => this.app.put(`/edit`, Profile)
}

export default ProfileService