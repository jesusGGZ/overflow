'use strict'
const joi = require('joi');
const site = require('./public/controllers/site');
const user = require('./public/controllers/user');

    module.exports = [{
        method: 'GET',
        path: '/',
        handler: site.home
    },
    {
        method: 'GET',
        path: '/register',
        handler: site.register
    },
    {
        method: 'POST',
        options: {
            validate: {
                payload: {
                    name: Joi.string.required().min(3),
                    email: Joi.string().email().required(),
                    password: Joi.string().required().min(6)
                }
            }
        },
        path: '/create-user',
        handler: user.createUser
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        } 
    }]