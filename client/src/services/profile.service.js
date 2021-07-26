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
    editProfile = (user_id, mail, name, lastName, DNI, phone, image) => this.app.put(`/edit?user_id=${user_id}`, { mail, name, lastName, DNI, phone, image })
}

export default ProfileService