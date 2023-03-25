const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})
var sql = "DELETE FROM Student WHERE roll=1004 "
con.connect((err,result)=>{
	if(err) throw err;

	con.query(sql,(err,result,filds)=>{
		if(err) throw err;
		console.log("Number of Record Delete :",result.affectedRows)
	})
})