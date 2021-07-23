import axios from 'axios'

class Wallet {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/wallet',
            withCredentials: true
        })
    }

    walletDetails = () => this.app.get('/')
    editWallet = (balance) => this.app.put(`/topUp`, { balance })
    roomDetails = (room_id) => this.app.get(`/${room_id}`)

}

export default Wallet