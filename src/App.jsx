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

function Education(){
  const [educations,setEducations]=useState([
    {
      id:1,
      school:'University of knowledge',
      degree:'B.Tech',
      date:'2022-2026'
    },
    {
      id: 2,
      school: 'Institute of Learning',
      degree: 'M.S. in Software Engineering',
      date: '2026 - 2028',
    },
  ]);
  const [newEducation,setNewEdcation]=useState({
    school:'',
    degree:'',
    date:'',
  });
  function handleChange(e){
    const {name,value}=e.target;
    setNewEdcation(prevEducation=>({
      ...prevEducation,
      [name]:value,
    }));
  }
  function handleAdd(e){
    e.preventDefault();
    setEducations([
      ...educations,
      {...newEducation,id:crypto.randomUUID()},
    ]);
    setNewEdcation({school:'',degree:'',date:''});
  }
  return (<div>
    <h2>Education</h2>
    {educations.map(education => (
    <div className="education_item" key={education.id}>
      <p><strong>School:</strong>{education.school}</p>
      <p><strong>Degree:</strong> {education.degree}</p>
      <p><strong>Date:</strong> {education.date}</p>
    </div>))}
    <hr />
    <form onSubmit={handleAdd}>
      <label htmlFor="school">School:</label>
      <input type="text"
      id="school"
      name="school"
      value={newEducation.school}
      onChange={handleChange}
      />
      <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={newEducation.degree}
          onChange={handleChange}
        />
      <label htmlFor="date">Date:</label>
      <input type="text"
      id="date"
      name="date"
      value={newEducation.date}
      onChange={handleChange}
      />
      <button type="submit">Add Education</button>
    </form>
  </div>);
}
export default function App(){
  return(
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo/>
      <Education/>
    </div>
  )
}