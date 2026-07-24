
import { SlMagnifier } from "react-icons/sl";
import { AiOutlineBulb } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { AiFillFormatPainter } from "react-icons/ai";
import { SlFire } from "react-icons/sl";
export default function Qualities() {

    const qualities = [
  {
    title: "Curiosity",
    description: "Always asking why, and how it could be better.",
    icon: SlMagnifier,
  },
  {
    title: "Problem-solving",
    description: "Breaking hard things into elegant steps.",
    icon: AiOutlineBulb,
  },
  {
    title: "Determination",
    description: "Finishing what I start — properly.",
    icon: AiFillDribbbleCircle,
  },
  {
    title: "Continuous learning",
    description: "Every project teaches me something new.",
    icon: SlGraduation,
  },
  {
    title: "Creativity",
    description: "Turning ideas into thoughtful digital experiences.",
    icon: AiFillFormatPainter,
  },
  {
    title: "Attention to detail",
    description: "Because the small things add up to the whole.",
    icon: SlFire,
  },
];
   
  return (
      <main className="flex flex-col justify-items gap-2">
        <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">What Drives Me</p>
        <h1 className="text-[#F7F5EF] text-4xl font-bold leading-[1.15]">
            The qualities behind the work.
        </h1>


        <div className="flex flex-col py-4">
            <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
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