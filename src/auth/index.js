const jwt = require('jsonwebtoken');
const config = require('../config')
const secret = config.jwt.secret
const sign = (data) => {
	return jwt.sign(data, secret);
};
const getToken = (auth)=>{
  if(!auth){
    throw ("Error , no se encontro token")
  }
  if(auth.indexOf('Bearer ')===-1){
    throw ("Error , estructura del token invalida")
  }
  let token = auth.replace('Bearer ','');
  return token;
}
const verify = (token)=>{
  return jwt.verify(token, secret)
}
const decodeHeader = (req) => {
	const authorization = req.headers.authorization || null;
	const token = getToken(authorization);
	const decoded = verify(token);

	req.user = decoded;
  return decoded
};
const check = {
	own: (req, owner) => {
    const tokenDecoded = decodeHeader(req)
    if(tokenDecoded.id != owner){
      throw ("Error , nooo")
    }
  },
  logged: (req) =>{
    const tokenDecoded = decodeHeader(req)
  },
};
module.exports = {
	sign,
  check
};
