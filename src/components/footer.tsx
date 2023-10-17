import 'react'
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <>
      <footer className='h-20 flex flex-col justify-center text-center p-10 mt-10 border-t-2 '>
        <Link className="text-blue-500" to="/" >Janus Games Studio</Link>
        <Link className="text-red-600 pt-2" to="/unsubscriber" >Unsubscribe</Link>
      </footer>
    </>
  )
}
