import { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Todos from './components/Todos';

function App() {

 const [inp,setInp] = useState<string>("")
 const [todos,setTodos] = useState<string[]>([])

 const handleChange = () => {
  if(inp === "") {
    alert("please Enter Todo")
  }else{
    setTodos([...todos,inp]);
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

