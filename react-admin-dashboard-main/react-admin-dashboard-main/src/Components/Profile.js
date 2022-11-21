import React, { useState } from "react";


const Profile=()=>{

const[userData,setUserData]=useState([]);
    const item={username:userName,password:password,email:email}
    console.log(item);

axios.get('http://127.0.0.1:5000/register',item)
    .then((response)=>{
    console.log("response",response.data);
    console.log("success");
  });

        
return(
<div>
<table className="styled-table">
         <thead>
             <tr>
                 <th>username</th>
                 <th>email</th>
                 <th>password</th>
                 
             </tr>
         </thead>
         <tbody>
             
         {userData.map((userData, index) => (
                 <tr key={index}>
                    <td>{userData.username}</td>
                    <td>{userData.email}</td>
                    <td>{userData.password}</td>
                    
                 </tr>
                 ))}
              
            

           </tbody>
        </table>
     
</div>
);
};
export default Profile;