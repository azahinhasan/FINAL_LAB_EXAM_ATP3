
import axios from 'axios';
import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect,useHistory} from 'react-router-dom';


const  ADD=()=> {

  const [Name,setName]=useState('');
  const [contact_no,setContact_no]=useState('');
  const [username,setUsername]=useState('');
  const history = useHistory();
  const submit=()=>{

    axios.post('http://127.0.0.1:8000/info',
      {Name,contact_no,username})
      .then(r=>{
        console.log(r.data);
        history.push('/list');
      })
      .catch(e=>{
        console.log(e);
      })
  }

return (
   <div className="App">
      <h2>ADD NEW USER</h2>
      <input onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <br/>
      <input onChange={e=>setContact_no(e.target.value)} placeholder="Phone"/>
      <br/>
      <input onChange={e=>setUsername(e.target.value)} placeholder="Username"/>
      <br/>
      <button onClick={()=>submit()}>Submit</button>



    </div>
  );


}

export default ADD;
