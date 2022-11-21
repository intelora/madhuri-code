import React,{useState} from 'react';
//import axios from 'axios';


const VideoUpload=()=> {

   const[videoName,setVideoName]=useState("");
   const[description,setDescription]=useState("");
   const[file,setFile]=useState("");

   
   const submitHandler=(e)=>{
    e.preventDefault();

//     const item={username:userName,password:password}
//     console.log(item);

// axios.post('http://127.0.0.1:5000/login',item)
//     .then((response)=>{
//     console.log("response",response.data);
//     console.log("success");
//   });
};
 

  return(
    <>
    <form onSubmit={submitHandler}>
        <div>
          <h1>VideoUpload</h1>
        </div>

        <div>
          <label>Video Name</label>
          <input 
           type = "text" 
          placeholder='videoname'
          value={videoName}
          onChange={(e)=> setVideoName(e.target.value)}
          />
        </div>


         <div>
          <label>Description</label>
          <input type = "text" 
          placeholder='description'
          value={description}
          onChange={(e)=> setDescription(e.target.value)}/>
          
         </div>


         <div>
          <label>Upload Video</label>
          <input 
           type = "file" 
          placeholder='file'
          value={file}
          onChange={(e)=> setFile(e.target.value)}
          />
        </div>


         <div className="">
         <button type="submit">
            Submit
          </button>
        </div>
        
      </form>

      {/* <button onClick={()=>props.onFormSwitch('registeration')}>
            Dont have an account? Register here
          </button> */}
      </>
 );

};
export default VideoUpload;