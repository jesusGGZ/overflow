'use strict'
const Handlebars = require('Handlebars')

function registerHelpers(){
    handlebars.registerHelper('answerNumber', (answers) => {
        const keys = Object.keys(answers)
        return keys.length
    })

    handlebars.registerHelper('ifEquals', (a, b, options) => {
        if (a == b) {
            return options.fn(this)
        }
        return options.inverse(this)
    })

    return handlebars
}

module.exports = registerHelpers()