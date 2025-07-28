import { assets } from "@/assets/assets";
import Image from "next/image";


const Header = () => {
    return (
        <section className="hero text-white h-screen flex items-center px-6 md:px-16 relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-12 gap-4">
                {/* Left Side Image */}
                <div className="md:w-1/3">
                    <Image
                        src= {assets.user_image}
                        alt="Developer"
                        className="w-64 h-64 object-cover rounded-full shadow-2xl mx-auto"
                    />
                </div>
                {/* Right Side */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h1 className="text-2xl md:text-6xl font-bold mb-1 md:mb-4 text-orange-300">
                        Hello, I&apos;m <span className="text-indigo-400">Amit Mondol</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-red-400">
                        MERN Stack Developer
                    </h2>
                    <p className="mb-4 md:mb-8 leading-relaxed text-red-400">
                        I specialize in front-end development with a strong expertise in React, creating modern and responsive web applications.
                    </p>
                    <a
                        href="#projects"
                        className="inline-block px-6 py-3 bg-none border border-orange-500 hover:bg-indigo-300 text-orange-500 font-semibold rounded-full transition duration-300"
                    >
                        View Projects
                    </a>
                </div>
            </div>
            <Image className="w-full absolute bottom-0 right-0 hidden md:block" src={assets.wave} alt="" />
        </section>
    );
};

export default Header;