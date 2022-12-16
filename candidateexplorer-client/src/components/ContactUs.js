import React,{useRef,useState,useEffect} from "react";
// import emailjs from "@emailjs/browser";
import contact from '../components/jsondata/contact.json';
import useInput from "./hooks/use-input";

const ContactUs = (props) => {

    const isNotEmpty = value => value.trim()!=='';

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


            const submitHandler=(event)=>{
                event.preventDefault();
                console.log(event.target.value);
            
            resetNameInput();
            resetEmailInput();
            resetContactInput();
            }

            const nameInputclasses= nameInputHasError ? "form-control invalid":"form-control";
            const emailInputclasses = emailInputHasError ? "form-control invalid":"form-control";
            const contactInputclasses = contactInputHasError ? "form-control invalid":"form-control";
	// const form = useRef();

	// const changeHandler = (e) => {
	
	//   }

	// const sendEmail = (e) => {
	//   e.preventDefault();
	

	//   emailjs
	// 	.sendForm(
	// 	  "service_i1dy8vf",
	// 	  "template_sqq2pfh",
	// 	  form.current,
	// 	  "w5ZpquwhgLaToZQFo"
	// 	)
	// 	.then(
	// 	  (result) => {
	// 		console.log(result.text);
	// 		console.log("message sent");
	// 	  },
	// 	  (error) => {
	// 		console.log(error.text);
	// 	  }
	// 	);
	

	
   
    return (
   <div>
          
  <div id="fh5co-contact">
		<div className="container">
			<div className="row">
				<div className="col-md-5 col-md-push-1 animate-box">
        <h3>Contact Information</h3>

          {contact.map(contact=>{
            return(
              <div className="fh5co-contact-info">
					
						<h4>{contact.title}</h4>
						<ul>
							<li className="address">{contact.address}</li>
							<li className="phone">{contact.phoneno}</li>
							<li className="email"><a href="mailto:info@intelora.co.in" target="_blank">{contact.email}</a></li>
              
            </ul>
					</div>
            )
          })
        }
	 </div>
				<div className="col-md-6 animate-box">
				    <section>     
        		    <div className="row" id="serverResponsee">
        		    </div>
					<h3>Write Us</h3>
					<form action="#fh5co-contact" id="enqform" onSubmit={submitHandler}>
						<div className="row form-group">
							<div className="col-md-12">
								<label for="fullname">Full Name</label>
								<input 
								type="text" 
								id="enq_fname" 
								className="form-control" 
								placeholder="Your Full Name"  
								name="user_name"
                                onChange={nameChangeHandler} 
                                onBlur={inputNameBlurHandler}
                                value={enteredName}
								/>
							</div>
						</div>
                        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
						

						{/* <div className="row form-group">
							<div className="col-md-12">
							<label for="companyname">Company Name</label>
								<input 
								type="text" 
								id="enq_organization" 
								className="form-control" 
								placeholder="Company/Organization Name" 
								name="user_companyname"
								/>
							</div>
						</div> */}
						
						<div className="row form-group">
							<div className="col-md-12">
							<label for="email">Email</label>
								<input
								 type="text" 
								id="enq_email" 
								className="form-control" 
								placeholder="Your email address" 
								name="user_email"
                                onChange={emailChangeHandler} 
                                onBlur={inputEmailBlurHandler}
                                value={enteredEmail}
								/>	
							</div>
						</div>
                        {emailInputHasError && <p className="error-text">Email Id must not be empty</p>}
						

						{/* <div className="row form-group">
							<div className="col-md-12">
				<label for="subject">Subject</label>
								<input 
								type="text" 
								id="enq_subject" 
								className="form-control" 
								placeholder="Your subject of this message"  
								name="subject"
								/>
							</div>
						</div> */}
						

						{/* <div className="row form-group">
							<div className="col-md-12">
							 <label for="message">Message</label>
								<textarea 
								id="enq_message" 
								cols="30" 
								rows="10" 
								className="form-control" 
								placeholder="Say something about us" 
								name="message">
								</textarea>
								</div>
						   </div> */}
                         
						<div className="row form-group">
							<div className="col-md-6">
								<label for="lname">ContactNo.</label>
								<input 
								type="text" 
								id="enq_contactNumber" 
								className="form-control" 
								placeholder="Contact Number" 
								name="user_contactno"
                                onChange={contactChangeHandler} 
                                onBlur={inputContactBlurHandler}
                                value={enteredContact}
								/>
							</div>
                            {contactInputHasError && <p className="error-text">Contact must not be empty</p>}
                            

							{/* <div className="col-md-6">
								 <label for="lname">Address</label> 
								<input 
								type="text" 
								id="enq_location" 
								className="form-control" 
								placeholder="Location like: City, Country" 
								name="user_address"
								/>
								</div> */}
                                </div>
								
						<div className="form-group">
							<button 
							type="submit" 
							className="btn btn-primary">Send Message</button>
						</div>
					</form>
					</section>
				</div>
			</div>
			
		</div>
    </div>
    </div>

	
    
    );
  };
  
  export default ContactUs;