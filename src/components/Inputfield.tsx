import React from 'react'

interface Props {
  inp :string;
  setInp:React.Dispatch<React.SetStateAction<string>>

}

const Inputfield :React.FC<Props> = ({inp,setInp}) => {
  return (
    <div>
        <input type="text" placeholder='Enter Your Todo' value={inp} onChange={(event) => setInp(event.target.value)}/>
 
    </div>
  )
}

export default Inputfield