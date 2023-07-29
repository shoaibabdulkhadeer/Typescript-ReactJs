import { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Todos from './components/Todos';

function App() {

 const [inp,setInp] = useState<string>("")
 const [todos,setTodos] = useState<string[]>([])

 const handleChange = () => {
  setTodos([...todos,inp]);
  setInp("")
 }

  return (
    <div className="App"> 
      <Inputfield inp={inp} setInp={setInp} />
      <Todos  inp={inp} setInp={setInp} todos={todos} setTodos={setTodos} handleChange={handleChange}/>
      
    </div>
  );
}

export default App;

