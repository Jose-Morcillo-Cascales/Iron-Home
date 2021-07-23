import axios from 'axios'

class MenuPurchase {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/menu',
            withCredentials: true
        })
    }

    foodList = () => this.app.get('/foodList')
    foodDetails = (food_id) => this.app.get(`foodDetails/${food_id}`)
    // newMenu = (date,dish,quantity) => this.app.post(`/newMenu/${date}`,{dish,quantity})
    menuDetails = (menu_id) => this.app.get(`details/${menu_id}`)
    // delete
}

export default MenuPurchase
