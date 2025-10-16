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
  const [educationId,setEducationId]=useState(null);
  function handleUpdate(id,e){
    const {name,value}=e.target;
    const updateEducations=educations.map(edu=>
    {
      if(educationId===id)
        return {...edu,[name]:value}
    return edu;
    }
    )
    setEducations(updateEducations);
  }
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
  function handleDelete(id){
    const updateEducations=educations.filter(education=>education.id!=id)
    setEducations(updateEducations);
  }
  return (<div>
    <h2>Education</h2>
    {educations.map(education => (
    <div className="education_item" key={education.id}>
      {educationId===education.id?(
        <form className="edit_form">
          <input type="text"
          name="school"
          value={education.school}
          onChange={e=>handleUpdate(education.id,e)}
          />
          <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={e => handleUpdate(education.id, e)}
              />
              <input
                type="text"
                name="date"
                value={education.date}
                onChange={e => handleUpdate(education.id, e)}
              />
              <button type="button" onClick={()=>setEducationId(null)}>Save</button>
        </form>
      ):(
      <>
        <div className="item_details">
        <p><strong>School:</strong>{education.school}</p>
        <p><strong>Degree:</strong> {education.degree}</p>
        <p><strong>Date:</strong> {education.date}</p>
        </div>
      <div className="item_buttons">
        <button onClick={()=>setEducationId(education.id)}>Edit</button>
        <button onClick={()=> handleDelete(education.id)} className="delete_btn">
          Delete
        </button>
        </div>
      </>
      )}
    </div>
    ))}
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