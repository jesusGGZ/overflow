'use strict'

const firebase = require('firebase-admin');
const serviceaccount = require('serviceaccount');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceaccount),
    databaseURL: 'https://overflow-f4341.firebaseio.com/'
})

const db = firebase.database();
const Users = require('./users');

module.exports = {
    users: new Users(db)
}