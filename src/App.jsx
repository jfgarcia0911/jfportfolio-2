import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
    })
  },[])
  return (
		<main className='bg-gray-900'>
			<Hero />
		</main>
    
  );
}

export default App
