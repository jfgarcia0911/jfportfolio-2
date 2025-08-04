import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
    })
  },[])
  return (
		<main className='bg-gray-900'>
			<Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
		</main>
    
  );
}

export default App
