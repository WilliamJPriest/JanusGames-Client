import {useState} from 'react'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

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
          method: 'GET',
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

        <ToastContainer/>
        <div className="justify-center text-center flex-col h-[80] p-10">       
            <h3 className="bold text-2xl p-10">Hate to see you go</h3>
            <div className='pb-10'>
              <input onChange={handleChange} value={unSubEmail} placeholder="email"/>
              <button className="ml-2 px-2 border-2 border-black rounded" onClick={unSubBTN}>Unsubscribe</button>
            </div>
          <Link className="text-blue-500 py-10" to="/" > Return Home</Link>
        </div>
        
      </div>
    </>
  )
}
