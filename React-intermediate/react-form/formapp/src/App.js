// //import logo from './logo.svg';
// import './App.css';
// import {useState} from "react";
// function App() {
//   // const[firstname,setFirstName]=useState("")
//   // const[lastname,setlastName]=useState("")
//   // function changefirstHandler(event){
//   //   // console.log("first")
//   //   // console.log(event.target.value)/
//   //   setFirstName(event.target.value);
//   // }
//   // function changelastHandler(event){
//   //   // console.log("last")
//   //   // console.log(event.target.value)/
//   //   setlastName(event.target.value);
//   // }

//   const[formData,setFormData]=useState({firstName:"" , lastName:"",email:"" , comments:""});

//   function changeHandler(event){
//     setFormData(prevFormData=>{
//       return{
//         ...prevFormData,
//         [event.target.name]:event.target.value
//       }
//     })
//   }

//   return (
//     <div className="App">
//       <form action="">
//         <input type="text" name="first name" id="" placeholder="firstname" onChange={event=>changeHandler(event)} value={formData.firstName}/>
//         <br />
//         <br />
//         <input type="text" name="last name" id="" placeholder="lastname" onChange={event=>changeHandler(event)} value={formData.lastName}/>

//         <br />
//         <br />
//         <input type="email" name="email" id="" onChange={changeHandler} placeholder='email' value={formData.email}/>

//         <br />
//         <br />
//         <textarea name="" id="" cols="30" rows="10" placeholder='enter your comments' name="comments" value={formData.comments} onChange={changeHandler}></textarea>

//         <br />
//         <br />

//       </form>
//     </div>
//   );
// }

// export default App;


import React from "react";
import {useState} from "react";