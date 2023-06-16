import React from "react";
import { about } from "../constants";

const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = (e) => {
    console.log(e.target);
    e.target.play();
  };

  return (
    <div>
      <div className="flex">
        {about.avatar.map((avatar) => (
          <video
            src={avatar.video}
            key={avatar.name}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="w-[150px]"
          />
        ))}
      </div>
      <div className="border relative w-[500px] h-[400px]">
        <video
          src={about.avatar[0].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-0 left-20"
        />
        <video
          src={about.avatar[1].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-20 left-0"
        />
        <video
          src={about.avatar[2].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-20 left-40"
        />
        <video
          src={about.avatar[3].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute bottom-[-40px] left-20"
        />
      </div>
    </div>
  );
};

export default About;
