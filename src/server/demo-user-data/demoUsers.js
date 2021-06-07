import demoTrades from './demoTrades'
import demoWithdrawals from './demoWithdrawals'


const User = class {
    constructor (props) {
        this._name = props.name || ''
        this._id = props.id || ''
        this._email = props.email || ''
        this._balance = props.balance || 0
        this._transactions = props.transactions || []
        this._isOnline = props.isOnline || false
        this._isNewUser = props.isNewUser || false
    }

    // Getters
    get name () { return this._name }

    get id () { return this._id }

    get email () { return this._email }

    get balance () { return this._balance }

    get transactions () { return this._transactions }

    get isOnline () { return this._isOnline }

    get isNewUser () { return this._isNewUser }

    // Setters
    set name (nameString) { this._name = nameString }

    set id (idString) { this._id = idString }

    set email (emailString) { this._email = emailString }

    set balance (newBalance) { this._balance = newBalance }

    set isOnline (state) { this._isOnline = state }

    set isNewUser (state) { this._isNewUser = state }

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

const transactions = demoWithdrawals.concat(demoTrades)

const loadUserTransactions = (user, transactions) => {
    for (let index = 0; index < transactions.length; index++) {
        if (transactions[index].user === user.name) {
            user.addTransaction(transactions[index])
        }
    }
}



const user1 = new User({
    name: 'Mark Zuck',
    id: 'MZ70489673',
    email: 'mark@zuck.email',
    balance: 1000,
    isOnline: true,
    isNewUser: true
})

const user2 = new User({
    name: 'Jason Bourne',
    id: 'JB89403474',
    email: 'jason@bourne.email',
    balance: 2000,
    isOnline: true,
    isNewUser: false
})

const user3 = new User({
    name: 'Dow Jones',
    id: 'DJ40348825',
    email: 'dow@jones.email',
    balance: 3000,
    isOnline: false,
    isNewUser: true
})

const user4 = new User({
    name: 'Jim Reeves',
    id: 'JR83942663',
    email: 'jim@reeves.email',
    balance: 5000,
    isOnline: false,
    isNewUser: false
})

const user5 = new User({
    name: 'Amy Schulz',
    id: 'AS23097548',
    email: 'amy@schulz.email',
    balance: 4000,
    isOnline: true,
    isNewUser: true
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
