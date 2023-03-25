const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})

var sql = "CREATE TABLE student(roll int, name varchar(255),salary int, course varchar(255))"

con.connect((err)=>{
	if(err) throw err;
	console.log("Connected to MySQL Server !");

	con.query(sql,(err)=>{
		if(err) throw err;
		console.log("Table created successfully !")
	})
})