import React from 'react'
import amazon from '/amazon.png'
import portfolio from '/webportfolio2023.png'
import portfolio2 from '/portfolio2.png'

import ProjectCard from './ProjectCard.jsx'


export default function Projects() {

    const listProjects = [
        {
            image: amazon,
            title: 'Amazon Clone App',
            description: 'A full-stack e-commerce web application inspired by Amazon. Features include product listings, category-based search, detailed product pages, authentication, cart management, and order tracking. Built with React, Next.js, Firebase, and Tailwind CSS, the app delivers a responsive and user-friendly shopping experience.',
            link: 'https://github.com/jfgarcia0911/amazon-clone'
        },
        {
            image: portfolio,
            title: 'Web Portfolio 2023',
            description: 'A personal portfolio website built with pure HTML and CSS. It showcases your projects, skills, and experience with a clean and responsive design.',
            link: 'https://jfgarcia0911.github.io/webportfolio2023/'
        },
        {
            image: portfolio2,
            title: 'Web Portfolio 2025',
            description: 'A modern, responsive portfolio website built with React 19 and Vite, featuring sleek animations and optimized performance. This portfolio showcases my work and skills with a clean, professional design.',
            link: 'https://jfgarcia0911.github.io/jfportfolio-2/'
        },{
            image: amazon,
            title: 'Project One',
            description: 'This is a brief description of Project One.',
            link: 'https://example.com/project1'
        },
        {
            image: portfolio,
            title: 'Project Two',
            description: 'This is a brief description of Project Two.',
            link: 'https://example.com/project2'
        },
        {
            image: portfolio2,
            title: 'Project Three',
            description: 'This is a brief description of Project Three.',
            link: 'https://example.com/project3'
        }
    ];
  return (
    <main id='projects' className='p-4 '>
        <section  data-aos='fade-up' data-aos-delay='300'>
            <header className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                    My <span className='text-blue-400'>Projects</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    Here are some of the projects I’ve built, showcasing my skills in frontend development, responsive design, and modern web technologies.

                </p>
            </header>
        </section>
        <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-4 justify-center mt-6 '>
            {listProjects.map((project,index) =>
           (
                <ProjectCard 
                    key={index} 
                    value={index}
                    image={project.image} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                />
            ))}
        </section>

    </main>
  )
}
