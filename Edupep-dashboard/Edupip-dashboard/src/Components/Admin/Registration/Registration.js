import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import Input from "../../UI/Input/Input";
import classes from "./Registration.module.css";
import Button from "../../UI/Button/Button";


const schema= yup.object({
   firstName: yup.string().required("First Name must not be empty"),
   lastName: yup.string().required("Last Name must not be empty"),
   category: yup.string().required("Category must be select"),
   email: yup.string().required("Email Name must not be empty").email("Email must be valid"),
   phoneNumber: yup.string().required("Phone Number must not be empty")
   .min(10,"Please enter 10 digits valid phone number."),
   
})

const Registration=(props)=>{

  const navigate = useNavigate();

  const{handleSubmit,register,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
 
   const signUpAuth = (data) => {
       console.log(data);
       if(!data){
        return;
       }else{
        navigate('/verifyotp');
       }
      
    };

    

    return(
        <div>
          <Header/>
             <div className={classes.Signup}>
            <h1>Register</h1>
            
        <form onSubmit={handleSubmit(signUpAuth)}>
         <Input
            type="text"
            label="First Name"
            id="firstName"
            placeholder="Enter name"
            register={{...register("firstName")}}
            errorMessage={errors.firstName?.message}/>

       <Input
            type="text"
            label="Last Name"
            id="lastName"
            placeholder="Enter name"
            register={{...register("lastName")}}
            errorMessage={errors.lastName?.message}/>
         
          <Input
            type="email"
            label="Email address"
            id="email"
            placeholder="Enter email"
            register={{...register("email")}}
            errorMessage={errors.email?.message}/>
           
           <Input
            type="text"
            label="Phone Number"
            id="phoneNumber"
            placeholder="Enter phone number"
            register={{...register("phoneNumber")}}
            errorMessage={errors.phoneNumber?.message}/>

          <label>Choose User</label>
         <select {...register("category")}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="principal">Principal</option>
          <option value="operator">Operator</option>
          errorMessage={errors.category?.message}
          </select>
          
      
          <br/>
          <br/>

         <Button type="submit">
           Register
          </Button>
          

          <br />
          <br />
          <p style={{ display: "inline" }}>Already Logged in? </p>
          <NavLink className={classes.Link} to='/login'>
            Login
          </NavLink>
        </form>
        </div>
        <Footer/>
        </div>
    )
};
export default Registration;


