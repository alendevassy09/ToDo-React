// import logo from './logo.svg';
import './App.css';
import Counter from './components/Count';
import {useState}  from 'react';
import Header from './components/header'
function App() {
let [count,setCount]=useState(0)

const addCount=()=>{
setCount(count+1)
}
  let data='alen devassy'
  return (
    <div>
      <button onClick={addCount}>click</button>
      <Header data={data}/>
      <Counter title='count' count={count}/>
    </div>

  );
}

export default App;
