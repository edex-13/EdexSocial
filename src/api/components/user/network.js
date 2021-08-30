const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const users = await controller.listUsers();
		const responseMessage = {
			req,
			res,
			messageUser: users,
			statusCode: 200,
			message: '[user/get] Todo correcto',
		};
		response.success(responseMessage);
	} catch (error) {
		const responseMessage = {
			req,
			res,
			messageUser: 'Error al obtener los usuarios',
			statusCode: 500,
			message: `[user/get] ${error}`,
		};
		response.error(responseMessage);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const user = await controller.getUser(req.params.id);
		const responseMessage = {
			req,
			res,
			messageUser: user,
			statusCode: 200,
			message: '[user/get:id] Todo correcto',
		};

		response.success(responseMessage);
	} catch (error) {
    const responseMessage = {
			req,
			res,
			messageUser: 'Error al obtener el usuario',
			statusCode: 500,
			message: `[user/get:id] ${error}`,
		};
		response.error(responseMessage);
  }
});
router.post('/', async (req, res) => {
	try {
		const user = await controller.addUser(req.body);
		const responseMessage = {
			req,
			res,
			messageUser: user,
			statusCode: 200,
			message: '[user/post] Todo correcto',
		};

		response.success(responseMessage);
	} catch (error) {
    const responseMessage = {
			req,
			res,
			messageUser: 'Error al crear el usuario',
			statusCode: 500,
			message: `[user/post] ${error}`,
		};
		response.error(responseMessage);
  }
});
router.put('/', async (req, res) => {
	try {
		const user = await controller.updateUser(req.body);
		const responseMessage = {
			req,
			res,
			messageUser: user,
			statusCode: 200,
			message: '[user/put] Todo correcto',
		};

		response.success(responseMessage);
	} catch (error) {
    const responseMessage = {
			req,
			res,
			messageUser: 'Error al actualizar el usuario',
			statusCode: 500,
			message: `[user/put] ${error}`,
		};
		response.error(responseMessage);
  }
});
module.exports = router;
