import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function newsletter() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(e.target.value);
      };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log(e.target.value);
      };

      const subBTN = async (e: any) => {
        e.preventDefault();
        const validRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(validRegex)) {
          const requestData = {
            name: name,
            email: email,
          };
      
          try {
            const response = await fetch('http://127.0.0.1:5000/newsletter', {
              method: 'POST',
              body: JSON.stringify(requestData),
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (response.ok) {
              const responseData = await response.json();
              toast('Success: ' + responseData.message);
              setEmail('');
              setName('');
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
      <ToastContainer/>
        <section>
            <article>
                <form>
                    <label htmlFor="name"> Name</label>
                    <input type="text" value={name} onChange={ e => handleNameChange(e)} id="name" placeholder='your name'/>
                    <label htmlFor="email"> email</label>
                    <input type="text"  value={email} onChange={ e => handleEmailChange(e)} id="email" placeholder='your email'/>
                    <button onClick={subBTN}> Subscribe</button>
                </form>
            </article>
        </section>
    </>
  )
}
