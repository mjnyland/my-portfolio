import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/SBWC_HeroImage_v1.1.png";
import imageTwo from "../assets/SBWC_ObjectMapping.png";
import imageThree from "../assets/SBWC_ObjectMapping_2.png";
import imageFour from "../assets/SBWC_ObjectMapping_3.png";
import imageFive from "../assets/SBWC_TrackingPerformance_v1.1.png";
import imageSix from "../assets/SBWC_Exercise_v1.1.png";
import imageSeven from "../assets/SBWC_Home_v1.1.png";

function ProjectTwo() {
  return (
    <div className=" m-[80px] pb-[160px]">
      <div className="flex flex-col gap-[32px]">
        <Link className="font-blue" to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl">Michael Nyland</h1>
          </div>
        </Link>

        <img src={imageOne} alt="AI at Spotify" />

        <div className="flex flex-col gap-[16px]">
          <p className="text-4xl max-w-3xl text-left py-[160px]">
            Redesigning the mobile app the South Brooklyn Weightlifting Club
            uses for it’s members.
          </p>
        </div>
        {/*<img src={imageTwo} alt="AI at Spotify" />*/}
        <img src={imageThree} alt="AI at Spotify" loading="lazy" />
        <img src={imageFour} alt="AI at Spotify" loading="lazy" />
        <img src={imageSeven} alt="AI at Spotify" loading="lazy" />
        <img src={imageFive} alt="AI at Spotify" loading="lazy" />
        <img src={imageSix} alt="AI at Spotify" loading="lazy" />
      </div>
    </div>
  );
}

export default ProjectTwo;
