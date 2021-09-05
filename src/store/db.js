const dbConnection = require('./dbConnection');

const db = dbConnection();

const list = (table) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM ${table}`, (error, data) => {
			if (error) {
				return reject(error);
			}
			resolve(data);
		});
	});
};
// SELECT * FROM `user_follow` WHERE user_from = 'k_8oWaeG7ZC1-Fez8nW5x'
const get = (table, id) => {
	return new Promise((resolve, reject) => {
		// db.query(`SELECT * FROM ${table}  WHERE user_from= ${id}`, (error, result) => {
		db.query(`SELECT * FROM ${table} WHERE user_from = '${id}'`, (error, result) => {
			if (error) {
				return reject(error);
			}
			resolve(result);
		});
	});
};
const add = (table, data) => {
	return new Promise((resolve, reject) => {
		db.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
			if (error) {
				return reject(error);
			}
			resolve(result);
		});
	});
};
const update = (table, data) => {
  console.log(table)
	return new Promise((resolve, reject) => {
		db.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (error, result) => {
			if (error) {
				return reject(error);
			}
			resolve(result);
		});
	});
};
const query = (table, queryy) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM ${table} WHERE ?`, queryy, (error, res) => {
			if (error) return reject(error);
			resolve(res[0] || null);
		});
	});
};
module.exports = {
	list,
	get,
	add,
	update,
	query,
};
