"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import SkillsRadarChart from "./SkillsRadarChart";

const PersonalExpertise = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:justify-between gap-5 md:px-24 px-8 lg:pr-[12%]">
            {/* Left: Image */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="absolute w-32 md:w-60 h-8 md:h-6 -z-10 top-10 left-10"></div>
                <SkillsRadarChart />
            </div>

            {/* Right: Text and Progress */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-purple-600 mb-4">
                    My Personal Expertise
                </h2>
                <p className="text-gray-700 mb-6 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
                    leo tellus, eget blandit urna con sequat sit amet. Aenean tincidunt
                    lacus eget purus dictum, congue imperdiet eleifend.
                </p>

                {/* Progress Bars */}
                <div className="space-y-6">
                    <SkillBar label="Web Development" percentage={85} />
                    <SkillBar label="App Design" percentage={90} />
                    <SkillBar label="Landing Page Design" percentage={80} />
                </div>
            </div>
        </section>
    );
};

const SkillBar = ({ label, percentage }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-semibold text-lg">{label}</span>
                <span className="text-gray-700 font-medium">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default PersonalExpertise;
