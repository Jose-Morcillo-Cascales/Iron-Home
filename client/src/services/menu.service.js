import axios from 'axios'

class MenuPurchase {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/menu`,
            withCredentials: true
        })
    }

    foodList = () => this.app.get('/foodList')
    foodDetails = (food_id) => this.app.get(`/foodDetails/${food_id}`)
    newMenu = (date, dish) => this.app.post('/newMenu', { dish, date })
    menuDetails = (menu_id) => this.app.get(`/details/${menu_id}`)
    deleteMenu = (menu_id) => this.app.delete(`/delete?menu_id=${menu_id}`)
}

export default MenuPurchase
