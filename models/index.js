'use strict'

const firebase = require('firebase-admin');
const serviceaccount = require('../config/firebase.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceaccount),
    databaseURL: 'https://overflow-f4341.firebaseio.com/'
})

const db = firebase.database();
const Users = require('./users');
const Questions = require('./questions');

module.exports = {
    users: new Users(db),
    questions: new Questions(db),
}