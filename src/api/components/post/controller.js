const {nanoid} = require('nanoid');
const table = 'post';
module.exports = (injectedStore) => {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/dummy');
	}
	const list = () => {
		return store.list(table);
	};
	const get = (id)=>{
		const column = 'id'
		return store.get(table,column, id);
	}
	const add = ({title , description}, user) => {
		const dataPost = {
			title , 
			description,
			user,
			id: nanoid()
		}
		return store.add(table ,dataPost);
	};
	const listUserPost = (id)=>{
			const column = 'user'
		return store.get(table,column, id);

	}
	return {
		list,
		add,
		get,
		listUserPost
	};
};
