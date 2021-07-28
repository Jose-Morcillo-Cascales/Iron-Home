
module.exports = {

    totalTokens(quantity, price) {
        let total = quantity * price
        return total
    },

    removeBalance(balance, quantity, price) {
        let total = quantity * price
        let accountBalance = balance - total
        return accountBalance
    },

    repay(quantity, balance, price) {
        let refund = quantity * price
        let total = balance + refund
        return total
    },

    capitalized: (string) => string[0].toUpperCase() + string.slice(1).toLowerCase(),

    toDate: (date) => {
        date = new Date(date).toISOString().slice(0, 10)
        console.log(date)
        return date
    }
}

