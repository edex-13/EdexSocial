const {nanoid} = require('nanoid');
const auth = require('../auth');
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
	const addUser = async(newUserData) => {
		if (!newUserData.name || !newUserData.username || !newUserData.password) {
			throw ('No se ha encontrado el nombre del usuario');
		}
		const newUser = {
			id: nanoid(),
			name: newUserData.name,
			username: newUserData.username
		};
		await auth.upsert({
			...newUser,
			password:newUserData.password
		})
		return store.add(table, newUser);
	};
	const updateUser = (newUserData) => {
		if (!newUserData.id) {
			throw ('No se ha encontrado el id del usuario especificado');
		}
		return store.update(table, newUserData);
	};
	const follow = (from , to)=>{
		return store.add(table+'_follow',{
			user_from:from,
			user_to: to,
		})
	}
	const listfollowing = (id)=>{
		return store.get(table+'_follow',id)
	}
	return {
		listUsers,
		getUser,
		addUser,
		updateUser,
		follow,
		listfollowing,
	};
};
