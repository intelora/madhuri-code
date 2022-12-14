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



app.post("/form",(req,res)=>{
  console.log(req.body);
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

app.post("/feedbackform",(req,res)=>{
    console.log(req.body);
    const{level1datetime,level1,level1status,level1feedback,level2datetime,level2,level2status,level2feedback,level3datetime,level3,level3status,level3feedback,level4datetime,level4,level4status,level4feedback} = req.body;

    const sqlInsert =" INSERT INTO feedbackdata (level1datetime,level1,level1status,level1feedback,level2datetime,level2,level2status,level2feedback,level3datetime,level3,level3status,level3feedback,level4datetime,level4,level4status,level4feedback) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     
    connection.query(sqlInsert,[level1datetime,level1,level1status,level1feedback,level2datetime,level2,level2status,level2feedback,level3datetime,level3,level3status,level3feedback,level4datetime,level4,level4status,level4feedback],(error,result)=>{
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

