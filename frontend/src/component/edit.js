
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect,useHistory,useParams} from 'react-router-dom';

const  UPDATE=()=> {

  const [Data,setData]=useState([]);
   const history = useHistory();
   const {id} = useParams();

   const [msg,setmsg]=useState([]);

   const [Name,setName]=useState('');
   const [contact_no,setContact_no]=useState('');
   const [username,setUsername]=useState('');

  useEffect(() => {
   axios.get('http://127.0.0.1:8000/info/'+id)
      .then(r=>{
      console.log(r.data);
      setData(r.data);

      setName(r.data[0].Name);
      setContact_no(r.data[0].contact_no);
      setUsername(r.data[0].username);

      })
      .catch(e=>{
      console.log(e);
      })

   }, []);


   const update=()=>{
      axios.post('http://127.0.0.1:8000/info/'+id,
         {Name,contact_no,username})
         .then(r=>{
         console.log(r.data);
         setmsg('UPDATED')
         })

   }

  return (
    <div className="App">
      
      <h2>USER INFO</h2>

      <button onClick={()=>history.push('/list')}>LIST</button>


      <div>
         {msg}
      </div>
      <table border="1">

            <tr>
               <td><input value={Name} onChange={e=>setName(e.target.value)} placeholder="Name"/></td>
            </tr>
            <tr>
               <td> <input value={contact_no} onChange={e=>setContact_no(e.target.value)} placeholder="Phone"/></td>
            </tr>
            <tr>
               <td><input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username"/></td>
            </tr>
        
      </table>

      <button onClick={()=>update()}>UPDATE</button>
      
    </div>
  );


}

export default UPDATE;
