
import axios from 'axios';
import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect,useHistory} from 'react-router-dom';


const  LOGIN=()=> {

  const [Name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [username,setUsername]=useState('');
  const history = useHistory();
  const [msg,setmsg]=useState([]);

  const submit=()=>{
    axios.post('http://127.0.0.1:8000/login',
      {password,username})
      .then(r=>{
         console.log(r.data);
         history.push('/list');

      if(r.data=="OK"){
         
         localStorage.setItem('login',true);
         window.location.reload();

        }
        
      })
      .catch(e=>{
        console.log(e);
      })
  }

return (
   <div className="App">
      <h2>ADD NEW USER</h2>
      <input onChange={e=>setUsername(e.target.value)} placeholder="USERNAME"/>
      <br/>
      <input onChange={e=>setPassword(e.target.value)} placeholder="PASSWORD"/>
      <br/>
      <button onClick={()=>submit()}>LOGIN</button>



    </div>
  );


}

export default LOGIN;
