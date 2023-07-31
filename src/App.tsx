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
  if(inp === "") {
    alert("please Enter Todo")
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

  return (
    <div className="App"> 
      <Inputfield inp={inp} setInp={setInp} handleChange={handleChange}/>
      <Todos  inp={inp} setInp={setInp} todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;

