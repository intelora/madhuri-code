import useInput from "../hooks/use-input";
const FeedbackForm= ()=>{

  const isNotEmpty = value => value.trim()!=='';

  const{
    value:enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    reset:resetDateInput,
    inputBlurHandler: inputDateBlurHandler }= useInput(isNotEmpty);

    const{
      value:enteredLevel1,
      isValid: enteredLevel1IsValid,
      hasError: level1InputHasError,
      valueChangeHandler: level1ChangeHandler,
      reset:resetLevel1Input,
      inputBlurHandler: inputLevel1BlurHandler }= useInput(isNotEmpty);

      const{
        value:enteredStatus,
        isValid: enteredStatusIsValid,
        hasError: statusInputHasError,
        valueChangeHandler: statusChangeHandler,
        reset:resetStatusInput,
        inputBlurHandler: inputStatusBlurHandler }= useInput(isNotEmpty);

        const{
          value:enteredLevel2,
          isValid: enteredLevel2IsValid,
          hasError: level2InputHasError,
          valueChangeHandler: level2ChangeHandler,
          reset:resetLevel2Input,
          inputBlurHandler: inputLevel2BlurHandler }= useInput(isNotEmpty);

          const{
            value:enteredLevel3,
            isValid: enteredLevel3IsValid,
            hasError: level3InputHasError,
            valueChangeHandler: level3ChangeHandler,
            reset:resetLevel3Input,
            inputBlurHandler: inputLevel3BlurHandler }= useInput(isNotEmpty);

            const{
              value:enteredLevel4,
              isValid: enteredLevel4IsValid,
              hasError: level4InputHasError,
              valueChangeHandler: level4ChangeHandler,
              reset:resetLevel4Input,
              inputBlurHandler: inputLevel4BlurHandler }= useInput(isNotEmpty);


              const{
                value:enteredFeedback,
                isValid: enteredFeedbackIsValid,
                hasError: feedbackInputHasError,
                valueChangeHandler: feedbackChangeHandler,
                reset:resetFeedbackInput,
                inputBlurHandler: inputFeedbackBlurHandler }= useInput(isNotEmpty);
  

          
    
    
     
        let formIsValid = false;
        if(enteredDateIsValid && enteredLevel1IsValid && enteredStatusIsValid &&enteredLevel2IsValid
          &&enteredLevel3IsValid &&enteredLevel3IsValid &&enteredFeedbackIsValid
               ){
                formIsValid=true;
                }
        
        const submitHandler=(event)=>{
          event.preventDefault();
          
          if(!enteredDateIsValid){
            return;
          };
        
          
           console.log(enteredDate);
           console.log(enteredLevel1);
           console.log(enteredLevel2);
           console.log(enteredLevel3);
           console.log(enteredLevel4);
           console.log(enteredFeedback);
           console.log(enteredStatus);
       
            resetDateInput();
            resetLevel1Input();
            resetLevel2Input();
            resetLevel3Input();
            resetLevel4Input();
            resetStatusInput();
            resetFeedbackInput();
            
            

            
           
        
        
          };
        
          
         
          
          const dateInputclasses= dateInputHasError ? "form-control invalid":"form-control";
          const level1Inputclasses = level1InputHasError ? "form-control invalid":"form-control";
          const level2Inputclasses = level2InputHasError ? "form-control invalid":"form-control";
          const level3Inputclasses = level3InputHasError ? "form-control invalid":"form-control";
          const level4Inputclasses = level4InputHasError ? "form-control invalid":"form-control";
          const statusInputclasses = statusInputHasError ? "form-control invalid":"form-control";
          const feedbackInputclasses = feedbackInputHasError ? "form-control invalid":"form-control";

         


    return(
    
    <form onSubmit={submitHandler}>
     

      <div className='control-group'>
         <div className={dateInputclasses}>
         <label htmlFor='text'>Feedback Form</label>
        <label htmlFor='date'>Level-1</label>
        <input 
         type="datetime-local"
         placeholder="date"
         id='date'
         onChange={dateChangeHandler} 
         onBlur={inputDateBlurHandler}
         value={enteredDate}
        /> {dateInputHasError && <p className="error-text">Date must not be empty</p>}

        <input 
         type='text'
         placeholder="level-1"
         id='text'
         onChange={level1ChangeHandler} 
         onBlur={inputLevel1BlurHandler}
         value={enteredLevel1}
        />
         {level1InputHasError && <p className="error-text">Level1 must not be empty</p>}

       <input 
         type='text'
         id='text'
         placeholder="status"
         onChange={statusChangeHandler} 
         onBlur={inputStatusBlurHandler}
         value={enteredStatus}
         />
         {statusInputHasError && <p className="error-text">status must not be empty</p>}

         <input 
         type='text'
         placeholder="feedback"
         id='text'
         onChange={feedbackChangeHandler} 
         onBlur={inputFeedbackBlurHandler}
         value={enteredFeedback}
        />
         {feedbackInputHasError && <p className="error-text">feedback must not be empty</p>}
        
      </div>
      </div>
    


      <div className='control-group'>
         <div className={level2Inputclasses}>
        <label htmlFor='date'>Level-2</label>
        <input 
         type="datetime-local"
         id='date'
         placeholder="date"
         onChange={dateChangeHandler} 
         onBlur={inputDateBlurHandler}
         value={enteredDate}
        /> {dateInputHasError && <p className="error-text">Date must not be empty</p>}

        <input 
         type='text'
         id='text'
         placeholder="level-2"
         onChange={level2ChangeHandler} 
         onBlur={inputLevel2BlurHandler}
         value={enteredLevel2}
        />
         {level2InputHasError && <p className="error-text">Level2 must not be empty</p>}

       <input 
         type='text'
         id='text'
         placeholder="status"
         onChange={statusChangeHandler} 
         onBlur={inputStatusBlurHandler}
         value={enteredStatus}
        />
        {statusInputHasError && <p className="error-text">Status must not be empty</p>}


         <input 
         type='text'
         placeholder="feedback"
         id='text'
         onChange={feedbackChangeHandler} 
         onBlur={inputFeedbackBlurHandler}
         value={enteredFeedback}
        />
         {feedbackInputHasError && <p className="error-text">feedback must not be empty</p>}
      </div>
      </div>
      
      <div className='control-group'>
         <div className={level3Inputclasses}>
        <label htmlFor='date'>Level-3</label>
        <input 
         type="datetime-local"
         id='date'
         placeholder="date"
         onChange={dateChangeHandler} 
         onBlur={inputDateBlurHandler}
         value={enteredDate}
        /> {dateInputHasError && <p className="error-text">Date must not be empty</p>}

        <input 
         type='text'
         id='text'
         placeholder="level-3"
         onChange={level3ChangeHandler} 
         onBlur={inputLevel3BlurHandler}
         value={enteredLevel3}
        />
         {level3InputHasError && <p className="error-text">Level3 must not be empty</p>}

       <input 
         type='text'
         id='text'
         placeholder="status"
         onChange={statusChangeHandler} 
         onBlur={inputStatusBlurHandler}
         value={enteredStatus}
        />

         {statusInputHasError && <p className="error-text">Status must not be empty</p>}
        
         <input 
         type='text'
         placeholder="feedback"
         id='text'
         onChange={feedbackChangeHandler} 
         onBlur={inputFeedbackBlurHandler}
         value={enteredFeedback}
        />
         {feedbackInputHasError && <p className="error-text">feedback must not be empty</p>}
      </div>
      </div>

      <div className='control-group'>
         <div className={level4Inputclasses}>
        <label htmlFor='date'>Level4</label>
        <input 
         type="datetime-local"
         id='date'
        placeholder="date"
         onChange={dateChangeHandler} 
         onBlur={inputDateBlurHandler}
         value={enteredDate}
        /> {dateInputHasError && <p className="error-text">Date must not be empty</p>}

        <input 
         type='text'
         id='text'
         placeholder="level-4"
         onChange={level4ChangeHandler} 
         onBlur={inputLevel4BlurHandler}
         value={enteredLevel4}
        />
         {level4InputHasError && <p className="error-text">Level4 must not be empty</p>}

       <input 
         type='text'
         id='text'
         placeholder="status"
         onChange={statusChangeHandler} 
         onBlur={inputStatusBlurHandler}
         value={enteredStatus}
        />
       {statusInputHasError && <p className="error-text">Status must not be empty</p>}

       <input 
         type='text'
         placeholder="feedback"
         id='text'
         onChange={feedbackChangeHandler} 
         onBlur={inputFeedbackBlurHandler}
         value={enteredFeedback}
        />
         {feedbackInputHasError && <p className="error-text">feedback must not be empty</p>}


      </div>
      </div>
      


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div> 

    
     </form>
   );
}
export default FeedbackForm;