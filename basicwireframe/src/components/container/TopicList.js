import React from "react";
import topiclist from '../../components/jsondata/sectionsjson/topiclist.json';

const TopicList = (props) => {


  	const topicHandler=(topicid)=>{
    console.log('clicked topic='+topicid);
      props.setSelectedtopicid(topicid);
    };
 
 
 return (
<div>
  <div id="fh5co-gallery">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box" >
				   
					<h2>{topiclist.title}</h2>
					<h3 className="activeColor">{topiclist.subheading}</h3>
				</div>
			</div>
		</div>


    <div className="container-fluid">
			<div className="row row-bottom-padded-md">
				<div className="col-md-12">
					<div className="modal fade" id="model01">
						<div className="modal-dialog">
							<div className="modal-content"></div>
						</div>
					</div>
					<div className="modal fade" id="model02">
						<div className="modal-dialog">
							<div className="modal-content"></div>
						</div>
					</div>
					<ul id="fh5co-portfolio-list">
						{topiclist.contentData.map(topiclist=>{
							return(
								<div  key={topiclist.id}>
                             <li onClick={()=>topicHandler(topiclist.topicid)} className="one-third animate-box" data-animate-effect="fadeIn"  style ={{ backgroundImage: `url(${topiclist.image})`}}>
							 
							 <div className="case-studies-summary" >
								 <h2 style={{backgroundcolor:"#379637"}} >{topiclist.title}</h2>
							 </div>
					    </li>
						</div>
							)
							})
							}
					 </ul>			
		     </div> 
		  </div>
		</div>
	</div>
 </div>

        
    
    );
  };
  
  export default TopicList;