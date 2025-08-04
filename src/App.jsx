import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
		</main>
    
  );
}

export default App
