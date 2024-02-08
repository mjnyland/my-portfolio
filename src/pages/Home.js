import "../App.css";
import { Outlet, Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1">
      <div className="flex flex-col items-left gap-[64px] mx-auto max-w-md">
        {" "}
      </div>
      <div className="flex flex-col items-left gap-[64px] mx-auto max-w-md">
        <h1 className="text-2xl font-semibold pt-[160px]">
          Hi there, I'm Michael.
        </h1>
        <ReactPlayer
          url="https://vimeo.com/678435899?share=copy"
          controls="true"
          width="100%"
        />
        <div className="flex flex-col gap-[16px]">
          <p className="text-lg">
            I've been in charge of Product & Brand Design at{" "}
            <a className="font-bold">Daysheets</a> for over a year now. I live
            in Brooklyn, by way of Chicago. I'm currently looking for full-time
            roles. Mostly with startups, but I'm open to larger companies as
            well.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-slate-500">Experience:</p>
          <div className="grid grid-cols-2 grid-rows-3 gap-y-[24px]">
            <div>
              <h3 className="text-lg font-medium">Daysheets</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Product & Brand Designer</h3>
              <h3 className="text-md text-slate-500">2023 - Present</h3>
            </div>
            <div>
              <h3 className="text-lg font-medium">Spotify</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Internal Brand Design</h3>
              <h3 className="text-md text-slate-500">2022-2023</h3>
            </div>
            <div>
              <h3 className="text-lg font-medium">Banner</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">Motion Designer</h3>
              <h3 className="text-md text-slate-500">2018 - 2020</h3>
            </div>
          </div>
        </div>
        <div className="pb-[64px]">
          <h3 className="text-lg pb-[16px]">Projects:</h3>
          <div className="flex flex-col items-left justify-center gap-[16px]">
            <Link className="font-blue" to="ProjectFour">
              <h1 className="text-md font-semibold">Daysheets</h1>
              <p>
                Product Design for the worlds biggest artists, and their crew.
              </p>
            </Link>
            <Link className="font-blue" to="ProjectTwo">
              <h1 className="text-md font-semibold under">SBWC Mobile App</h1>
              <p>The worlds easisest to use powerlifting app.</p>
            </Link>
            <Link className="font-blue" to="ProjectOne">
              <h1 className="text-md font-semibold">AI at Spotify</h1>
              <p>Visualizing AI for Spotify.</p>
            </Link>
            <Link className="font-blue" to="ProjectThree">
              <h1 className="text-md font-semibold">Crewsheets</h1>
              <p>Contra for the music industry.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
