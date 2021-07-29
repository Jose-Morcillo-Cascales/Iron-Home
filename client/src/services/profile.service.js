import axios from 'axios'

class ProfileService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/profile`,
            withCredentials: true
        })
    }

    profile = () => this.app.get('/')
    profileWallet = () => this.app.get('/wallet')
    editProfile = (Profile) => this.app.put(`/edit`, Profile)
}

export default ProfileService