module.exports = {
  api:{
    port: process.env.API_PORT || 3001,
  },
  jwt:{
    secret:  process.env.JWT_SECRET ||'secreto'
  }
}