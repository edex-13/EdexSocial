const db = {
	user: [
		{id: '1', name: 'ederson'},
		{id: '2', name: 'cristian', username:"cris" , password:"123"},
	],
};

const list = async (table) => db[table] || [];

const get = async (table, id) => {
	let dbTable = await list(table);
	return dbTable.find((item) => item.id === id) || null;
};
const add = async (table, data) => {
	if (!db[table]) {
		db[table] = [];
	}
	db[table].push(data);
	console.log(db)
	return await get(table, data.id);
};
const update = async (table, userData) => {
	const user = await get(table, userData.id);
	if (!user) {
		return 'Usuario no encontrado';
	}
	if (user.name != userData.name) {
		user.name = userData.name;
		return 'Usuario Actualizado con exito';
	}
};

const query = async (table, {username}) => {
	let dbTable = await list(table);
	return 	db[table].find((item) => item['username'] == username) || null;
};

module.exports = {
	list,
	get,
	add,
	update,
	query,
};
