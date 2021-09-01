const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.post('/login', async (req, res) => {
	try {
		const userLogin = await controller.login(req.body.username, req.body.password);
		const responseMessage = {
			req,
			res,
			messageUser: userLogin,
			statusCode: 200,
			message: '[auth/post/login] Todo correcto',
		};

		response.success(responseMessage);
	} catch (error) {
		const responseMessage = {
			req,
			res,
			messageUser: 'Error al momento de hacer login , verifique las credenciales',
			statusCode: 400,
			message: `[auth/post/login] ${error}`,
		};
		response.error(responseMessage);
	}
});
module.exports = router;
