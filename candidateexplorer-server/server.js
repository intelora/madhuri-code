const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mysql = require('mysql');


//MySql Connection

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "formdatabase"
  });

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.post("/api/post",(req,res)=>{
    const{name,email,contact,skills,experience,currentsalary,location,city,
      expectedsalary,expectedrole,currentrole,currentcompany} = req.body;
    const sqlInsert = " INSERT INTO studentdata (name,email,contact,skills,experience,currentsalary,location,city,expectedsalary,expectedrole,currentrole,currentcompany) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    connection.query(sqlInsert,[name,email,contact,skills,experience,currentsalary,location,city,
      expectedsalary,expectedrole,currentrole,currentcompany],(error,result)=>{
       if(error){
        console.log(error);
        } else{
          res.send("values Inserted");
        }
      });
  });


// app.get("/",(req,res)=>{
// const sqlInsert= " INSERT INTO formdata (name,email,contactno,skills,experience,currentsalary,location,city,expectedsalary,expectedrole,currentrole,currentcompany) VALUES('abhi','abhisisodia14@gmail.com','7566516318','reactjs','1year',2,'bhopal','karond',4,'softwaredeveloper','reactdeveloper','intelora')";
//    connection.query(sqlInsert,(error,result)=>{
//    console.log("error",error);
//      console.log("result",result);
//        res.send("hello");
//        });
//     });

  app.listen(3000,()=>{
   console.log('server running on PORT 3000');
    })

