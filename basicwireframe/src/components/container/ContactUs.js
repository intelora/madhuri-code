import React,{useRef,useState,useEffect} from "react";
import emailjs from "@emailjs/browser";
import contact from '../../components/jsondata/sectionsjson/contact.json';
import './form.css';

const ContactUs = () => {

	const initialValues = { user_name: "", user_companyname:"", user_email:"", subject: "", message:"", user_contactno:"",user_address:"" };
	const [formValue, setFormValue] = useState(initialValues);
	const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit]= useState(false);
	
    const form = useRef();

	const changeHandler = (e) => {
		const {name, value}= e.target;
        setFormValue({...formValue, [name]: value});
	}

	const sendEmail = (e) => {
	  e.preventDefault();
	 setFormError(validationForm(formValue));
	 setIsSubmit(true);
    }
	 
	const validationForm = (values)=>{
        const errors= {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		
        if(!values.user_name){
            errors.user_name="Please Enter Name";
        }
		
        if(!values.user_companyname){
            errors.user_companyname="Please Enter Company Name";
        }
		
        if(!values.subject){
            errors.subject="Please Enter Subject";
        }
		
        if(!values.message){
            errors.message="Please Enter Message";
        }
		
        if(!values.user_contactno){
            errors.user_contactno="Please Enter Contactno.";
        }else if(contact.values.length!==10){
            errors.user_contactno=" Please Enter Valid Contactno.";
		}
 
        if(!values.user_email){
            errors.user_email="Please Enter Email";
        } else if(!emailPattern.test(values.user_email))
        {
            errors.user_email=" Please Enter Valid Email";
        }
        if(!values.user_address){
            errors.user_address="Please Enter Address";
        }
 
        return errors;
    }
 
    useEffect( ()=>{
		//console.log(formError);
        if(Object.keys(formError).length===0 && isSubmit)
        {
            console.log(formValue);
			emailjs
			.sendForm(
			  "service_i1dy8vf",
			  "template_sqq2pfh",
			  form.current,
			  "w5ZpquwhgLaToZQFo"
			)
			.then(
			  (result) => {
				console.log(result.text);
				console.log("message sent");
			  },
			  (error) => {
				console.log(error.text);
			  }
			);
         }
		//  setFormValue("");
    },[formError, formValue, isSubmit]);
   
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
					<form action="#fh5co-contact" id="enqform"  ref={form} onSubmit={sendEmail}>
						<div className="row form-group">
							<div className="col-md-12">
								<label for="fullname">Full Name</label>
								<input 
								type="text" 
								id="enq_fname" 
								className="form-control" 
								placeholder="Your Full Name"  
								name="user_name"
								value={formValue.user_name} 
                                onChange={changeHandler}/>
							</div>
						</div>
						<p className="error">{formError.user_name}</p>

						<div className="row form-group">
							<div className="col-md-12">
							<label for="companyname">Company Name</label>
								<input 
								type="text" 
								id="enq_organization" 
								className="form-control" 
								placeholder="Company/Organization Name" 
								name="user_companyname"
								value={formValue.user_companyname} 
                                onChange={changeHandler}/>
							</div>
						</div>
						<p className="error">{formError.user_companyname}</p>

						<div className="row form-group">
							<div className="col-md-12">
							<label for="email">Email</label>
								<input
								 type="text" 
								id="enq_email" 
								className="form-control" 
								placeholder="Your email address" 
								name="user_email"
								value={formValue.user_email} 
                                onChange={changeHandler}/>	
							</div>
						</div>
						<p className="error">{formError.user_email}</p>

						<div className="row form-group">
							<div className="col-md-12">
				             <label for="subject">Subject</label>
								<input 
								type="text" 
								id="enq_subject" 
								className="form-control" 
								placeholder="Your subject of this message"  
								name="subject"
								value={formValue.subject} 
                                onChange={changeHandler}/>
							</div>
						</div>
						<p className="error">{formError.subject}</p>

						<div className="row form-group">
							<div className="col-md-12">
							 <label for="message">Message</label>
								<textarea 
								id="enq_message" 
								cols="30" 
								rows="10" 
								className="form-control" 
								placeholder="Say something about us" 
								name="message"
								value={formValue.message} 
                                onChange={changeHandler}></textarea>
								</div>
						   </div>
                         <p className="error">{formError.message}</p>

						<div className="row form-group">
							<div className="col-md-12">
								<label for="lname">ContactNo.</label>
								<input 
								type="text" 
								id="enq_contactNumber" 
								className="form-control" 
								placeholder="Contact Number" 
								name="user_contactno"
								value={formValue.user_contactno} 
                                onChange={changeHandler}/>
							</div>
                               <p className="error">{formError.user_contactno}</p>

							<div className="col-md-12">
								 <label for="lname">Address</label> 
								<input 
								type="text" 
								id="enq_location" 
								className="form-control" 
								placeholder="Location like: City, Country" 
								name="user_address"
								value={formValue.user_address} 
                                onChange={changeHandler}/>
								</div>
								  <p className="error">{formError.user_address}</p>
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