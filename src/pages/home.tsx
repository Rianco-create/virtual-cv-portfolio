import profilePic from "../content/willian-souza-p5BoBF0XJUA-unsplash.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center justify-center  p-8">
        <div className="flex w-1/2 items-center justify-center">
          <img
            className="h-80 w-70 rounded-2xl object-cover"
            src={profilePic}
            alt="Profile"
          />
        </div>

        <div className="w-1/2  p-8 text-white">
           <p className="max-w-xl text-lg leading-8 text-gray-600">
            I’m a final-year BSc Information Technology student with a passion
            for programming and web development. I enjoy turning ideas into
            practical digital solutions, solving problems, and occasionally
            convincing my code to work after several cups of coffee. My goal is
            to continue growing as an IT professional and, one day, establish my
            own technology company.
          </p>
        </div>
      </div>
    </div>
  );
}