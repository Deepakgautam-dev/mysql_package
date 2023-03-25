const mysql = require('mysql')
mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:""
}).connect((err)=>{
	if(err) throw err;
	console.log("Connected !");
})