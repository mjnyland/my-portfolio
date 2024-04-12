import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpLeft } from "react-icons/hi2";
import bermuda from "../assets/Bermuda.png";

const BucketList = () => {
  return (
    <div className="flex flex-col gap-[64px] my-[80px] max-w-xl px-[32px] mx-auto">
      <div className="flex flex-col p-[8px]">
        <Link
          to={"/"}
          className="mb-[32px] hover:underline flex items-center gap-[4px] cursor-pointer"
        >
          <HiArrowUpLeft />
          <p className="text-base">{"Back"}</p>
        </Link>
        <div className="flex flex-col">
          <div className="flex flex-col items-left justify-center gap-[24px]">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium line-through">Run a marathon</p>
                <p className="text-sm text-gray-500 line-through">
                  Thank you, Chicago
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto">Oct. 9, 2022</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium line-through">Get married</p>
                <p className="text-sm text-gray-500 line-through">
                  And have the best party ever
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto">Dec. 2, 2024</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Ship an app to the App Store</p>
                <p className="text-sm text-gray-500">And get it to usage</p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Shoot my age in golf</p>
                <p className="text-sm text-gray-500">70 at 70 seems doable</p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Buy the New York Jets</p>
                <p className="text-sm text-gray-500">
                  I'm coming for you, Gary V
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Learn Japanese</p>
                <p className="text-sm text-gray-500">And visit Tokyo</p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Take pictures</p>
                <p className="text-sm text-gray-500">
                  Really just a note to self
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Achieve financial independence</p>
                <p className="text-sm text-gray-500">
                  Spend less than I make, and live off interest
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Go to culinary school in France</p>
                <p className="text-sm text-gray-500">Yes, Chef</p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Start a company</p>
                <p className="text-sm text-gray-500">
                  "Founder" is my dream title
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Build a house</p>
                <p className="text-sm text-gray-500">
                  And get featured on Grand Designs??
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">Start a family</p>
                <p className="text-sm text-gray-500">
                  And teach them how to golf
                </p>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden">
                Dec. 2, 2024
              </p>
            </div>

            <div className="pt-[32px]">
              <img
                src={bermuda}
                alt="A picture from my honeymoon"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-500 pt-[8px]">
                A picture from my honeymoon
              </p>
            </div>

            <div className="flex flex-col gap-[16px] pt-[32px]">
              <hr />
              <div className="flex">
                <p className="text-gray-500 text-sm">Updated Apr. 2024</p>
                <p className="text-gray-500 text-sm ml-auto">Made in NYC 🗽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
