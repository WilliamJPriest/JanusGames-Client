import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function hero() {
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
        <section className="relative">
            <article className="z-10">
              <img  className="w-full" src="hellofeelow.png" alt="placeholder" />
                
            </article>
            <ToastContainer/>
            <article className="lg:absolute lg:left-[25%] lg:bottom-[24%] lg:bg-white lg:bg-opacity-50 py-2  border-2 rounded gap-2">
                <form>
                    <label className="p-2" htmlFor="name"> Name</label>
                    <input type="text" value={name} onChange={ e => handleNameChange(e)} id="name" placeholder=' Name'/>
                    <label className="p-2" htmlFor="email"> Email</label>
                    <input type="text"  value={email} onChange={ e => handleEmailChange(e)} id="email" placeholder=' Email'/>
                    <button className="p-2 m-2 border-2 rounded" onClick={subBTN}> Subscribe</button>
                </form>
            </article>
        </section>
    </>
  )
}
