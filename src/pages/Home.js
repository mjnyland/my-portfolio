import "../App.css";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-left m-[160px] gap-[64px]">
      <h1 className="text-8xl font-semibold">Michael Nyland</h1>
      <div className="flex flex-col lg:flex-row justify-between flex-grow">
        <div className="flex flex-col gap-[16px]">
          <div>
            <h1 className="text-2xl font-bold">Daysheets</h1>
            <h1 className="text-xl">Product & Brand Designer</h1>
            <h1 className="text-xl">2023 - Present</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Spotify</h1>
            <h1 className="text-xl">Internal Brand Designer</h1>
            <h1 className="text-xl">2022 - 2023</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Banner</h1>
            <h1 className="text-xl">Motion Designer</h1>
            <h1 className="text-xl">2020 - 2022</h1>
          </div>
        </div>
        <div>
          <h3 className="text-2xl pb-[16px]">Projects:</h3>
          <div className="flex flex-col items-left justify-center gap-[16px]">
            <Link className="font-blue" to="ProjectOne">
              <h1 className="text-4xl">AI at Spotify</h1>
            </Link>
            <Link className="font-blue" to="ProjectTwo">
              <h1 className="text-4xl">SBWC Mobile App</h1>
            </Link>
            <Link className="font-blue" to="ProjectThree">
              <h1 className="text-4xl">Crewsheets</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
