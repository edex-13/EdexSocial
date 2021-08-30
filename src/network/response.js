exports.success = ({req , res , messageUser = '' , statusCode = 200 , message})=>{
  res.status(statusCode).send({
    error:false,
    status:statusCode,
    body: messageUser
  })
  console.log(message)
}
exports.error = ({req , res , messageUser = 'Internal server error' , statusCode = 500 , message})=>{
  res.status(statusCode).send({
    error:true,
    status:statusCode,
    body: messageUser
  })
  console.log(message)
}