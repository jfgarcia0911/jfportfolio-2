import React from "react";
import img_about from "/img_about.png";
import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 -z-10 "
		>
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
				<figure
					data-aos="fade-right"
					data-aos-delay="500"
					className="flex flex-wrap justify-center gap-4 relative"
				>
					<div className="animated-complex-gradient h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]   from-[#3a4cc4] via-[#5a70dd] to-[#61bec5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
					<img
						src={img_about1}
						alt="about picture 1"
						className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover bg-[#483cf5]"
					/>
					<img
						src={img_about2}
						alt="about picture 2"
						className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:h-96 md:w-72 rounded-lg "
					/>
					<img
						src={img_about}
						alt="about picture"
						className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover"
					/>
				</figure>

				<article
					data-aos="fade-left"
					data-aos-delay="500"
					className="text-center lg:text-left relative"
				>
					<div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
					<header>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
							About Me
						</h1>
					</header>
					<p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
						I’m John Garcia, a frontend developer passionate about
						creating modern, responsive, and scalable web
						applications. My journey started with training in React,
						Angular, and full-stack development, leading me to work
						with Accenture where I contributed to building and
						improving enterprise applications. I enjoy turning ideas
						into reality through code. Whether it’s developing user
						interfaces, ensuring smooth functionality, or working
						with databases. I’m constantly learning new technologies
						and sharpening my skills with the goal of becoming a
						well-rounded full-stack developer.
					</p>
					<footer>
						<button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#483cf5] hover:shadow-[0_0_40px_rgba(128,0128,0.7)] rounded-full text-sm sm:text-lg">
							
                            <a href="#projects">Learn More</a>
						</button>
					</footer>
				</article>
			</div>
		</section>
	);
}
