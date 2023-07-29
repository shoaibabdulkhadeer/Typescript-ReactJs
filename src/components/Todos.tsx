import React from 'react'

interface Props {
    inp :string;
    setInp:React.Dispatch<React.SetStateAction<string>>
    todos:any[];
    setTodos:React.Dispatch<React.SetStateAction<string[]>>
    handleChange:any
  }
  

const Todos:React.FC<Props> = ({inp,setInp,todos,setTodos,handleChange}) => {
  return (
    <div>    
           <button onClick={handleChange}>Add Todo</button>

      {todos.map((x) => {
            return (
                <div style={{display:"flex",alignItems:"center",width:"100px",justifyContent:"space-between"}}>
                         <li>{x}</li>
                         <p>X</p>
                </div>
                 
                
            )
      })}
        </div>
  )
}

export default Todos