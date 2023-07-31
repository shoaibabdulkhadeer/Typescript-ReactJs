import React from 'react'

interface Props {
  inp :string;
  setInp:React.Dispatch<React.SetStateAction<string>>;
  handleChange:any
}

const Inputfield :React.FC<Props> = ({inp,setInp,handleChange}) => {
  return (
    <div>

        <input className='inp' type="text" placeholder='Enter Your Todo' value={inp} onChange={(event) => setInp(event.target.value)}/>
      <button onClick={handleChange} className='inpbtn'>Add Todo</button>
    </div>
  )
}

export default Inputfield