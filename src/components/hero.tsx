import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import 'dotenv/config'

export default function hero() {
  const [client,setClient]=useState({
    name:"",
    email:""
  })

  const handleChange = (e:any) =>{
    setClient({
      ...client,
      [e.target.name] : e.target.value,
    })

  }

    const subBTN = async (e: any) => {
      e.preventDefault();
      console.log(client)
      const validRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (client.email.match(validRegex)) {
        
        try {
          const requestData = {
            'name': client.name,
            'email': client.email
          };
          
          const response = await fetch(import.meta.env.REACT_APP_ADDEMAILAWSFUNC  , {
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
            console.log(requestData.name)
            // setClient({
            //   ...client,
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
    <ToastContainer/>
        <section className="relative">
            <article className="z-10">
              <img  className="w-full h-[500px] boxShadow" src="space.jpg" alt="placeholder" />
                
            </article>
            
            <article className="lg:absolute lg:left-[30%] lg:bottom-[34%] md:bg-white lg:bg-opacity-50  flex flex-row py-2 md:border-2 border-black-2 rounded gap-2">
                <div className="flex flex-col md:flex-row">
                  <form>
                      <label className="p-2" htmlFor="name"> Name</label>
                      <input className="w-36" type="text" name="name" value={client.name} onChange={handleChange} id="name" placeholder=' Name'/>
                      <label className="p-2" htmlFor="email"> Email</label>
                      <input className="w-36" type="text" name="email" value={client.email} onChange={handleChange} id="email" placeholder=' Email'/>
                      <button className="p-2 m-2 border-2 rounded w-32" onClick={subBTN}> Subscribe</button>
                  </form>
                </div>
            </article>
        </section>
    </>
  )}
