const db = {
	user: [
		{id: '1', name: 'ederson'},
		{id: '2', name: 'cristian'},
	],
};

const list = async (table) => db[table];

const get = async (table, id) => {
	let dbTable = await list(table);
	return dbTable.find((item) => item.id === id) || null;
};
const add = async (table, data) => {
	let dbTable = await list(table);
	dbTable.push(data);
	return await get(table, data.id);
};
const update = async (table, userData) => {
	const user = await get(table, userData.id);
	if(!user){
		return ('Usuario no encontrado')
	}
	if (user.name != userData.name) {
		user.name = userData.name;
		return ('Usuario Actualizado con exito');
	}
};

module.exports = {
	list,
	get,
	add,
	update,
};
