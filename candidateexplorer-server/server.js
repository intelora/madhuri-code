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
    const{id,name,email} = req.body;
    const sqlInsert = " INSERT INTO sampleformdata (id,name,email) VALUES (?,?,?)";
    connection.query(sqlInsert,[id,name,email],(error,result)=>{
       if(error){
        console.log(error);
       }
        
         });
      
      });


app.get("/",(req,res)=>{
    // const sqlInsert= " INSERT INTO sampleformdata (id,name,email,contactno,location,city,experirnce,currentrole,currentsalary,expectedsalary,currentcompany,expectedrole,feedback) VALUES(1,'Madhuri','madhurisisodia@gmail.com',7566516918,'Bhopal','')";
    // connection.query(sqlInsert,(error,result)=>{
    //   console.log("error",error);
    //   console.log("result",result);
    //   res.send("hello");
    //   });
      
    });

  app.listen(3000,()=>{
   console.log('server running on PORT 3000');
    })

