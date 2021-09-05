const auth = require('../../../auth/index')
module.exports = (action) => {
	const middleware = (req , res , next) => {
    const actions = {
      post:()=>{
        auth.check.logged(req)
        next()
      }
    }
    const result = actions[action]
      ?actions[action]()
      :next()
  };
  return middleware
};
