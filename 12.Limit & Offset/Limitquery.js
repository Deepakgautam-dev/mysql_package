const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})
var sql = "SELECT*FROM Student LIMIT 2"
con.connect((err,result)=>{
	if(err) throw err;

	con.query(sql,(err,result,filds)=>{
		if(err) throw err;
		console.log(result)
	})
})