import React from 'react'
import "../App.css"

interface Props {
    inp :string;
    setInp:React.Dispatch<React.SetStateAction<string>>
    todos:any[];
    setTodos:React.Dispatch<React.SetStateAction<string[]>>
  }
  
const Todos:React.FC<Props> = ({inp,setInp,todos,setTodos}) => {
  const deletetodo = (idx:number) => {
          setTodos(todos.filter((todo:any,index:number) => index!== idx))
  }



  return (
    <div className='todos'>    
      {todos.map((x,index) => {
       
            return (
                <div className='listDiv' style={{display:"flex",alignItems:"center",width:"200px",justifyContent:"space-between"}}>
                         <li className='listItem'>{x}</li>
                         <div className="iconsrow">
                         <p className='del' onClick={() => deletetodo(index) } >❌</p>
                         <p className='update'>✒️</p>
                         </div>
                       
                </div> 
            )
      })}
        </div>
  )
}

export default Todos 