import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}`,
            withCredentials: true
        })
    }

    login = (mail, pwd) => this.app.post('/login', { mail, pwd })
    signup = (mail, pwd, name) => this.app.post('/signup', { mail, pwd, name })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService