import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import Input from "../../UI/Input/Input";
import classes from "./VerifyOtp.module.css";
import Button from "../../UI/Button/Button";


const schema= yup.object({
    emailotp: yup.string().min(6,"Enter 6 digit valid email otp"),
    mobileotp: yup.string().min(6,"Enter 6 digit mobile otp"),
   referncecode: yup.string().min(6,"Enter 6 digit valid reference code"),
   
})

const VerifyOtp=(props)=>{

  const navigate = useNavigate();

  const{handleSubmit,register,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
 
   const submitHandler = (data) => {
       console.log(data);
       if(!data){
        return;
       }else{
        navigate('/login');
       }
   
    };

  

    return(
        <div>
          <Header/>
             <div className={classes.Signup}>
            
            <h1>OTP Verification</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
         <Input
            type="text"
            label="Email OTP"
            id="emailotp"
            placeholder="Enter email otp"
            register={{...register("emailotp")}}
            errorMessage={errors.emailotp?.message}/>

       <Input
            type="text"
            label="Mobile OTP"
            id="mobileotp"
            placeholder="Enter mobile otp"
            register={{...register("mobileotp")}}
            errorMessage={errors.mobileotp?.message}/>
         
         <Input
            type="text"
            label="Reference Code"
            id="referncecode"
            placeholder="Enter reference code"
            register={{...register("referncecode")}}
            errorMessage={errors.referncecode?.message}/>

          <br></br>
            <Button type="submit">
            Verify
          </Button>
        
          <br />
          <br />
        </form>
        </div>
        <Footer/>
        </div>
    )
};
export default VerifyOtp;

