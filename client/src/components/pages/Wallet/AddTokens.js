import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import WalletService from "../../../services/wallet.service"
import Spinner from "../../shared/Spinner/Spinner"



class AddTokens extends Component {

    constructor() {
        super()
        this.state = {
            wallet: {
                balance: ''
            },
            loading: false
        }
        this.walletService = new WalletService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ wallet: { ...this.state.wallet, [name]: value } })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.walletService
            .editWallet(this.state.wallet.balance)
            .then(() => {
                this.props.closeModal()
                this.props.refreshWallet()
                this.setState({ wallet: { balance: '' } })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>
                    <p>Saldo:</p>
                    <h4>{this.props.wallet.balance} </h4>

                    <Form.Group controlId="balance">
                        <Form.Label>¿Cuántos tokens quieres Cargar?</Form.Label>
                        <Form.Control type="number" value={this.state.wallet.balance} onChange={this.handleInputChange} name="balance" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} type="submit" disabled={this.state.loading}>Cargar Tokens</Button>

                </Form>

            </Container >
        )
    }
}

export default AddTokens