import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Routes from './routes'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'
import AuthService from '../services/auth.service'
import RoomService from '../services/room.service'
import Alert from './shared/Alert/Alert'




class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      alert: { show: false, text: '' },
      hasRoom: false
    }
    this.authService = new AuthService()
    this.roomService = new RoomService()

  }

  roomCheck = () => {
    this.roomService
      .roomVerification()
      .then(room => !room.data ? this.setState({ hasRoom: false }) : this.setState({ hasRoom: true }))
      .catch(err => console.log(err))
  }



  storeUser = loggedUser => this.setState({ loggedUser })
  showMessage = text => this.setState({ alert: { show: true, text } })

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => {
        this.storeUser(theLoggedUser.data)
        this.roomCheck()
      })
      .catch(() => this.storeUser(undefined))
  }


  componentDidMount = () => {
    this.fetchUser()
  }

  render() {

    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} hasRoom={this.state.hasRoom} roomCheck={this.roomCheck} showMessage={this.showMessage} />

        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} roomCheck={this.roomCheck} showMessage={this.showMessage} />

        <Footer />

        <Alert show={this.state.alert.show} text={this.state.alert.text} closeAlert={() => this.setState({ alert: { ...this.state.alert, show: false } })} />
      </>
    )
  }
}

export default App;