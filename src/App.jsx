import React from "react"
import { Navbar } from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Project"
import Footer from "./sections/Footer"
import Contact from "./sections/Contact"
import WorkExperience from "./sections/Experience"
const App = () => {
  return(
    <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About/>
        <Projects />
        <Contact />
        <WorkExperience />
        <Footer />
    </main>
  )  
}
export default App