module.exports = {
  api:{
    port: process.env.API_PORT || 6969,
  },
  jwt:{
    secret:  process.env.JWT_SECRET ||'secreto'
  },
  mySql:{
    host: process.env.MYSQL_host || '',
    user: process.env.MYSQL_user || '',
    password: process.env.MYSQL_password || '',
    database: process.env.MYSQL_database || ''
  }
}