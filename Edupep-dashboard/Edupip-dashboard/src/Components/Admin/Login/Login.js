import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import Input from "../../UI/Input/Input";
import classes from "./Login.module.css";
import Button from "../../UI/Button/Button";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useCookies } from 'react-cookie';


const schema= yup.object({
    userid: yup.string().required("UserId must not be empty"),
    password: yup.string().min(3,"Password must be atleast 3 characters"),
   })
 
 const Login=(props)=>{
  const [cookies, setCookie] = useCookies(["menuData"]);
  const navigate = useNavigate();
  const[loginError,setLoginError]=useState("");

   const{handleSubmit,register,reset,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
 
   const loginHandler = (data) => {
       console.log(data);
       reset();
       
       const config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }
      const item = { deviceid: "abcd" ,userid: data.userid, password: data.password }

        Axios.post ("http://intelora.co.in/api/rest/common/user_services.php",item,config)
          .then((response)=>{
           console.log(response);
           
           if(response.data.menudata){
            setCookie("menuData", response.data.menudata, { path: '/dashboard' });
           // console.log("cookieData",response.data.menudata);
            console.log("cookie data in state",cookies);
            navigate('/dashboard');
           }
           else{
            setLoginError(true);
            return;
            }
         })
         .catch((error) => {
            console.log(error);
         })

         
    };

  

    return(
        <div>
          <Header/>
             <div className={classes.Signup}>
            
            <h1>Login</h1>
        <form onSubmit={handleSubmit(loginHandler)}>

        <Input
            type="id"
            label="User ID"
            id="userid"
            placeholder="Enter userid"
            register={{...register("userid")}}
            errorMessage={errors.userid?.message}/>

       <Input
            type="password"
            label="Password"
            id="password"
            placeholder="Enter password"
            register={{...register("password")}}
            errorMessage={errors.password?.message}/>
            {loginError && <p style={{color:"red"}}>Password do not match</p>}
         
           <br></br>
            
            <Button type="submit">
            Login
           </Button>

        
          <br />
          <br />
        </form>
        </div>
        <Footer/>
        </div>
    )
};
export default Login;

