const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})
var sql = "SELECT name,salary FROM Student"
con.connect((err,result)=>{
	if(err) throw err;

	con.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result[5].name)
	})
})