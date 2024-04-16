import React from "react";
import "../App.css";
import { Outlet, Link } from "react-router-dom";
import headerOne from "../assets/Daysheets_Header_1.png";
import headerTwo from "../assets/Daysheets_Header_2.png";
import headerThree from "../assets/Daysheets_Header_3.png";
import headerFour from "../assets/Daysheets_Header_4.png";
import dsOne from "../assets/Daysheets_DS_1.png";
import dsTwo from "../assets/Daysheets_DS_2.png";
import sidebarOne from "../assets/Daysheets_Side_1.png";
import sidebarTwo from "../assets/Daysheets_Side_2.png";
import personnelOne from "../assets/Daysheets_Personnel_1.png";
import personnelTwo from "../assets/Daysheets_Personnel_2.png";
import flightsOne from "../assets/Daysheets_Flights_1.png";
import flightsTwo from "../assets/Daysheets_Flights_2.png";
import flightsThree from "../assets/Daysheets_Flights_3.png";
import { HiArrowUpLeft } from "react-icons/hi2";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

const DaysheetsMacOS = () => {
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

        <img src={flightsThree} alt="AI at Spotify" className="rounded-lg" />

        <div className="flex flex-col max-w-xl gap-[24px]">
          <p className="max-w-3xl text-left pt-[80px] text-base">
            I don’t follow linear design processes, because they are unrealistic
            - especially at startups. Instead I like to iterate. This allows us
            to test our assumptions, learn for our users, and gradually improve
            the product over time. I relied on this strategy at Daysheets while
            working on our MacOS app.
          </p>
          <p className="max-w-3xl text-left text-base">
            We had humble beginnings.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            The lowest hanging fruit was our page titles.
          </p>
        </div>
        {/*<img src={imageTwo} alt="AI at Spotify" />*/}
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={headerOne}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={headerTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={headerThree}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={headerFour}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            I knew our typography was an issue from the get-go.
          </p>
        </div>
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={dsOne}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={dsTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            Keeping with improving navigation, I redesigned our sidebar.
          </p>
        </div>
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={sidebarOne}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={sidebarTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            We then dug in to entire page changes, starting with personnel.
          </p>
        </div>
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={personnelOne}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={personnelTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            And finally, a new and improved flights experience.
          </p>
        </div>
        <SlideshowLightbox
          className="container flex flex-col gap-[16px] mx-auto"
          showThumbnails={false}
        >
          <img
            src={flightsOne}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={flightsTwo}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
          <img
            src={flightsThree}
            alt="AI at Spotify"
            loading="lazy"
            className="rounded-lg"
          />
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default DaysheetsMacOS;
