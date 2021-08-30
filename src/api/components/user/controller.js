const {nanoid} = require('nanoid');
const user = require('.');
const table = 'user';

module.exports = (injectedStore) => {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/dummy');
	}
	const listUsers = () => {
		return store.list(table);
	};
	const getUser = (id) => {
		return store.get(table, id);
	};
	const addUser = (newUserDate) => {
		if (!newUserDate.name) {
			throw new Error('No se ha encontrado el nombre del usuario');
		}
		const newUser = {
			id: nanoid(),
			name: newUserDate.name,
		};
		return store.add(table, newUser);
	};
	const updateUser = (newUserDate) => {
		if (!newUserDate.id) {
			throw new Error('No se ha encontrado el id del usuario especificado');
		}
		return store.update(table, newUserDate);
	};
	return {
		listUsers,
		getUser,
		addUser,
		updateUser,
	};
};
