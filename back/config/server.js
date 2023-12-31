/**
 * 
 *  server.js
 *  SQL server configuration
 * 
 *  Created: 2024-01-03
 *  Last modified: -
 * 
 */

const sql = require('mssql');
const { config } = require('./config.js');

const poolPromise = new sql.ConnectionPool(config)
	.connect()
	.then(pool => {
		console.log('DB에 연결되었습니다.');
		return pool;
	})
	.catch(err => console.log('DB 연결에 실패하였습니다: ', err))

module.exports = {
	sql, poolPromise
}