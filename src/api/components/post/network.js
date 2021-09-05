const express = require('express');
const secure = require('./secure')
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const post = await controller.list();
		const responseMessage = {
			req,
			res,
			messageUser: post,
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

router.get('/userPost', async (req, res) => {
	try {
		const usersFollowing = await controller.listUserPost(req.query.idUser);
		const responseMessage = {
			req,
			res,
			messageUser: usersFollowing,
			statusCode: 200,
			message: '[user/get] Todo correcto'+ req.query.id,
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
		const post = await controller.get(req.params.id);
		const responseMessage = {
			req,
			res,
			messageUser: post,
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
router.post('/', secure('post'),async (req, res) => {
	try {
		const post = await controller.add(req.body , req.user.id );
		const responseMessage = {
			req,
			res,
			messageUser: post,
			statusCode: 200,
			message: '[post/post] Todo correcto',
		};

		response.success(responseMessage);
	} catch (error) {
		const responseMessage = {
			req,
			res,
			messageUser: 'Error al momento de agregar el post',
			statusCode: 400,
			message: `[post/post] ${error}`,
		};
		response.error(responseMessage);
	}
});
module.exports = router;
