import axios from 'axios'

class WalletService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/wallet',
            withCredentials: true
        })
    }

    walletDetails = () => this.app.get('/')
    editWallet = (balance) => this.app.put(`/topUp`, { balance })

}

export default WalletService