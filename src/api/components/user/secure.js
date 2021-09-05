const auth = require('../../../auth/index')
module.exports = (action) => {
	const middleware = (req , res , next) => {
    const actions = {
      update: ()=>{
        const owner = req.body.id || null;
        auth.check.own(req , owner)
        next()
      },
      follow:()=>{
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
