import React,{useState} from "react";

function GeneralInfo(){
  const [info,setInfo]=useState({
    name:"John doe",
    email:"johndoe@official.com",
    phone:"123-456-789",
  });
  function handleNameChange(e){
    const {value,name}=e.target;
    setInfo(prevInfo=>({
      ...prevInfo,
      [name]:value,
    }));
  }
  return(
  <div>
  <h2>General Info</h2>
  <p>Name:{name}</p>
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
     <pre>
        <code>{JSON.stringify(info, null, 2)}</code>
      </pre>
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