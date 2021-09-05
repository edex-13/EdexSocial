const controller = require('./controller')
const store = require('../../../store/db')

module.exports = controller(store)