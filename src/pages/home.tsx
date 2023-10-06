import 'react'
import Nav from "../components/nav"
import {Hero} from "../components/hero"
import Current from "../components/currentReleases"
import Footer from "../components/footer"

export default function home() {
  return (
    <>
        <Nav/>
        <Hero/>
        <Current/>
        <Footer/>
    </>
  )
}
