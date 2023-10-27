import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/PZN_HeroImage_v1.3.png";
import imageTwo from "../assets/PZN_Slides_v1.2.png";
import imageThree from "../assets/PZN_Sticker_v1.2.png";
import imageFour from "../assets/PZN_Text_v1.2.png";
import imageFive from "../assets/PZN_Journal_v1.png";
import imageSix from "../assets/PZN_Hat_v1.png";

function ProjectOne() {
  return (
    <div className=" m-[80px]">
      <div className="flex flex-col gap-[32px]">
        <Link className="font-blue" to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl">Michael Nyland</h1>
          </div>
        </Link>

        <img src={imageOne} alt="AI at Spotify" />
        <img src={imageTwo} alt="AI at Spotify" />
        <img src={imageThree} alt="AI at Spotify" />
        <img src={imageFour} alt="AI at Spotify" />
        <img src={imageFive} alt="AI at Spotify" />
        <img src={imageSix} alt="AI at Spotify" />
      </div>
    </div>
  );
}

export default ProjectOne;
