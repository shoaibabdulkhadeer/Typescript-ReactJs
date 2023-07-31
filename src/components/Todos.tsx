import React, { useState } from 'react'
import "../App.css"

interface Itodo{
  task:string;
  id:number;
  isEdit:boolean;
  done:boolean;
}


interface Props {
    inp :string;
    setInp:React.Dispatch<React.SetStateAction<string>>
    todos:any[];
    setTodos:React.Dispatch<React.SetStateAction<Itodo[]>>
  }
  
const Todos:React.FC<Props> = ({todos,setTodos}) => {
 
  const [newinp,setNewinp] = useState<string>("")

  const del = (id:number) => {
     setTodos(todos.filter((x) => x.id !== id))
  }

  const update = (id:number) => {
     setTodos(todos.map((x) => x.id === id? {...x,isEdit:!x.isEdit} : x))
 
 }

 const finalupdate = (id:number) => {
   setTodos(todos.map((x) => x.id === id? {...x,task:newinp,isEdit:!x.isEdit} : x))
   setNewinp("")
 }

 const tick = (id:number) => {
     setTodos(todos.map((x) => x.id === id? {...x,done:!x.done} : x))
 }
  return (
    <div> {todos.length > 0 ? <div className='todos'>    
    {todos.map((x,index) => {
          
          return (
              <div id={x.id} className='listDiv' style={{display:"flex",alignItems:"center",width:"300px",justifyContent:"space-between"}}>
                     
                       {x.isEdit ? (<> <input placeholder="" value={newinp} onChange={(e) => setNewinp(e.target.value)}/> <button className='finalbtn' onClick={() => finalupdate(x.id)}>👍</button> </>)  
                       : (  x.done? <s>{x.task} </s> :  <li className='listItem'>{x.task}</li>)}
                       <div className="iconsrow">
                       <p className='del'  onClick={()=> del(x.id)}>❌</p>
                       <p className='update' onClick={() => update(x.id)}>✒️</p>
                       <p onClick={() => tick(x.id)} className='tick'>✅</p>
                     
                       </div>
                     
              </div> 
          )
    })}
      </div>: <h4 style={{margin:"20px 0px"}}>📝Your Todo-List is Empty❌</h4>}
      
    </div>
  )
}

export default Todos 