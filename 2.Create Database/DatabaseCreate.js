const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:""
})

con.connect((err)=>{
	if(err) throw err;
	console.log("Connected to MySQL Server !");
	
	con.query("CREATE DATABASE Techpile",(err)=>{
		if(err) throw err;
		console.log("Datadase created successfully !")
	})
})