const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"collage"
})

var sql = "DROP TABLE IF EXISTS student"
//var sql = "DROP TABLE student"

con.connect((err)=>{
	if(err) throw err;

	con.query(sql,(err,result)=>{
		if (err) throw err;
		console.log('Drop Table')
	})
})