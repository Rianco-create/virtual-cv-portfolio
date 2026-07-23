
import { HiOutlineTrendingUp } from "react-icons/hi";
import { PiBriefcaseBold } from "react-icons/pi";
import { LuRocket } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Future() {

    const qualities = [
  {
    title: "Grow as an IT professional",
    description: "Always asking why, and how it could be better.",
    icon: HiOutlineTrendingUp,
  },
  {
    title: "Gain industry experience",
    description: "Contribute to real teams, real users, real products.",
    icon: PiBriefcaseBold,
  },
  {
    title: "Improve technical & professional skills",
    description: "Deepen my stack while learning the business behind it.",
    icon: LuRocket,
  },
  {
    title: "Build my own technology company",
    description: "Eventually turn my ideas and skills into a company of my own.",
    icon: HiOutlineBuildingOffice2,
  },
  
];
   
  return (
      <main className="flex flex-col justify-items gap-2">
        <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Future Goals</p>
        <h1 className="text-[#F7F5EF] text-4xl font-bold leading-[1.15]">
            Where I'm heading next.
        </h1>


        <div className="flex flex-col py-4">
            <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-2">
            {qualities.map((quality) => {
                const Icon = quality.icon;

                return (
                <div
                    key={quality.title}
                    className="rounded-2xl bg-[#262F37] px-5 py-5 shadow-xl sm:px-8"
                >
                    <Icon className="h-6 w-6 text-emerald-400" />

                    <h2 className="py-3 text-2xl font-bold leading-[1.15] text-[#F7F5EF]">
                    {quality.title}
                    </h2>

                    <p className="text-base text-slate-300">
                    {quality.description}
                    </p>
                </div>
                );
            })}
            </div>
        </div>


      </main>
  );
}