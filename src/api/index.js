const express = require('express')

const config = require('../config')

const user = require('./components/user/network')
const auth = require('./components/auth/network')
const post = require('./components/post/network')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/user',user)
app.use('/auth',auth)
app.use('/post',post)

app.listen(config.api.port, ()=>{
  console.info(`Api escuchando en el puerto ${config.api.port}`)
})