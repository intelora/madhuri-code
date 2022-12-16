import React from "react";
import classes from "./Input.module.css";
const Input = ({id,label,placeholder,type,register,errorMessage,value}) => {
  return (
    
      <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
         />
        
        <span className={classes.error}>{errorMessage}</span>
       </div>
    
  );
};

export default Input;
