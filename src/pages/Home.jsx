import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
// import ProjectCard from '../components/ProjectCard';
import Work from '../components/Work';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const Home = () =>{
    return(
        <div>
            {/* <h1>Home page</h1> */}
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            {/* <ProjectCard/> */}
            <Work/>
            <Contact/>
            {/* <footer/> */}
        </div>
    )
}
export default Home;
