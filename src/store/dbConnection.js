const mySql = require('mysql');

const config = require('../config')


const dbConfig = {
  host:config.mySql.host,
  user:config.mySql.user,
  password:config.mySql.password,
  database:config.mySql.database,
}
let connection 

const handelConnection = ()=>{
  connection = mySql.createConnection(dbConfig);
  connection.connect((error)=>{
    if(error){
      console.error('[DB]' , error)
      setTimeout(handelConnection(), 2000)
    }else{
      console.log('[DB CONNECTED]')
    }
  })
  connection.on('error',(error)=>{
    console.error('[DB]', error)
    if(error.code == 'PROTOCOL_CONNECTION_LOST'){
      handelConnection()
    }else{
      throw 'error en la BD'
    }
  })
  return connection
}
module.exports = handelConnection