const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})

var sql = "INSERT INTO student(roll,name,salary,course) VALUE (1001,'Deepak',45000,'MERN')"

con.connect((err)=>{
	if(err) throw err;

	con.query(sql,(err)=>{
		if(err) throw err;
		console.log("1 Record Inserted successfully !")
	})
})