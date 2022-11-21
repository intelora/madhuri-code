import React from "react";
import useInput from "../hooks/use-input";
import axios from "axios";


const isNotEmpty = value => value.trim()!=='';

const Form = (props) => {
 
  const{
    value:enteredName,
    isValid: enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    reset:resetNameInput,
    inputBlurHandler: inputNameBlurHandler }= useInput(isNotEmpty);


    const{
      value:enteredEmail,
      isValid: enteredEmailIsValid,
      hasError:emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      reset:resetEmailInput,
      inputBlurHandler: inputEmailBlurHandler }= useInput(value=> value.includes('@'));


    const{
        value:enteredContact,
        isValid: enteredContactIsValid,
        hasError:contactInputHasError,
        valueChangeHandler: contactChangeHandler,
        reset:resetContactInput,
        inputBlurHandler: inputContactBlurHandler }= useInput(isNotEmpty);

        const{
          value:enteredSkills,
          isValid: enteredSkillsIsValid,
          hasError:skillsInputHasError,
          valueChangeHandler: skillsChangeHandler,
          reset:resetSkillsInput,
          inputBlurHandler: inputSkillsBlurHandler }= useInput(isNotEmpty);


          const{
            value:enteredCity,
            isValid: enteredCityIsValid,
            hasError:cityInputHasError,
            valueChangeHandler: cityChangeHandler,
            reset:resetCityInput,
            inputBlurHandler: inputCityBlurHandler }= useInput(isNotEmpty);

            const{
              value:enteredLocation,
              isValid: enteredLocationIsValid,
              hasError:locationInputHasError,
              valueChangeHandler: locationChangeHandler,
              reset:resetLocationInput,
              inputBlurHandler: inputLocationBlurHandler }= useInput(isNotEmpty);


              const{
                value:enteredExperience,
                isValid: enteredExperienceIsValid,
                hasError: experienceInputHasError,
                valueChangeHandler: experienceChangeHandler,
                reset:resetExperienceInput,
                inputBlurHandler: inputExperienceBlurHandler }= useInput(isNotEmpty);

                const{
                  value:enteredCurrentRole,
                  isValid: enteredCurrentRoleIsValid,
                  hasError: currentRoleInputHasError,
                  valueChangeHandler: currentRoleChangeHandler,
                  reset:resetCurrentRoleInput,
                  inputBlurHandler: inputCurrentRoleBlurHandler }= useInput(isNotEmpty);

                  const{
                    value:enteredExpectedRole,
                    isValid: enteredExpectedRoleIsValid,
                    hasError:expectedRoleInputHasError,
                    valueChangeHandler: expectedRoleChangeHandler,
                    reset:resetExpectedRoleInput,
                    inputBlurHandler: inputExpectedRoleBlurHandler }= useInput(isNotEmpty);

                    const{
                      value:enteredCurrentSalary,
                      isValid: enteredCurrentSalaryIsValid,
                      hasError: currentSalaryInputHasError,
                      valueChangeHandler: currentSalaryChangeHandler,
                      reset:resetCurrentSalaryInput,
                      inputBlurHandler: inputCurrentSalaryBlurHandler }= useInput(isNotEmpty);

                      const{
                        value:enteredCurrentCompany,
                        isValid: enteredCurrentCompanyIsValid,
                        hasError: currentCompanyInputHasError,
                        valueChangeHandler: currentCompanyChangeHandler,
                        reset:resetCurrentCompanyInput,
                        inputBlurHandler: inputCurrentCompanyBlurHandler }= useInput(isNotEmpty);

                        const{
                          value:enteredExpectedSalary,
                          isValid: enteredExpectedSalaryIsValid,
                          hasError:expectedSalaryInputHasError,
                          valueChangeHandler: expectedSalaryChangeHandler,
                          reset:resetExpectedSalaryInput,
                          inputBlurHandler: inputExpectedSalaryBlurHandler }= useInput(isNotEmpty);

                  
                let formIsValid = false;
if(enteredNameIsValid && enteredEmailIsValid && enteredContactIsValid && enteredSkillsIsValid
   && enteredCityIsValid && enteredLocationIsValid && enteredCurrentSalaryIsValid && enteredCurrentRoleIsValid
   && enteredCurrentCompanyIsValid && enteredExperienceIsValid && enteredExpectedSalaryIsValid 
   && enteredExpectedRoleIsValid 
       ){
        formIsValid=true;
        }

const submitHandler=(event)=>{
  event.preventDefault();
  console.log(event.target.value);
  
  if(!enteredNameIsValid){
    return;
  } else{
     axios.post('http://localhost:3000/form',{
     name:enteredName,
     email:enteredEmail,
     contact:enteredContact,
     skills:enteredSkills,
     experience:enteredExperience,
     currentsalary:enteredCurrentSalary,
     location:enteredLocation,
     city:enteredCity,
     expectedsalary:enteredExpectedSalary,
     expectedrole:enteredExpectedRole,
     currentrole:enteredCurrentRole,
     currentcompany:enteredCurrentCompany
     }).then(()=>{
       console.log("success");
     });
    };
  
  //   console.log(enteredName);
  //  console.log(enteredEmail);
  //  console.log(enteredContact);
  
    resetNameInput();
    resetEmailInput();
    resetContactInput();
    resetSkillsInput();
    resetCityInput();
    resetLocationInput();
    resetExpectedSalaryInput();
    resetExpectedRoleInput();
    resetCurrentRoleInput();
    resetCurrentSalaryInput();
    resetCurrentCompanyInput();
    resetExperienceInput();
   


  };

  
 
  
  const nameInputclasses= nameInputHasError ? "form-control invalid":"form-control";
  const emailInputclasses = emailInputHasError ? "form-control invalid":"form-control";
  const contactInputclasses = contactInputHasError ? "form-control invalid":"form-control";
  const skillsInputclasses = skillsInputHasError ? "form-control invalid":"form-control";
  const cityInputclasses = cityInputHasError ? "form-control invalid":"form-control";
  const locationInputclasses = locationInputHasError ? "form-control invalid":"form-control";
  const currentSalaryInputclasses = currentSalaryInputHasError ? "form-control invalid":"form-control";
  const currentCompanyInputclasses = currentCompanyInputHasError ? "form-control invalid":"form-control";
  const experienceInputclasses = experienceInputHasError ? "form-control invalid":"form-control";
  const expectedSalaryInputclasses = expectedSalaryInputHasError ? "form-control invalid":"form-control";
  const currentRoleInputclasses = currentRoleInputHasError ? "form-control invalid":"form-control";
  const expectedRoleInputclasses = expectedRoleInputHasError ? "form-control invalid":"form-control";
  
  


  return (
    <form>
      
      
    
          
      <div className="form-actionss">
         <div>
         <input 
         type='text'
         id='text'
         />
      <button>button</button>
      
      
      </div>
       </div>
         
       <div className='control-group'>
        <div className={nameInputclasses}>
        <label htmlFor='name'>Name</label>
        <input 
         type='text'
         id='name'
         onChange={nameChangeHandler} 
         onBlur={inputNameBlurHandler}
         value={enteredName}
        />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty</p>}

      
      <div className={contactInputclasses}>
        <label htmlFor='number'>Contact No.</label>
        <input 
         type='number'
         id='number'
         onChange={contactChangeHandler} 
         onBlur={inputContactBlurHandler}
         value={enteredContact}
        />
      </div>
      </div>
      {contactInputHasError && <p className="error-text">Contact must not be empty</p>}

      <div className='control-group'>
      <div className={emailInputclasses}>
        <label htmlFor='number'>Email-Id</label>
        <input 
         type='email'
         id='email'
         onChange={emailChangeHandler} 
         onBlur={inputEmailBlurHandler}
         value={enteredEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Email Id must not be empty</p>}



      <div className={skillsInputclasses}>
        <label htmlFor='name'>Skills</label>
        <input 
         type='text'
         id='name'
         onChange={skillsChangeHandler} 
         onBlur={inputSkillsBlurHandler}
         value={enteredSkills}
        />
      </div>
      </div>
    
      {skillsInputHasError && <p className="error-text">Name must not be empty</p>}

      <div className='control-group'>
      <div className={experienceInputclasses}>
        <label htmlFor='type'>Experience</label>
        <input 
         type='type'
         id='type'
         onChange={experienceChangeHandler} 
         onBlur={inputExperienceBlurHandler}
         value={enteredExperience}
        />
      </div>
      {experienceInputHasError && <p className="error-text">Experience must not be empty</p>}



      <div className={currentCompanyInputclasses}>
        <label htmlFor='type'>Current Company</label>
        <input 
         type='type'
         id='type'
         onChange={currentCompanyChangeHandler} 
         onBlur={inputCurrentCompanyBlurHandler}
         value={enteredCurrentCompany}
        />
      </div>
      </div>
    
      {currentCompanyInputHasError && <p className="error-text">Current Company must not be empty</p>}

      <div className={currentRoleInputclasses}>
        <label htmlFor='type'>Current Role</label>
        <input 
         type='type'
         id='type'
         onChange={currentRoleChangeHandler} 
         onBlur={inputCurrentRoleBlurHandler}
         value={enteredCurrentRole}
        />
      </div>
      {currentRoleInputHasError && <p className="error-text">Current Role must not be empty</p>}


      <div className={expectedRoleInputclasses}>
        <label htmlFor='type'>Expected Role</label>
        <input 
         type='type'
         id='type'
         onChange={expectedRoleChangeHandler} 
         onBlur={inputExpectedRoleBlurHandler}
         value={enteredExpectedRole}
        />
      </div>
      
      {expectedRoleInputHasError && <p className="error-text">Expected Role must not be empty</p>}

      
      <div className={locationInputclasses}>
        <label htmlFor='type'>Location</label>
        <input 
         type='type'
         id='type'
         onChange={locationChangeHandler} 
         onBlur={inputLocationBlurHandler}
         value={enteredLocation}
        />
      </div>
      {locationInputHasError && <p className="error-text">Location must not be empty</p>}


      <div className={cityInputclasses}>
        <label htmlFor='type'>City</label>
        <input 
         type='type'
         id='type'
         onChange={cityChangeHandler} 
         onBlur={inputCityBlurHandler}
         value={enteredCity}
        />
      </div>
      {cityInputHasError && <p className="error-text">City must not be empty</p>}



      <div className={expectedSalaryInputclasses}>
        <label htmlFor='number'>Expected Salary</label>
        <input 
         type='number'
         id='number'
         onChange={expectedSalaryChangeHandler} 
         onBlur={inputExpectedSalaryBlurHandler}
         value={enteredExpectedSalary}
        />
      </div>
      {expectedSalaryInputHasError && <p className="error-text">Expected Salary must not be empty</p>}


      <div className={currentSalaryInputclasses}>
        <label htmlFor='number'>Current Salary</label>
        <input 
         type='number'
         id='number'
         //onSubmit={submitHandler}
         onChange={submitHandler} 
         onBlur={inputCurrentSalaryBlurHandler}
         value={enteredCurrentSalary}
        />
      </div>

{currentSalaryInputHasError && <p className="error-text">Current Salary must not be empty</p>}

      
      {/* <div className="form-actions">
        <button disabled={!formIsValid}>button</button>
      </div> 
       */}
    </form>
  );
};

export default Form;
