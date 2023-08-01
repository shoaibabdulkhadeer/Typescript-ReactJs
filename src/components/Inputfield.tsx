import React from 'react'

interface Props {
  inp :string;
  setInp:React.Dispatch<React.SetStateAction<string>>;
  handleChange:any;
  setTodos:any;
}

const Inputfield :React.FC<Props> = ({inp,setInp,handleChange,setTodos}) => {
 
  const deleteAll = () => {
    setTodos([]);
    // alert("Deleted all Todos")
  }
 
  return (
    <div>
      <input className='inp' type="text" placeholder='Enter Your Todo' value={inp} onChange={(event) => setInp(event.target.value)}/>
      <button onClick={handleChange} className='inpbtn'>😎 Add Todo</button>
      <button onClick={deleteAll} className='inpbtn' style={{margin:"0px 5px"}}>🗑️ Delete All</button>
    </div>
  )
}

export default Inputfield