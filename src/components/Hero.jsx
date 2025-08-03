import React from 'react'
import Navbar from './Navbar'
import imghero from '/imghero.png'
import facebook from '/facebook.png'
import github from '/github.png'
import linkedin from '/linkedin.png'
import john from '/John.pdf'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center  '>
        <div  className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#3a4cc4] via-[#4561ed] to-[#61bec5] transform rotate-45 z-0 right-2 top-28 rounded-3xl animated-gradient'></div>
        <Navbar/> 

        <main id="home" className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
          <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos="fade-up" data-aos-delays="500">
            <div className='absolute -z-10 w-60 h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'>
            </div>
            <header>
              <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                John Garcia
              </h1>
              <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#0a176c] md:text-[#6662d2] mb-2'>
                Frontend Developer
              </h2>
            </header>
            <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
              Lorem ipsum fawknfo w afkwn ffawogiwhgiwgn awfnwaighiawks fnawighwi
              Lorem ipsum fawknfo w afkwn ffawogiwhgiwgn awfnwaighiawks fnawighwi
            </p>

            <div className='flex items-center space-x-4 mb-6'>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" className='w-11 h-11' />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="github" className='w-11 h-11' />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="github" className='w-11 h-11' />
              </a>
              
            </div>
            <a href={john} download>
              <button className='inline-flex text-white border-2 py-2 px-6 focus:outlibe-none hover:bg-[#483cf5] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                Download CV
              </button>
            </a>
          </section>
          <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0'>
            <img src={imghero} alt="Hero Image" className='h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg' />
          </figure>

        </main>
    </div>
    
  )
}
