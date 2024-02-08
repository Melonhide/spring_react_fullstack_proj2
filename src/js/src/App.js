import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client'

class App extends Component {

  state = {
    students:[]
  }

  fetchStudents = ()=>{
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
    }));
  }

  render(){  
    return <h1>Hello World Spring Boot & React</h1>
  }
}

export default App;
