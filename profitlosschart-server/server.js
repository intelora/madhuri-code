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
    database: "newdb"
  });

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

   app.get("/api/get",(req,res)=>{
     const sqlGet= "SELECT * FROM sampleData;";
     connection.query(sqlGet,(error,result)=>{
       res.send(result);
     });
   });

   app.get("/api/get/ASC",(req,res)=>{
    const sqlGet= "SELECT * FROM sampleData ORDER BY price ASC;";
    connection.query(sqlGet,(error,result)=>{
      res.send(result);
    });
  });

  app.get("/api/get/DESC",(req,res)=>{
    const sqlGet= "SELECT * FROM sampleData ORDER BY price DESC;";
    connection.query(sqlGet,(error,result)=>{
      res.send(result);
    });
  });
 
  app.get("/api/get",(req,res)=>{
    const sqlGet= "SELECT * FROM sampleData;";
    connection.query(sqlGet,(error,result)=>{
      res.send(result);
    });
  });


   
   app.get("/api/get/2",(req,res)=>{
    const sqlGet= "SELECT * FROM sampleData WHERE fruitid > 2;";
    connection.query(sqlGet,(error,result)=>{
      res.send(result);
    });
  });

    app.get("/alldata",(req,res)=>{
      const sqlInsert= " INSERT INTO sampleData(fruitid, fruitname, price) VALUES('10','Cocomelon','111')";
      connection.query(sqlInsert,(error,result)=>{
        console.log("error",error);
        console.log("result",result);
        res.send("hello");
      });
      });
 
    app.listen(5000,()=>{
     console.log('server running on PORT 5000');
      })
