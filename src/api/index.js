const express = require('express')

const config = require('../config')

const user = require('./components/user/network')
const app = express()
app.use(express.json());

app.use('/',user)

app.listen(config.api.port, ()=>{
  console.info(`Api escuchando en el puerto ${config.api.port}`)
})