const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})
var sql = "UPDATE Student SET salary=88000 WHERE roll=1003"
con.connect((err,result)=>{
	if(err) throw err;

	con.query(sql,(err,result,filds)=>{
		if(err) throw err;
		console.log("Number of Updated Record :",result.affectedRows)
	})
})