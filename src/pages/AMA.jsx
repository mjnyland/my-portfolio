import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpLeft } from "react-icons/hi2";
import sweden from "../assets/sweden.png";

const AMA = () => {
  return (
    <div className="flex flex-col gap-[64px] my-[80px] max-w-xl px-[32px] mx-auto">
      <div className="flex flex-col p-[8px]">
        <Link
          to={"/"}
          className="mb-[32px] hover:underline decoration-blue-500 flex items-center gap-[4px] cursor-pointer"
        >
          <HiArrowUpLeft color="rgb(59 130 246)" />
          <p className="text-base text-blue-500">{"Back"}</p>
        </Link>
        <div className="flex flex-col">
          <div className="flex flex-col items-left justify-center gap-[24px]">
            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">
                  What is the project you're most proud of?
                </p>
                <p className=" text-gray-500">
                  Daysheets mobile app redesign. Check it out{" "}
                  <Link to={"/Daysheets"} className="underline cursor-pointer">
                    here
                  </Link>
                  {""}. I got to own the entire project from end-to-end. From
                  talking to users, creating prototypes, high-fidelity mockups,
                  and even helping write the code.
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">
                  Do you consider yourself a brand designer or a product
                  designer?
                </p>
                <p className=" text-gray-500">
                  I've done both. Currently I'm focused on product. That said, I
                  love integrating brand with product and vice versa. That's why
                  I love working with startups. There's usually a need for that
                  combo in that environment.
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">
                  What about coding - are you a designer or an engineer?
                </p>
                <p className=" text-gray-500">
                  Again, I've done both. I get that my background reads as "Jack
                  of all trades, master of none", but I let my curiosity be my
                  compass. I have a technical side to me that if I ignore, I
                  start to feel bored. I love coding, I love designing. I'm
                  stronger at design - but getting better at code everyday.
                  Currently focusing on Swift and SwiftUI.
                </p>
              </div>
              <p className=" text-gray-500 ml-auto hidden">Dec. 2, 2024</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">
                  What is the hardest thing about product vs brand?
                </p>
                <p className=" text-gray-500">
                  Brand designs are seen and interacted with, but they're not
                  really used. Products are used and relied on every day. That
                  requires a deep level of understanding of the customer and
                  their workflows. That said, Branding is easy to do good
                  enough, and insanely hard to exceptionally well. Harder than
                  product I would say.
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">What makes you so confident?</p>
                <p className=" text-gray-500">
                  I've made just about every mistake you can make. Every time
                  I've learned from it and gotten better. (Cliche, I know, but
                  true)
                </p>
              </div>
              <p className=" text-gray-500 ml-auto hidden">Dec. 2, 2024</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">What are your weaknesses?</p>
                <p className=" text-gray-500">
                  Sometimes I overthink. Sometimes thats a good thing, but most
                  times it's better to move fast and get feedback. I'm working
                  on this.
                </p>
              </div>
              <p className=" text-gray-500 ml-auto hidden">Dec. 2, 2024</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium">What are your strengths?</p>
                <div className="flex flex-col gap-[4px]">
                  <p className=" text-gray-500">Two things:</p>
                  <p className=" text-gray-500">
                    Design isn't linear - it's messy. I don't bother with
                    step-by-step processes because it's unrealistic. I thrive in
                    vague, ever-changing environments. I consider this my
                    greatest strength.
                  </p>
                  <p className=" text-gray-500">
                    I understand that trust goes both ways. I weight subject
                    experts' opinion heavily when making decisions, but I can
                    also communicate my own thoughts without being a jerk.
                  </p>
                </div>
              </div>
              <p className=" text-gray-500 ml-auto hidden">Dec. 2, 2024</p>
            </div>

            <div className="pt-[32px]">
              <img
                src={sweden}
                alt="A picture from my honeymoon"
                className="rounded-lg"
              />
              <p className=" text-gray-500 pt-[8px]">
                Looking over Stockholm | 2021
              </p>
            </div>

            <div className="flex flex-col gap-[16px] pt-[32px]">
              <hr />
              <div className="flex">
                <p className="text-gray-500 ">Updated Apr. 2024</p>
                <p className="text-gray-500  ml-auto">Made in NYC 🗽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AMA;
