import axios from 'axios'

class WalletService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/wallet`,
            withCredentials: true
        })
    }

    walletDetails = () => this.app.get('/')
    editWallet = (balance) => this.app.put(`/topUp`, { balance })

}

export default WalletService