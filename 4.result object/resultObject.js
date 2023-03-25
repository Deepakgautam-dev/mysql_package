const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})

con.connect((err,result)=>{
	if(err) throw err;
	console.log("result object Return Value :",result);
})