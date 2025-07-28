"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { subject: "HTML", A: 100, fullMark: 100 },
  { subject: "CSS", A: 80, fullMark: 100 },
  { subject: "JavaScript", A: 75, fullMark: 100 },
  { subject: "React", A: 80, fullMark: 100 },
  { subject: "MongoDB", A: 50, fullMark: 100 },
  { subject: "ExpressJS", A: 50, fullMark: 100 },
  { subject: "NodeJS", A: 60, fullMark: 100 },
  { subject: "Tailwind CSS", A: 90, fullMark: 100 },
  { subject: "Figma", A: 75, fullMark: 100 },
  { subject: "Git & GitHub", A: 80, fullMark: 100 },
  { subject: "Other Tools", A: 80, fullMark: 100 },
];

export default function SkillsRadarChart() {
  return (
    <div className="w-full px-4 md:py-10 sm:px-6 lg:px-8 rounded-2xl shadow-md max-w-5xl mx-auto">

      <div className="w-full h-[250px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Tooltip />
            <Radar
              name="Amit Mondol"
              dataKey="A"
              stroke="#0ea5e9"
              fill="#38bdf8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center dark:text-white text-gray-800 mb-8">
        MERN Stack & Tools Skill Radar
      </h2>
    </div>
  );
}
