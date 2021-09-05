const bcrypt = require('bcrypt')

const  auth = require('../../../auth/index')
const table = 'auth';
module.exports = (injectedStore) => {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/dummy');
	}

	const upsert = async (data) => {
		if (!data.username || !data.password) {
			throw ('Error en al crear el auth del usuario');
		}
		const authData = {
			id:data.id,
			username:data.username,
			password: await bcrypt.hash(data.password, 7)
		};
		return await store.add(table, authData);
	};
	const login = async (username, password) => {
		const data = await store.query(table, {username});
		const isPasswordCorreCT = await bcrypt.compare(password, data.password)
		if(isPasswordCorreCT){
			return auth.sign({...data})
		}else{
			throw ("Error , usuario y/o contraseña invalidos")
		}
	};
	return {
		upsert,
		login,
	};
};
