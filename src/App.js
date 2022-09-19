import React from 'react';
import './App.css';
import {useState} from 'react'
function App() {
  let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;
console.log(fullDate);
  
  let [toDos,setTodos]=useState([])
  let [toDo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>{fullDate}</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{if(toDo!==''){setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);

              setTodos(toDos.map((obj2)=>{
                if(obj2.id===obj.id){
                 obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setTodos(toDos.filter((obj3)=>{
                if(obj3.id!==obj.id){
                  return obj3
                }
                return null
              }))
            }} className="fas fa-times"></i>
          </div>
          
        </div>
        
          )})
        
         }
      </div>
    </div>
  );
}

export default App;
