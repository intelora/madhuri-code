import React, { useState,useEffect } from "react";
import { Form,Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [flag, setFlag] = useState(false);

 
 
  const navigate = useNavigate();
    useEffect(()=>{
      if(localStorage.getItem('isloggedin')){
        navigate("/");
      }
    },[]);

  

  function handleLogin(e) {
    e.preventDefault();
    if (!userName || !password) {
      setFlag(true);
      console.log("EMPTY");
    } else if (password !== password || userName !== userName) {
      setFlag(true);
    
    } else {
      const item = { username: userName, password: password };
      console.log(item);
         axios.post("http://127.0.0.1:5000/login", item)
          .then((response) => {
            console.log("response", response.data);
            console.log("success");
          });
          setFlag(false);
          localStorage.setItem("user-info",JSON.stringify(item));
          navigate("/");
      
    }
  }
  

  return (
    <div>
      
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter user name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
   
    </div>
  );
        };

export default Login;




