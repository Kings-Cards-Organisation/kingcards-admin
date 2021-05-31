import demoTrades from './demoTrades'
import demoWithdrawals from './demoWithdrawals'


const User = class {
    constructor (props) {
        this._name = props.name || ''
        this._balance = props.balance || 0
        this._transactions = props.transactions || []
    }

    // Getters
    get name () { return this._name }

    get balance () { return this._balance }

    get transactions () { return this._transactions }

    // Setters
    set name (nameString) { this._name = nameString }

    set balance (newBalance) { this._balance = newBalance }

    // Methods
    addTransaction (transaction) { this._transactions.push(transaction) }
    removeTransaction (transactionId) { 
        for (let index = 0; index < this.transactions.length; index++) {
            if (this.transactions[index].transactionId === transactionId) {
                this._transactions.splice(index, 1)
            }
        }
    }
}

const transactions = demoWithdrawals + demoTrades

const loadUserTransactions = (user, transactions) => {
    for (let index = 0; index < transactions.length; index++) {
        if (this.transactions[index].name === user.name) {
            user.addTransaction(transactions[index])
        }
    }
}

const user1 = new User({
    name: 'Mark Zuck',
    balance: 1000
})

const user2 = new User({
    name: 'Jason Bourne',
    balance: 1000
})

const user3 = new User({
    name: 'Dow Jones',
    balance: 1000
})

const user4 = new User({
    name: 'Jim Reeves',
    balance: 1000
})

const user5 = new User({
    name: 'Amy Schulz',
    balance: 1000
})

const users = [
    user1,
    user2,
    user3,
    user4,
    user5
]

for (let index in users) {
    loadUserTransactions(users[index], transactions)
}

export default users
