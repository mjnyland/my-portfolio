import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/PZN_HeroImage_v2.png";
import imageTwo from "../assets/MoodCircle.gif";
import imageThree from "../assets/PZN_HatMockup.png";
import imageFour from "../assets/MissionVisionPurpose_v2.2.gif";
import imageFive from "../assets/PZN_Tote.png";
import imageSix from "../assets/PZN_TShirt.png";
import imageSeven from "../assets/PZN_Slides_v2.png";
import imageEight from "../assets/PZN_Colors_v2.png";
import Vimeo from "@u-wave/react-vimeo";
import ReactPlayer from "react-player";

function ProjectOne() {
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
          <p className="text-4xl max-w-3xl text-left py-[160px] leading-tight">
            A look and feel for the machine learning engineers at Spotify. I
            worked directly with VPs in engineering, product, and design to
            establish typography, color, and layout styling that aligned with
            their mission statement at the intersection of music and AI. Visual
            Details were changed after I left the company.
          </p>
        </div>
        <ReactPlayer
          url="https://vimeo.com/912109310?share=copy"
          controls="true"
          width="100%"
        />
        <img src={imageTwo} alt="AI at Spotify" loading="lazy" />
        <img src={imageEight} alt="AI at Spotify" loading="lazy" />
        <img src={imageFour} alt="AI at Spotify" loading="lazy" />
        <img src={imageThree} alt="AI at Spotify" loading="lazy" />
        <img src={imageSeven} alt="AI at Spotify" loading="lazy" />
        {/*         <div className="flex flex-col gap-[16px] lg:flex-row">
          <img
            src={imageFive}
            alt="AI at Spotify"
            loading="lazy"
            className="max-w-[400px]  h-auto"
          />
          <img
            src={imageSix}
            alt="AI at Spotify"
            loading="lazy"
            className="max-w-[400px] h-auto"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProjectOne;
