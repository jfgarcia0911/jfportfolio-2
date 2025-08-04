import React from 'react'
import angular from '/angular.png'
import bootstrap from '/bootstrap.png'
import css3 from '/css3.png'
import html from '/html.png'
import javascript from '/javascript.png'
import mongodb from '/mongodb.png'
import icon_react from '/icon_react.png'
import tailwindcss from '/tailwindcss.png'
import vue from '/vue.png'
import imghero from '/imghero.png'


const skillsData = [
    {id:1, image:angular, title:'Angular ', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:2, image:bootstrap, title:'Bootstrap', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:3, image:css3, title:'CSS3', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:4, image:html, title:'HTML', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:5, image:javascript, title:'Javascript', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:6, image:mongodb, title:'Mongo DB', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:7, image:icon_react, title:'React js', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:8, image:tailwindcss, title:'Tailwindcss', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'},
    {id:9, image:vue, title:'Vue js', description:'Lorem ipsum dolor sit amet, cinsectetur aduoicing eli. Ipsam, beatae?'}
];



const SkillBox=({image,title,description})=>(
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    </article>
);  

export default function Skills() {

  return (
    <section id='skills' className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#483cf5] rounded-full blur-3xl opacity-50 top-10  left-1/2 transform -translate-x-1/2'>
        </div>
        <img src={imghero} alt="left picture" className='absolute z-10 left-2 top-10 sm:left-16 sm:top-10 transform -rotate-12 w-24 h-auto sm:w-38 opacity-70'/>
        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    My expertise <br/> and <span className='text-blue-400'>Skills</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    Lorem ipsume dolor sit amet consectetur, adipisicing elit. Beatae culpa perspiciatics atque placeat tempore qua eligemdi quasi error!
                </p>
            </header>
            <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
                {skillsData.map((skill)=>(
                    <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description}/>
                ))}
            </section>
        </div>
        <img src={imghero} alt="Right picture" className='absolute z-10 right-2 top-10 sm:right-16 sm:top-10 transform rotate-12 w-24 h-auto sm:w-38 opacity-70' />

    </section>
  )
}
