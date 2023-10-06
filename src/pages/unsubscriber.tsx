import 'react'
import Nav from "../components/nav"
import {Hero} from "../components/hero"
import Unsubscriber from "../components/unsubscriber"
import Footer from "../components/footer"

export default function unsubscriber() {
  return (
    <>
        <Nav/>
        <Hero/>
        <Unsubscriber/>
        <Footer/>
    </>
  )
}
