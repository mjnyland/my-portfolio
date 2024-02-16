import React from "react";

const Motionreel = () => {
  return (
    <div>
      Motionreel
      <div className="flex flex-col gap-[16px]">
        {" "}
        {/* Reel Container */}
        <h3 className="text-2xl lg:text-3xl pb-[16px]">Motion Reel</h3>
        <ReactPlayer
          url="https://vimeo.com/678435899?share=copy"
          controls="true"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Motionreel;
