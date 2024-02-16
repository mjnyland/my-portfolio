import "../App.css";
import { Outlet, Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className="flex flex-col gap-[120px] mx-[80px] my-[160px] pb-[160px]">
      <div className="flex flex-col max-w-3xl pb-[80px]">
        <p className="text-3xl">{"Hi! I'm Michael."}</p>
        <div className="flex flex-col gap-[16px]">
          <p className="text-2xl lg:text-3xl pt-[32px]">
            I'm a product and brand designer with 6 years of experience.
            Currently I'm the lead designer at{" "}
            <a
              className="font-regular cursor-pointer underline underline-offset-2"
              href="https://www.daysheets.com"
              target="_blank"
            >
              Daysheets.
            </a>{" "}
            I'm looking for full-time roles with early-stage startups.
          </p>
          {/*<a
            className="font-semibold cursor-pointer text-blue-600 tracking-tight underline"
            href="https://www.loom.com/share/2185b17a8b5b49baa2ee4b95691379dd?sid=3040b0fd-6865-400e-8579-736461c5d79b"
            target="_blank"
          >
            Watch my AMA
          </a>*/}
        </div>
      </div>
      {/*
      <div className="flex flex-col gap-[16px] max-w-3xl">
        
        <p className="text-2xl lg:text-3xl pb-[16px]">Experience</p>
        <hr />
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
      </div>*/}

      <div className="flex flex-col">
        {/* Projects Container */}
        <div className="pb-[32px] flex flex-col gap-[8px]">
          <h3 className="text-3xl lg:text-3xl">Selected Projects</h3>
          <hr />
          <div className="flex flex-col items-left justify-center gap-[32px]">
            <Link className="font-blue pt-[24px]" to="ProjectFour">
              <h1 className="text-6xl pb-[8px] tracking-[-1px]">Daysheets</h1>
              <p className="text-xl">
                Product Design, User Research, Prototyping
              </p>
            </Link>
            <hr />
            <Link className="font-blue" to="ProjectOne">
              <h1 className="text-6xl pb-[8px] tracking-[-1px]">
                AI at Spotify
              </h1>
              <p className="text-xl">
                Brand Idenity, Motion Design, Presentation Design
              </p>
            </Link>
            <hr />
            <Link className="font-blue" to="ProjectTwo">
              <h1 className="text-6xl pb-[8px] tracking-[-1px]">
                SBWC Mobile App
              </h1>
              <p className="text-xl">
                Product Design, User Research, Prototyping
              </p>
            </Link>
            <hr />
            <Link className="font-blue" to="ProjectThree">
              <h1 className="text-6xl pb-[8px] tracking-[-1px]">Crewsheets</h1>
              <p className="text-xl">
                Product Design, Visual Design, Prototyping
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        {" "}
        {/* Reel Container */}
        <h3 className="text-2xl lg:text-3xl pb-[16px]">Motion Reel</h3>
        <ReactPlayer
          url="https://vimeo.com/678435899?share=copy"
          controls="true"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Home;
