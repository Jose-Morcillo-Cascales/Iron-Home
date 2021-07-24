
module.exports = {
    removeBalance(balance, quantity, price) {
        let total = quantity * price
        let accountBalance = balance - total
        return accountBalance
    },
    repay(balance, quantity, price) {
        let total = quantity * price
        let accountBalance = balance - total
        return accountBalance
    },

    capitalized: (string) => string[0].toUpperCase() + string.slice(1).toLowerCase(),

    toDate: (date) => {
        date = new Date(date).toISOString().slice(0, 10)
        console.log(date)
        return date
    }
}
/* refund(array, price) {
    let refund = array[0].quantity * price
    return refund
}


balance = response[1].balance + refund
repay(array[0].quantity,price){
    refund=
}
Promise.all([laundryPromise, walletPromise])
    .then(response => {
        refund = response[0].quantity * 8
        balance = response[1].balance + refund
        const laundryDeletePromise = LaundryService.findByIdAndRemove(service_id)
        const walletUpdatePromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })
        return Promise.all([laundryDeletePromise, walletUpdatePromise])
    })
    .then(() => res.json({ message: 'Laundry booking sucefully deleted' }))
    .catch(err => console.log(err))
}) */
