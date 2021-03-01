'use strict'
const bcrypt = require('bcrypt');

class Users {
    constructor (db) {
        this.db = db
        this.ref = this.db.ref('/')
        this.collection = this.ref.child('users')
    }

    async create(data) {
        data.password = await this.constructor.encrypt(data.password)
        const newUser = this.collection.push()
        newUser.set(data)

        return newUser.key
    }

    async validateUser(data){
        const userQuery = await this.collection.orderByChild('email').equalsTo(data.email).once('value')
        const userFound = userQuery.val()
        if (userFound) {
            const userId = Object.keys(userFound)[0]
            const passwordRight = await bcrypt.compare(data.password, userFound[userId].password)
            const result = (passwordRight) ? userFound[userId] : false

            return result
        }
        return false
    }

    static async encrypt(password) {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    }
}

module.exports = Users