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

        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col lg:justify-between lg:flex-row">
            <p>Personalization at Spotify</p>
            <p className="max-w-lg">
              The talented machine learning engineers at Spotify needed a look
              and feel to match the exciting work they were doing at the
              intersection of music and AI. I worked directly with VPs in
              engineering, product, and design to establish typography, color,
              and layout styling that aligned with their mission statement as an
              organization.
            </p>
          </div>
          <div className="flex flex-row ml-auto max-w-lg">
            <div className="flex flex-col">
              <p>Details:</p>
              <div>
                <p>2022</p>
                <p>Spotify</p>
                <p>Internal Brand Designer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Note:</p>
              <p>
                Visual details were adjusted after my layoff. They don’t know
                what they’re missing ;)
              </p>
            </div>
          </div>
        </div>
        <img src={imageTwo} alt="AI at Spotify" loading="lazy" />
        <img src={imageThree} alt="AI at Spotify" loading="lazy" />
        <img src={imageFour} alt="AI at Spotify" loading="lazy" />
        <img src={imageFive} alt="AI at Spotify" loading="lazy" />
        <img src={imageSix} alt="AI at Spotify" loading="lazy" />
      </div>
    </div>
  );
}

export default ProjectOne;
