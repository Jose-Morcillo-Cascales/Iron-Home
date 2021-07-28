import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ProfileService from './../../../../services/profile.service'
import Spinner from './../../../shared/Spinner/Spinner'

class ProfileWallet extends Component {

    constructor() {
        super()
        this.state = {
            wallet: undefined
        }
        this.profileService = new ProfileService()
    }

    loadWallet() {

        this.profileService
            .profileWallet()
            .then(response => this.setState({ wallet: response.data }))
            .catch(err => console.log(err))

    }

    componentDidMount() {
        this.loadWallet()
    }


    render() {

        return (

            <Container>

                {!this.state.wallet
                    ?
                    <Spinner />
                    :
                    <Row className="justify-content-around">



                        <Col md={4}>

                            <h1>{this.state.wallet.balance}</h1>



                        </Col>
                    </Row>

                }

            </Container>
        )
    }
}


export default ProfileWallet