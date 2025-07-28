import React from "react";
import { FaLightbulb, FaLaptopCode, FaClipboardCheck, FaRocket } from "react-icons/fa";

const steps = [
    {
        title: "1. Plan & Discover",
        icon: <FaLightbulb />,
        description:
            "We start by understanding your goals, users, and requirements. This ensures we solve the right problem.",
    },
    {
        title: "2. Design & Prototype",
        icon: <FaLaptopCode />,
        description:
            "Next, we create wireframes, UI mockups, and flow diagrams to plan how everything will look and function.",
    },
    {
        title: "3. Build & Develop",
        icon: <FaClipboardCheck />,
        description:
            "Our developers bring the design to life with clean, efficient, and scalable code using modern technologies.",
    },
    {
        title: "4. Launch & Optimize",
        icon: <FaRocket />,
        description:
            "After testing, we launch your product and continue to optimize for better performance and user feedback.",
    },
];

export default function ProcessSteps() {
    return (
        <section className="py-20 px-6 sm:px-10 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 dark:text-white">
                    How the Process Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16 dark:text-white">
                    We follow a clear and collaborative approach to deliver high-quality results that align with your vision.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 transition-all flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-purple-300 border-t-4 border-purple-600 group dark:bg-transparent dark:border-b-2"
                        >
                            <div className="text-purple-600 text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">{step.title}</h3>
                            <p className="text-gray-600 text-sm dark:text-white">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
