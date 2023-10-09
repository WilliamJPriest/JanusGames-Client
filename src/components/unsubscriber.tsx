import {useState} from 'react'

export default function unsubscriber() {
  const [unSubEmail,setUnSubEmail] = useState("")

  const handleChange = (e:any) =>{
    setUnSubEmail( e.target.value)
  }

  const unSubBTN = () =>{
    console.log(unSubEmail)
  }

  return (
    <>
      <div>
        <h3>Unsubscribe</h3>
        <div>
            <input onChange={handleChange} value={unSubEmail} placeholder="email"/>
            <button onClick={unSubBTN}>Unsubscribe</button>
        </div>

      </div>
    </>
  )
}
