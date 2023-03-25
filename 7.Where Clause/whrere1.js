const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})
var sql = "SELECT*FROM Student WHERE salary>70000"
con.connect((err,result)=>{
	if(err) throw err;

	con.query(sql,(err,result,filds)=>{
		if(err) throw err;
		console.log(result)
	})
})