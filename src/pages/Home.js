import "../App.css";
import { Outlet, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { HiExternalLink, HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="flex flex-col gap-[64px] mt-[160px] max-w-xl px-[32px] mx-auto">
      <div className="flex flex-col p-[8px]">
        <p className="text-3xl">{"Michael Nyland"}</p>
        <div className="flex flex-col">
          <p className="text-base pt-[32px] pb-[24px]">
            Product and brand designer with 6 years of experience, and currently
            the lead designer at{" "}
            <a
              className="font-regular cursor-pointer underline underline-offset-2"
              href="https://www.daysheets.com"
              target="_blank"
            >
              Daysheets.
            </a>{" "}
            I'm looking for full-time roles with startups. I live in Brooklyn,
            but I'm open to relocation.
          </p>
          <div className="flex flex-row gap-[24px]">
            <div className="flex flex-row items-center ">
              <a
                className="cursor-pointer hover:underline underline-offset-2 text-base font-medium pr-[4px]"
                href="https://drive.google.com/file/d/1w2NO16XVEbMI9Wg4WXFkvigV3G9KzBKb/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>{" "}
              <HiExternalLink />
            </div>
            <div className="flex flex-row items-center">
              <a
                className="cursor-pointer hover:underline underline-offset-2 text-base font-medium pr-[4px]"
                href="https://vimeo.com/678435899?share=copy"
                target="_blank"
              >
                Motion Design Reel
              </a>{" "}
              <HiExternalLink />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-">
        {/* Projects Container */}
        <div className="flex flex-col">
          <h3 className="text-base text-gray-500 p-[8px] mb-[8px]">Projects</h3>
          <div className="flex flex-col items-left justify-center gap-[16px]">
            <Link
              className="font-blue p-[8px] flex flex-row hover:bg-gray-100 rounded group"
              to="Daysheets"
            >
              <div className="flex flex-col">
                <h1 className="text-base font-medium group-hover:underline">
                  Daysheets
                </h1>
                <p className="text-sm text-gray-500">
                  Product Design, User Research, Prototyping
                </p>
              </div>
              <div className="my-auto ml-auto pr-[16px] hidden group-hover:block">
                <HiArrowNarrowRight />
              </div>
            </Link>

            <Link
              className="font-blue p-[8px] flex flex-row hover:bg-gray-100 rounded group"
              to="Spotify"
            >
              <div>
                <h1 className="text-base font-medium group-hover:underline">
                  AI at Spotify
                </h1>
                <p className="text-sm text-gray-500">
                  Brand Identity, Motion Design, Presentation Design
                </p>
              </div>
              <div className="my-auto ml-auto pr-[16px] hidden group-hover:block">
                <HiArrowNarrowRight />
              </div>
            </Link>
            <Link
              className="font-blue p-[8px] flex flex-row hover:bg-gray-100 rounded group"
              to="SBWC"
            >
              <div>
                <h1 className="text-base font-medium group-hover:underline ">
                  SBWC Mobile App
                </h1>
                <p className="text-sm text-gray-500">
                  Product Design, Prototyping
                </p>
              </div>
              <div className="my-auto ml-auto pr-[16px] hidden group-hover:block">
                <HiArrowNarrowRight />
              </div>
            </Link>
            <Link
              className="font-blue p-[8px] flex flex-row hover:bg-gray-100 rounded group"
              to="Crewsheets"
            >
              <div>
                <h1 className="text-base font-medium group-hover:underline">
                  Crewsheets
                </h1>
                <p className="text-sm text-gray-500">
                  Product Design, Visual Design, Prototyping
                </p>
              </div>
              <div className="my-auto ml-auto pr-[16px] hidden group-hover:block">
                <HiArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
