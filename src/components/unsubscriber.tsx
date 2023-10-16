import {useState} from 'react'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function unsubscriber() {
  const [unSubEmail,setUnSubEmail] = useState("")

  const handleChange = (e:any) =>{
    setUnSubEmail( e.target.value)
  }

  const unSubBTN = async (e: any) => {
    e.preventDefault();
    console.log(unSubEmail)
    const validRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (unSubEmail.match(validRegex)) {
      
      try {
        const requestData = {
          'email': unSubEmail
        };
        
        const response = await fetch(import.meta.env.REACT_APP_REMOVEEMAILAWSFUNC  , {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' :'*',
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          toast('Success: ' + responseData.message);
          console.log(requestData.email)
          // setClient({
          //   ...unSubEmail,
          //   name: "",
          //   email:""
          // })
          
        } else {
          const errorData = await response.json();
          toast('Error: ' + errorData.message);
        }
      } catch (error) {
        toast('Error: ' + "try again later");
      }
    } else {
      toast('Email invalid');
    }
    
  };
  return (
    <>
      <div>
        <h3>Unsubscribe</h3>
        <ToastContainer/>
        <div>
            <input onChange={handleChange} value={unSubEmail} placeholder="email"/>
            <button onClick={unSubBTN}>Unsubscribe</button>
        </div>

      </div>
    </>
  )
}
