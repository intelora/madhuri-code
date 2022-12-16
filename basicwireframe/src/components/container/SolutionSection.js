import React from "react";
import solution from '../../components/jsondata/sectionsjson/solution.json';
import solution2 from '../../components/jsondata/sectionsjson/solution2.json';

const SolutionSection = () => {
   
    return (
  <div>
     <div id="fh5co-services" className="fh5co-bg-section">
		   <div className="container">
			   <div className="row row-eq-height">

			      { solution.map(solution=>{
					return(
					<div className="col-md-4 text-center animate-box" key={solution.id}>
					   <div className="services">
						<span style={{fontSize:"4em"}} ></span>
						
						<h3>{solution.title}</h3>
						<div dangerouslySetInnerHTML={{__html: solution.content}}/>
						<p><a href="./login.html" className="btn btn-primary btn-outline btn-sm">{solution.button} <i className="icon-arrow-right"></i><i className="icon-user"></i></a></p>
					  </div>
				 </div>
					)
				   })
				   }

     <div className="row row-eq-height">
		   {solution2.map(solution2 =>{
			return(
				<div className="col-md-6 animate-box text-center" >
				<div className="services" style={{marginTop:"2em"}}>
				
					<h3>{solution2.title}</h3>
					<p><img alt="IntelOra - Software Development Solutions"  src={solution2.image} style={{width: "100%"}}/></p>
					<p>{solution2.content}</p>
					<br/>
				 </div>
			     </div>
			)
		     })
		       }
		      </div>			
			</div>	
		</div>
   </div>
</div>

    
    );
  };
  
  export default SolutionSection;