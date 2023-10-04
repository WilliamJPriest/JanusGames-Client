import 'react'
import { Link } from "react-router-dom";

export default function error() {
  return (
    <>
        <div className='flex justify-center text-center flex-col h-80'>
            <h2 className='text-6xl'> 404 Error</h2>
            <Link className="text-red" to="/" >Home</Link>
        </div>
    </>
  )
}
