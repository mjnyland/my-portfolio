import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/Crewsheets_1.png";
import imageTwo from "../assets/Crewsheets_2.png";
import imageThree from "../assets/Crewsheets_3.png";
import imageFour from "../assets/Crewsheets_4.png";
import imageFive from "../assets/Crewsheets_5.png";

function ProjectThree() {
  return (
    <div className=" m-[80px]">
      <div className="flex flex-col gap-[32px]">
        <Link className="font-blue" to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl">Michael Nyland</h1>
          </div>
        </Link>

        <img src={imageOne} alt="AI at Spotify" />

        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col lg:justify-between lg:flex-row">
            <p>Crewsheets</p>
            <p className="max-w-lg">
              A concept for a web app that allows venues to souce talent for
              live events.
            </p>
          </div>
        </div>
        {/*<img src={imageTwo} alt="AI at Spotify" />*/}
        <img src={imageTwo} alt="AI at Spotify" />
        <img src={imageThree} alt="AI at Spotify" />
        <img src={imageFour} alt="AI at Spotify" />
        <img src={imageFive} alt="AI at Spotify" />
      </div>
    </div>
  );
}

export default ProjectThree;
