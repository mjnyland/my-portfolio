import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/SBWC_HeroImage_v1.1.png";
import imageTwo from "../assets/SBWC_ObjectMapping.png";
import imageThree from "../assets/SBWC_ObjectMapping_2.png";
import imageFour from "../assets/SBWC_ObjectMapping_3.png";
import imageFive from "../assets/SBWC_TrackingPerformance_v1.1.png";
import imageSix from "../assets/SBWC_Exercise_v1.1.png";
import imageSeven from "../assets/SBWC_Home_v1.1.png";
import { HiArrowUpLeft } from "react-icons/hi2";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

function ProjectTwo() {
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
            Redesigning the mobile app the South Brooklyn Weightlifting Club
            uses for it’s members.
          </p>
        </div>
        {/*<img src={imageTwo} alt="AI at Spotify" />*/}
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
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
            src={imageSeven}
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
          <img
            src={imageSix}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default ProjectTwo;
