import 'react'
import Nav from "../components/nav"
import Hero from "../components/hero"
import Current from "../components/currentReleases"
import Footer from "../components/footer"
import Newsletter from './newsletter'

export default function home() {
  return (
    <>
        <Nav/>
        <div>
            <Hero/>
            <Newsletter/>
        </div>

        <Current/>
        <Footer/>
    </>
  )
}
