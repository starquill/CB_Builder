import React,{useState} from "react";
import './App.css';

function GeneralInfo(){
  const [info,setInfo]=useState({
    name:"John doe",
    email:"johndoe@official.com",
    phone:"123-456-789",
  });
  const [isEditing,setIsEditing]=useState(true);
  function handleNameChange(e){
    const {value,name}=e.target;
    setInfo(prevInfo=>({
      ...prevInfo,
      [name]:value,
    }));
  }
  function handleSubmit(e){
    e.preventDefault();
    setIsEditing(false);
  }
  if(!isEditing){
    return(
      <div className="display_view card-section">
        <h2>General Information</h2>
        <p>Name:{info.name}</p>
        <p>Email:{info.email}</p>
        <p>Phone:{info.phone}</p>
        <button onClick={()=>setIsEditing(true)}>Edit</button>
      </div>
    );
  }
  return(
  <div className="card-section">
  <h2>General Info</h2>
  <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input type="text"
      id="name"
      name="name"
      value={info.name}
      onChange={handleNameChange} />
    <label htmlFor="email">Email:</label>
   <input type="text"
      id="email"
      name="email"
      value={info.email}
      onChange={handleNameChange}
      />
    <label htmlFor="phone">Phone:</label>
    <input type="tel"
    id="phone"
    name="phone"
    value={info.phone}
    onChange={handleNameChange}
     />
      <button type="submit">Save</button>
      </form>
  </div>
  
  
  )
}
export default function App(){
  return(
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo/>
    </div>
  )
}