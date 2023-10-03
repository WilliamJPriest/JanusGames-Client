import 'react'
import { Link } from "react-router-dom";

export default function error() {
  return (
    <>
        <div className='flex justify-center text-center'>
            <h2> 404 Error</h2>
            <Link to="/" >Home</Link>
        </div>
    </>
  )
}
