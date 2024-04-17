import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/Daysheets_1.png";
import imageTwo from "../assets/Daysheets_2.png";
import imageThree from "../assets/Daysheets_3.png";
import imageFour from "../assets/Daysheets_4.png";
import imageFive from "../assets/Daysheets_5.gif";
import imageSix from "../assets/Daysheets_6.png";
import imageSeven from "../assets/Daysheets_7.png";
import imageEight from "../assets/Daysheets_8.png";
import imageNine from "../assets/Daysheets_9.png";
import imageTen from "../assets/Daysheets_10.png";
import { useEffect } from "react";
import { HiArrowUpLeft } from "react-icons/hi2";

import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

function ProjectFour() {
  useEffect(() => {
    initLightboxJS("055B-A1E2-BECD-BE30", "Individual");
  });

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
        <div className="max-w-xl my-auto py-[32px]">
          <h1 className="max-w-lg text-left text-base">
            Daysheets is a group communication tool for Artists on tour. I
            simplified our navigation, upgraded our visual design, and added a
            map view. Our users lives are chaotic enough - the tool they rely on
            every day should be anything but.
          </h1>
        </div>
        {/*
                <img src={imageNine} alt="AI at Spotify" />
        <div className="flex">
          <h1 className="text-4xl max-w-3xl text-left py-[160px] leading-tight">
            How might we improve navigation and overall experience for users who
            are busy, and have a high standard for design?
          </h1>
        </div>
         */}

        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={imageFour}
            alt="AI at Spotify"
            className="rounded-lg cursor-zoom-in"
          />
          <img
            src={imageSeven}
            alt="AI at Spotify"
            className="rounded-lg cursor-zoom-in"
          />
          <img
            src={imageTwo}
            alt="AI at Spotify"
            className="rounded-lg cursor-zoom-in"
          />
          <img
            src={imageThree}
            alt="AI at Spotify"
            className="rounded-lg cursor-zoom-in"
          />
          <img
            src={imageEight}
            alt="AI at Spotify"
            className="rounded-lg cursor-zoom-in"
          />
        </SlideshowLightbox>

        <div className="flex max-w-full max-h-[464px]">
          <img
            src={imageFive}
            alt="AI at Spotify"
            className="flex-shrink-0 object-contain max-h-full max-w-[50%] rounded-lg"
          />
          <img
            src={imageSix}
            alt="AI at Spotify"
            className="flex-shrink-0 object-contain max-h-full max-w-[50%] rounded-lg"
          />
        </div>

        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img src={imageTen} alt="AI at Spotify" className="rounded-lg" />
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default ProjectFour;
