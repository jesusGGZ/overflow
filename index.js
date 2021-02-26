'use strict'

const Hapi = require('Hapi');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
});