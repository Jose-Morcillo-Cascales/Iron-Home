import { Row, Container, DropdownButton, Dropdown } from "react-bootstrap"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../shared/UserNavigation/UserNavigation.css'

import Spinner from "../../shared/Spinner/Spinner"
import WalletService from "../../../services/wallet.service"


class WalletDetails extends Component {

    constructor() {
        super()
        this.state = {
            list: undefined,
            wallet: undefined
        }
        this.walletService = new WalletService()
    }


    loadWallet = () => {

        this.walletService
            .walletDetails()
            .then(response => this.setState({ wallet: response.data, list: response.data }))
            .catch(err => console.log(err))
    }

    addTokens = () => {

        this.RoomService
            .editWallet()
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadWallet()
    }




    render() {

        return (

            !this.state.wallet
                ?
                <Spinner />
                :
                (<>
                    <Container>
                        <Row>
                            <div className='user-navegation'>
                                <span><FontAwesomeIcon icon={faChevronLeft} className='icon-font' /><a href="/">Inicio</a></span>
                            </div>
                        </Row>
                    </Container>

                    <Container>
                        <h1>Wallet</h1>
                        <hr></hr>


                    </Container>
                </>
                )
        )
    }
}

export default WalletDetails

