
import './App.css';
import axios from 'axios';
import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

import List from './component/list';
import Add from './component/reg';
import Edit from './component/edit';
import Login from './component/login';


const  App=()=> {


  const logout=()=>{
    localStorage.setItem('login',false);
    window.location.reload();
  }

  return (
    <div className="App">



      {localStorage.getItem('login')=='true'?
      
      <Switch>
          <Route path="/list" component={List}/>
          <Route path="/add" component={Add}/>
          <Route path="/edit/:id" component={Edit}/>
          <Redirect to="/list"/>
      </Switch>
      :
    <Switch>
          <Route path="/list" component={Login}/>
          <Redirect to="/login"/>
      </Switch>
  }

    <hr/>
    {localStorage.getItem('login')=='true'?
    <button onClick={()=>{logout()}}>LOGOUT</button>
    :null}

    </div>
  );


}

export default App;
