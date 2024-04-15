import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/Crewsheets_1.png";
import imageTwo from "../assets/Crewsheets_2.png";
import imageThree from "../assets/Crewsheets_3.png";
import imageFour from "../assets/Crewsheets_4.png";
import imageFive from "../assets/Crewsheets_0.png";
import { HiArrowUpLeft } from "react-icons/hi2";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

function ProjectThree() {
  return (
    <div className="m-[80px] pb-[160px] max-w-6xl mx-auto">
      <div className="flex flex-col gap-[32px] items-center">
        <Link
          to={"/"}
          className="mb-[32px] hover:underline decoration-blue-500 flex items-center gap-[4px] cursor-pointer w-full"
        >
          <HiArrowUpLeft color="rgb(59 130 246)" />
          <p className="text-base text-blue-500">{"Back"}</p>
        </Link>

        <img src={imageOne} alt="AI at Spotify" className="rounded-lg" />

        <div className="flex flex-col gap-[16px] max-w-xl">
          <p className="max-w-3xl text-left py-[160px] text-base">
            A concept for a web app that allows venues to souce talent for live
            events.
          </p>
        </div>
        {/*<img src={imageTwo} alt="AI at Spotify" />*/}
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={imageTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={imageThree}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={imageFour}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={imageFive}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default ProjectThree;
