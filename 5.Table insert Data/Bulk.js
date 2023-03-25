const mysql = require('mysql')
const con = mysql.createConnection({
	host:"localhost",
	port:"3307",
	user:"root",
	password:"",
	database:"Techpile"
})

var sql = "INSERT INTO student(roll,name,salary,course) VALUES ?"
var value = [[1004,"Silpa",70000,"B.Tech"],[1005,"Garima",99000,"M.Tech"]]

con.connect((err)=>{
	if(err) throw err;
	console.log("Connected to MySQL Server !");

	con.query(sql,[value],(err,result)=>{
		if(err) throw err;
		console.log("Number of recourds inserted",result.affectedRows)
	})
})