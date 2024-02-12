import "../App.css";
import { Outlet, Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 grid-rows-1 max-w-[1920px]">
      <div className="flex flex-col max-w-4xl px-[64px]">
        <h1 className="text-4xl font-semibold pt-[160px]">
          Hi there, I'm Michael.
        </h1>
        <div className="flex flex-col gap-[16px]">
          <p className="text-2xl lg:text-4xl pt-[32px] leading-tight">
            I'm a designer with 6+ years of experience. I'm currently in charge
            of Product & Brand Design at{" "}
            <a
              className="font-bold cursor-pointer"
              href="https://www.daysheets.com"
              target="_blank"
            >
              Daysheets.
            </a>{" "}
            I live in Brooklyn, by way of Chicago. I'm currently looking for
            full-time roles with early-stage startups.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] py-[64px]">
          <p className="text-2xl lg:text-3xl pb-[16px]">Experience:</p>
          <div className="grid grid-cols-2 grid-rows-3 gap-y-[24px]">
            <div>
              <h3 className="text-lg font-semibold">Daysheets</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Product & Brand Designer</h3>
              <h3 className="text-md text-slate-500">2023 - Present</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Spotify</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Internal Brand Design</h3>
              <h3 className="text-md text-slate-500">2022-2023</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Banner</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Motion Designer</h3>
              <h3 className="text-md text-slate-500">2020 - 2022</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:pt-[160px]">
        <div className="flex flex-col items-left gap-[16px] max-w-xl px-[64px] 2xl:px-[0px]">
          <div className="pb-[32px] gap-[16px] flex flex-col">
            <h3 className="text-2xl lg:text-3xl pb-[16px]">Projects:</h3>
            <div className="flex flex-col items-left justify-center gap-[16px]">
              <Link className="font-blue" to="ProjectFour">
                <h1 className="text-lg font-semibold">Daysheets</h1>
                <p>
                  Product Design for the worlds biggest artists, and their crew.
                </p>
              </Link>
              <Link className="font-blue" to="ProjectOne">
                <h1 className="text-lg font-semibold">AI at Spotify</h1>
                <p>Visualizing AI for Spotify.</p>
              </Link>
              <Link className="font-blue" to="ProjectTwo">
                <h1 className="text-lg font-semibold under">SBWC Mobile App</h1>
                <p>The worlds easiest to use powerlifting app.</p>
              </Link>
              <Link className="font-blue" to="ProjectThree">
                <h1 className="text-lg font-semibold">Crewsheets</h1>
                <p>Contra for the music industry.</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-2xl lg:text-3xl pb-[16px]">Motion Reel:</h3>
            <ReactPlayer
              url="https://vimeo.com/678435899?share=copy"
              controls="true"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
