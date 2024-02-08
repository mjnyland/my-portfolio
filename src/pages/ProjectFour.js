import "../App.css";
import { Outlet, Link } from "react-router-dom";
import imageOne from "../assets/Daysheets_1.png";
import imageTwo from "../assets/Daysheets_2.png";
import imageThree from "../assets/Daysheets_3.png";
import imageFour from "../assets/Daysheets_4.png";
import imageFive from "../assets/Daysheets_5.gif";
import imageSix from "../assets/Daysheets_6.png";

function ProjectFour() {
  return (
    <div className="m-[80px] pb-[160px]">
      <div className="flex flex-col gap-[32px]">
        <Link className="font-blue" to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl">Michael Nyland</h1>
          </div>
        </Link>

        <img src={imageOne} alt="AI at Spotify" />
        <div className="flex">
          <h1 className="text-4xl max-w-3xl text-left py-[160px]">
            Daysheets is a group communication tool for Artists on tour. I
            simplified our navigation, upgraded our visual design, and added a
            map view. Our user's lives were chaotic enough - the tool they rely
            on every day should be anything but.
          </h1>
        </div>
        <img src={imageTwo} alt="AI at Spotify" />
        <img src={imageThree} alt="AI at Spotify" />
        <img src={imageFour} alt="AI at Spotify" />

        {/* Adjusted width of the flex container */}
        <div className="flex max-w-full max-h-[464px]">
          <img
            src={imageFive}
            alt="AI at Spotify"
            className="flex-shrink-0 object-contain max-h-full max-w-[50%]"
          />
          <img
            src={imageSix}
            alt="AI at Spotify"
            className="flex-shrink-0 object-contain max-h-full max-w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectFour;
