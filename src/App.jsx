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
		<main className='bg-gray-950'>
			<Hero />
      dawdw
		</main>
  );
}

export default App
