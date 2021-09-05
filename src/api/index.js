const express = require('express')

const config = require('../config')

const user = require('./components/user/network')
const auth = require('./components/auth/network')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/user',user)
app.use('/auth',auth)

app.listen(config.api.port, ()=>{
  console.info(`Api escuchando en el puerto ${config.api.port}`)
})