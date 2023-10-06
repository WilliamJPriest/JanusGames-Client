import React, { Component } from "react";
import { render } from "react-dom";

interface Client {
  name: string;
  email: string;
}

export class Hero extends Component {
  static create(event: Client) {
    return {
      name: event.name,
      email: event.email,
    };
  }

  hello = Hero.create({name:"Daniela D Slinger",email:"dannyDSlinger@gmail.com"})

  render() {
    return (
      <h2>Hello {this.hello.name}</h2>
    );
  }
}

render(<Hero />, document.getElementById("root"));

// export default function hero() {
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")

//   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setName(e.target.value);
//       console.log(e.target.value);
//     };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setEmail(e.target.value);
//       console.log(e.target.value);
//     };

//     const subBTN = async (e: any) => {
//       e.preventDefault();
//       const validRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       if (email.match(validRegex)) {
//         const requestData = {
//           name: name,
//           email: email,
//         };
    
//         try {
//           const response = await fetch('http://127.0.0.1:5000/newsletter', {
//             method: 'POST',
//             body: JSON.stringify(requestData),
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
    
//           if (response.ok) {
//             const responseData = await response.json();
//             toast('Success: ' + responseData.message);
//             setEmail('');
//             setName('');
//           } else {
//             const errorData = await response.json();
//             toast('Error: ' + errorData.message);
//           }
//         } catch (error) {
//           toast('Error: ' + "try again later");
//         }
//       } else {
//         toast('Email invalid');
//       }
//     };
//   return (
//     <>
//         <section className="relative">
//             <article className="z-10">
//               <img  className="w-full h-[500px] boxShadow" src="space.jpg" alt="placeholder" />
                
//             </article>
//             <ToastContainer/>
//             <article className="lg:absolute lg:left-[35%] lg:bottom-[24%] md:bg-white lg:bg-opacity-50 bottom-[48%] flex flex-row py-2 md:border-2 border-black-2 rounded gap-2">
//                 <div className="flex flex-col md:flex-row">
//                   <form >
//                       <label className="p-2" htmlFor="name"> Name</label>
//                       <input className="w-36" type="text" value={name} onChange={ e => handleNameChange(e)} id="name" placeholder=' Name'/>
//                       <label className="p-2" htmlFor="email"> Email</label>
//                       <input className="w-36" type="text"  value={email} onChange={ e => handleEmailChange(e)} id="email" placeholder=' Email'/>
//                       <button className="p-2 m-2 border-2 rounded" onClick={subBTN}> Subscribe</button>
//                   </form>
//                 </div>
//             </article>
//         </section>
//     </>
//   )
// }
