import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project_1 from "../../public/project/project-1.png";
import project_2 from "../../public/project/project-2.png"
import project_3 from "../../public/project/project-3.png"

const projects = [
  {
    title: "MERN E-Commerce Site",
    description: "A full-featured e-commerce platform built with React, MongoDB, Node.js, Express, and Tailwind CSS.",
    techStack: ["MERN", "Tailwind", "JWT", "Redux"],
    image: project_1,
    link: "https://assignment-10-9e081.web.app/",
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive portfolio made with Next.js and Framer Motion, highlighting personal branding.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: project_2,
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Admin Dashboard",
    description: "Dynamic admin panel with role-based access, charts, and CRUD operations built using React & MongoDB.",
    techStack: ["React", "MongoDB", "Recharts", "Tailwind"],
    image: project_3,
    link: "https://your-dashboard-demo.com",
  },
];

export default function LatestWork() {
    return (
        <section id="work" className="py-20 px-6 sm:px-10 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6 dark:text-white">
                    My Latest Work
                </h2>
                <p className="text-gray-600 text-lg mb-16 max-w-3xl m-auto dark:text-white">
                    A collection of my most recent and impactful projects. Each solution is crafted with care and modern technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-purple-200 dark:bg-transparent dark:border"
                        >
                            <div className="h-56 w-full relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm dark:text-white">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-purple-600 font-medium hover:underline text-sm"
                                >
                                    View Project <FaExternalLinkAlt className="ml-2 text-xs" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
