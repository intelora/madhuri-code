import useInput from "../hooks/use-input";
import axios from "axios";
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
          value:enteredFeedback,
          isValid: enteredFeedbackIsValid,
          hasError: feedbackInputHasError,
          valueChangeHandler: feedbackChangeHandler,
          reset:resetFeedbackInput,
          inputBlurHandler: inputFeedbackBlurHandler }= useInput(isNotEmpty);



        const{
          value:enteredLevel1Date,
          isValid: enteredLevel1DateIsValid,
          hasError: level1DateInputHasError,
          valueChangeHandler: level1DateChangeHandler,
          reset:resetLevel1DateInput,
          inputBlurHandler: inputLevel1DateBlurHandler }= useInput(isNotEmpty);

        const{
          value:enteredLevel2,
          isValid: enteredLevel2IsValid,
          hasError: level2InputHasError,
          valueChangeHandler: level2ChangeHandler,
          reset:resetLevel2Input,
          inputBlurHandler: inputLevel2BlurHandler }= useInput(isNotEmpty);


          const{
            value:enteredLevel1Status,
            isValid: enteredLevel1StatusIsValid,
            hasError: level1StatusInputHasError,
            valueChangeHandler: level1StatusChangeHandler,
            reset:resetLevel1StatusInput,
            inputBlurHandler: inputLevel1StatusBlurHandler }= useInput(isNotEmpty);

          const{
            value:enteredLevel1Feedback,
            isValid: enteredLevel1FeedbackIsValid,
            hasError: level1FeedbackInputHasError,
            valueChangeHandler: level1FeedbackChangeHandler,
            reset:resetLevel1FeedbackInput,
            inputBlurHandler: inputLevel1FeedbackBlurHandler }= useInput(isNotEmpty);



          const{
            value:enteredLevel2Date,
            isValid: enteredLevel2DateIsValid,
            hasError: level2DateInputHasError,
            valueChangeHandler: level2DateChangeHandler,
            reset:resetLevel2DateInput,
            inputBlurHandler: inputLevel2DateBlurHandler }= useInput(isNotEmpty);

          const{
            value:enteredLevel3,
            isValid: enteredLevel3IsValid,
            hasError: level3InputHasError,
            valueChangeHandler: level3ChangeHandler,
            reset:resetLevel3Input,
            inputBlurHandler: inputLevel3BlurHandler }= useInput(isNotEmpty);


            const{
              value:enteredLevel2Status,
              isValid: enteredLevel2StatusIsValid,
              hasError: level2StatusInputHasError,
              valueChangeHandler: level2StatusChangeHandler,
              reset:resetLevel2StatusInput,
              inputBlurHandler: inputLevel2StatusBlurHandler }= useInput(isNotEmpty);
  


            const{
              value:enteredLevel2Feedback,
              isValid: enteredLevel2FeedbackIsValid,
              hasError: level2FeedbackInputHasError,
              valueChangeHandler: level2FeedbackChangeHandler,
              reset:resetLevel2FeedbackInput,
              inputBlurHandler: inputLevel2FeedbackBlurHandler }= useInput(isNotEmpty);


            const{
              value:enteredLevel3Date,
              isValid: enteredLevel3DateIsValid,
              hasError: level3DateInputHasError,
              valueChangeHandler: level3DateChangeHandler,
              reset:resetLevel3DateInput,
              inputBlurHandler: inputLevel3DateBlurHandler }= useInput(isNotEmpty);

            const{
              value:enteredLevel4,
              isValid: enteredLevel4IsValid,
              hasError: level4InputHasError,
              valueChangeHandler: level4ChangeHandler,
              reset:resetLevel4Input,
              inputBlurHandler: inputLevel4BlurHandler }= useInput(isNotEmpty);

              const{
                value:enteredLevel3Status,
                isValid: enteredLevel3StatusIsValid,
                hasError: level3StatusInputHasError,
                valueChangeHandler: level3StatusChangeHandler,
                reset:resetLevel3StatusInput,
                inputBlurHandler: inputLevel3StatusBlurHandler }= useInput(isNotEmpty);
    


              const{
                value:enteredLevel3Feedback,
                isValid: enteredLevel3FeedbackIsValid,
                hasError: level3FeedbackInputHasError,
                valueChangeHandler: level3FeedbackChangeHandler,
                reset:resetLevel3FeedbackInput,
                inputBlurHandler: inputLevel3FeedbackBlurHandler }= useInput(isNotEmpty);
  
          
    
    
     
        let formIsValid = false;
        if(enteredDateIsValid && enteredLevel1DateIsValid && enteredLevel2DateIsValid &&enteredLevel3DateIsValid &&
          enteredLevel1IsValid && enteredStatusIsValid 
          && enteredLevel1StatusIsValid  && enteredLevel2StatusIsValid  && enteredLevel3StatusIsValid &&enteredLevel2IsValid
          &&enteredLevel3IsValid &&enteredLevel4IsValid &&enteredFeedbackIsValid &&enteredLevel1FeedbackIsValid 
          &&enteredLevel2FeedbackIsValid &&enteredLevel3FeedbackIsValid
               ){
                formIsValid=true;
                }
        
        const submitHandler=(event)=>{
          event.preventDefault();
          
          if(!enteredDateIsValid){
            return;
          }else{
            console.log('enter',enteredLevel3Status );
            console.log(' enter2 ', enteredLevel2Status );

            axios.post('http://localhost:3000/feedbackform',{
            level1datetime:enteredDate,
            level1:enteredLevel1,
            level1status:enteredStatus,
            level1feedback:enteredFeedback,
            level2datetime:enteredLevel1Date,
            level2:enteredLevel2,
            level2status:enteredLevel1Status,
            level2feedback:enteredLevel1Feedback,
            level3datetime:enteredLevel2Date,
            level3:enteredLevel3,
            level3status:enteredLevel2Status,
            level3feedback:enteredLevel2Feedback,
            level4datetime:enteredLevel3Date,
            level4:enteredLevel4,
            level4status:enteredLevel3Status,
            level4feedback:enteredLevel3Feedback,
          }).then(()=>{
            console.log("success");
          });
        };
         
        
        
           console.log(enteredDate);
           console.log(enteredLevel1Date);
           console.log(enteredLevel2Date);
           console.log(enteredLevel3Date);

           console.log(enteredLevel1);
           console.log(enteredLevel2);
           console.log(enteredLevel3);
           console.log(enteredLevel4);

           console.log(enteredFeedback);
           console.log(enteredLevel1Feedback);
           console.log(enteredLevel2Feedback);
           console.log(enteredLevel3Feedback);


           console.log(enteredStatus);
           console.log(enteredLevel1Status);
           console.log(enteredLevel2Status);
           console.log(enteredLevel3Status);


            resetDateInput();
            resetLevel1DateInput();
            resetLevel2DateInput();
            resetLevel3DateInput();

            resetLevel1Input();
            resetLevel2Input();
            resetLevel3Input();
            resetLevel4Input();

            resetStatusInput();
            resetLevel1StatusInput();
            resetLevel2StatusInput();
            resetLevel3StatusInput();

            resetFeedbackInput();
            resetLevel1FeedbackInput();
            resetLevel2FeedbackInput();
            resetLevel3FeedbackInput();
            
          };
          const dateInputclasses= dateInputHasError ? "form-control invalid":"form-control";
          // const date1Inputclasses= date1InputHasError ? "form-control invalid":"form-control";
          // const date2Inputclasses= date2InputHasError ? "form-control invalid":"form-control";
          // const date3Inputclasses= date3InputHasError ? "form-control invalid":"form-control";

          const level1Inputclasses = level1InputHasError ? "form-control invalid":"form-control";
          // const level2Inputclasses = level2InputHasError ? "form-control invalid":"form-control";
          // const level3Inputclasses = level3InputHasError ? "form-control invalid":"form-control";
          // const level4Inputclasses = level4InputHasError ? "form-control invalid":"form-control";

          const statusInputclasses = statusInputHasError ? "form-control invalid":"form-control";
          // const status1Inputclasses = status1InputHasError ? "form-control invalid":"form-control";
          // const status2Inputclasses = status2InputHasError ? "form-control invalid":"form-control";
          // const status3Inputclasses = status3InputHasError ? "form-control invalid":"form-control";

          const feedbackInputclasses = feedbackInputHasError ? "form-control invalid":"form-control";
          // const feedback1Inputclasses = feedback1InputHasError ? "form-control invalid":"form-control";
          // const feedback2Inputclasses = feedback2InputHasError ? "form-control invalid":"form-control";
          // const feedback3Inputclasses = feedback3InputHasError ? "form-control invalid":"form-control";

    return (
    
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
         <div className={level1Inputclasses}>
        <label htmlFor='date'>Level-2</label>
        <input 
         type="datetime-local"
         id='date'
         placeholder="date"
         onChange={level1DateChangeHandler} 
         onBlur={inputLevel1DateBlurHandler}
         value={enteredLevel1Date}
        /> {level1DateInputHasError && <p className="error-text">Date must not be empty</p>}

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
         onChange={level1StatusChangeHandler} 
         onBlur={inputLevel1StatusBlurHandler}
         value={enteredLevel1Status}
        />
        {level1StatusInputHasError && <p className="error-text">Status must not be empty</p>}


         <input 
         type='text'
         placeholder="feedback"
         id='text'
         onChange={level1FeedbackChangeHandler} 
         onBlur={inputLevel1FeedbackBlurHandler}
         value={enteredLevel1Feedback}
        />
         {level1FeedbackInputHasError && <p className="error-text">feedback must not be empty</p>}
      </div>
      </div>
      
      <div className='control-group'>
         <div className={statusInputclasses}>
        <label htmlFor='date'>Level-3</label>
        <input 
         type="datetime-local"
         id='date'
         placeholder="date"
         onChange={level2DateChangeHandler} 
         onBlur={inputLevel2DateBlurHandler}
         value={enteredLevel2Date}
        /> {level2DateInputHasError && <p className="error-text">Date must not be empty</p>}

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
         onChange={level2StatusChangeHandler} 
         onBlur={inputLevel2StatusBlurHandler}
         value={enteredLevel2Status}
        />
        {level2StatusInputHasError && <p className="error-text">Status must not be empty</p>}

        <input 
        type='text'
         placeholder="feedback"
         id='text'
         onChange={level2FeedbackChangeHandler} 
         onBlur={inputLevel2FeedbackBlurHandler}
         value={enteredLevel2Feedback}
        />
         {level2FeedbackInputHasError && <p className="error-text">feedback must not be empty</p>}
      </div>
      </div>

      <div className='control-group'>
         <div className={feedbackInputclasses}>
        <label htmlFor='date'>Level4</label>
        <input 
         type="datetime-local"
         id='date'
        placeholder="date"
         onChange={level3DateChangeHandler} 
         onBlur={inputLevel3DateBlurHandler}
         value={enteredLevel3Date}
        /> {level3DateInputHasError && <p className="error-text">Date must not be empty</p>}

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
         onChange={level3StatusChangeHandler} 
         onBlur={inputLevel3StatusBlurHandler}
         value={enteredLevel3Status}
        />
        {level3StatusInputHasError && <p className="error-text">Status must not be empty</p>}

        <input 
        type='text'
         placeholder="feedback"
         id='text'
         onChange={level3FeedbackChangeHandler} 
         onBlur={inputLevel3FeedbackBlurHandler}
         value={enteredLevel3Feedback}
        />
         {level3FeedbackInputHasError && <p className="error-text">feedback must not be empty</p>}

      </div>
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div> 
   </form>
   );
}
export default FeedbackForm;