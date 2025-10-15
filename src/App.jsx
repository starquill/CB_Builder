import React,{useState} from "react";

function GeneralInfo(){
  const [name,setName]=useState("john Doe");
  function handleNameChange(e){
    setName(e.target.value);
  }
  return(
  <div>
  <h2>General Info</h2>
  <p>Name:{name}</p>
  <input type="text"
      value={name}
      onChange={handleNameChange} />
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