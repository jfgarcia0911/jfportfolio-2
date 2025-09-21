import { useState } from "react";

export default function ProjectCard({ image, title, description, link }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group flex flex-col self-start w-100">
            <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

            <div className="relative z-10 flex flex-col h-full">
                <figure className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 h-[202px] flex items-center justify-center bg-blue-800 bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                    >
                        <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer">
                            Live Preview
                        </button>
                    </a>
                </figure>

                <div className="px-6 py-4 flex flex-col flex-grow">
                    <header>
                        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                    </header>

                    <p
                        className={`text-gray-200 ${expanded ? "" : "line-clamp-2"} `}
                    >
                        {description}
                    </p>

                    <span
                        onClick={() => setExpanded(!expanded)}
                        className="text-blue-500 cursor-pointer mt-1"
                    >
                        {expanded ? "See less" : "See more"}
                    </span>
                </div>
            </div>
        </article>
    );
}
