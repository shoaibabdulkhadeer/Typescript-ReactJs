import { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Todos from './components/Todos';

function App() {

  interface Itodo{
    task:string;
    id:number;
    isEdit:boolean;
    done:boolean;
  }

 const [inp,setInp] = useState<string>("")
 const [todos,setTodos] = useState<Itodo[]>([])

 
 const handleChange = () => {
  if(inp.trim() === "") {
    alert("😡😡 Please Enter Todo")
  }else{
    const newarr = {
      task:inp,
      id:Date.now(),
      isEdit:false,
      done:false
     }
    setTodos([...todos,newarr]);
    setInp("")
  }
 }

 const time = (new Date().toLocaleTimeString());
  return (
    
    <div className="App"> 
     <p className='time'>{time}</p>
      <Inputfield inp={inp} setInp={setInp} handleChange={handleChange} setTodos={setTodos}/>
      <Todos inp={inp} setInp={setInp} todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;

