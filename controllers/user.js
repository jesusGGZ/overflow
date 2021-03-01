'use strict'
const users = require('../models/index')

async function createUser (req, h) {
    let result
    try {
        result = await users.create(req.payload)
    } catch (error) {
        console.error(error);
        return h.response('Ocurrio un problema al crear el usuario.').code(500)
    }
    return h.response(`Usuario creado ID: ${result}`);
}

async function validateUser (req, h){
    let result
    try {
        result = await users.validateUser(req.payload)
    } catch (error) {
        console.error(error);
        return h.response('Problemas validando el usuario').code(500)
    }
    return result
}

module.exports = {
    createUser: createUser,
    validateUser: validateUser
};