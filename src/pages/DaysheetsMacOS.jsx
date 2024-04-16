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
import ReactPlayer from "react-player";

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
            Previously our page header was displaying the start and end dates of
            the tour, which was only useful in edge cases. Tabs were also
            disconnected from the page, and weren't found easily.
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
            From there I looked at our design system. We had defined some base
            stlyes that were very far off Apple's HIG. This also meant that we
            didn't support dynamic type.
          </p>

          <p className="max-w-3xl text-left py-[80px] text-base">
            We also weren't making use of properties in Figma, an issue that was
            slowing everyone down.
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
        <ReactPlayer
          url="https://vimeo.com/935558138?share=copy"
          controls="true"
          width="100%"
        />

        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            Now with new and improved type styles, I was confident I could
            improve our sidebar - a key component to our interface.
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
            We then dug in to entire page changes, starting with personnel. I
            set sensible defualts, and applied new text styling to make
            everything much more scannable.
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
            And finally, a new and improved flights experience. We made a
            flights page that made viewing 10+ flights a breeze. We even added a
            way to import flights straight from your email or a pdf. Our users
            loved it.
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
        <div className="flex flex-col gap-[16px] max-w-xl w-full">
          <p className="max-w-3xl text-left py-[80px] text-base">
            Coming soon - onboarding improvements, pre-planning grids,
            hotel/flight booking, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DaysheetsMacOS;
