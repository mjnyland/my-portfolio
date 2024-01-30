import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/Daysheets_1.png";

function ProjectFour() {
  return (
    <div className=" m-[80px]">
      <div className="flex flex-col gap-[32px]">
        <Link className="font-blue" to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl">Michael Nyland</h1>
          </div>
        </Link>

        <img src={imageOne} alt="AI at Spotify" />
      </div>
    </div>
  );
}

export default ProjectFour;
