import React from "react";
import contact from '../../components/jsondata/sectionsjson/contact.json';

const ContactUs = () => {
   
    return (
<div>
          
  <div id="fh5co-contact">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-md-push-1 animate-box">
        <h3>Contact Information</h3>

          {contact.map(contact=>{
            return(
              <div class="fh5co-contact-info">
					
						<h4>{contact.title}</h4>
						<ul>
							<li class="address">{contact.address}</li>
							<li class="phone">{contact.phoneno}</li>
							<li class="email"><a href="mailto:info@intelora.co.in" target="_blank">{contact.email}</a></li>
              
            </ul>
					</div>
            )
          })
        }
	 </div>
				<div class="col-md-6 animate-box">
				    <section>     
        		    <div class="row" id="serverResponsee">
        		    </div>
					<h3>Write Us</h3>
					<form action="#fh5co-contact" id="enqform">
						<div class="row form-group">
							<div class="col-md-12">
								<label for="fullname">Full Name</label>
								<input type="text" id="enq_fname" class="form-control" placeholder="Your Full Name"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
							<label for="lname">Last Name</label>
								<input type="text" id="enq_organization" class="form-control" placeholder="Company/Organization Name"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
							<label for="email">Email</label>
								<input type="text" id="enq_email" class="form-control" placeholder="Your email address"/>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
				<label for="subject">Subject</label>
								<input type="text" id="enq_subject" name="enq_subject" class="form-control" placeholder="Your subject of this message"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
							 <label for="message">Message</label>
								<textarea name="message" id="enq_message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-6">
								<label for="lname">Last Name</label>
								<input type="text" id="enq_contactNumber" class="form-control" placeholder="Contact Number"/>
							</div>
							<div class="col-md-6">
								 <label for="lname">Last Name</label> 
								<input type="text" id="enq_location" class="form-control" placeholder="Location like: City, Country"/>
							</div>
						</div>
						<div class="form-group">
							<input type="button" value="Send Message" class="btn btn-primary" onclick="sendMessageToEnquiry();"/>
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