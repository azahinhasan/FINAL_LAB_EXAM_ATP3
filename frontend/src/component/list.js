
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect,useHistory} from 'react-router-dom';

const  List=()=> {

  const [Data,setData]=useState([]);
   const history = useHistory();
   const [Name,setName]=useState('');

  useEffect(() => {
      loadData();

   }, []);

   const loadData=()=>{
      axios.get('http://127.0.0.1:8000/info')
      .then(r=>{
      console.log(r.data);
      setData(r.data);
      })
      .catch(e=>{
      console.log(e);
      })
   }


   const deleteData=(id)=>{

      if (window.confirm('DELETE DATA?')) {
         axios.delete('http://127.0.0.1:8000/info/'+id)
         .then(r=>{
            console.log(r.data);
            loadData();
         })
         .catch(e=>{
         console.log(e);
         })
      } else {
      }
   }


   const serachData=()=>{
      axios.get('http://127.0.0.1:8000/info/search/'+Name)
      .then(r=>{
         console.log(r.data);
         setData(r.data);
      })
      .catch(e=>{
         console.log(e);
      })
   }


  return (
    <div className="App">
      
      <h2>LIST OF USERS</h2>


      <input onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <br/>
      <button onClick={()=>serachData()}>SEARCH</button>
      <br/>
      <br/>
      <button onClick={()=>history.push('/add')}>ADD</button>
 

      {
         Data==''?
         <h3>NO DATA FOUND!</h3>
         :
         <table border="1">

            <tr>
               <th>Name</th>
               <th>Phone</th>
               <th>Username</th>
               <th>Action</th>
            </tr>
            {
               Data.map(data=>{
                  return(
                  <tr>
                     <td>{data.Name}</td>
                     <td>{data.contact_no}</td>
                     <td>{data.username}</td>
                     <td><button onClick={()=>history.push('/edit/'+data.id)}>EDIT</button>
                     <button onClick={()=>deleteData(data.id)}>DELETE</button></td>
                  </tr>
                  )
               })
            }
         
         </table>
      }
      
    </div>
  );


}

export default List;
